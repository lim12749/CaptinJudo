"use server"; // 이 파일이 서버에서 실행된다는 것을 Next.js에 알리는 지시어
import {
    PASSWORD_MIN_LENGTH,
    PASSWORD_REGEX,
    PASSWORD_REGEX_ERROR,
} from "@/lib/constants"; // 비밀번호 관련 상수 임포트

import db from "@/lib/db"; // 데이터베이스 접근을 위한 db 모듈 임포트
import { z } from "zod"; // 데이터 검증을 위한 Zod 라이브러리 임포트
import bcrypt from "bcrypt"; // 비밀번호 해시화를 위한 bcrypt 라이브러리 임포트
import { redirect } from "next/navigation"; // 페이지 네비게이션을 위한 모듈 임포트
import getSession from "@/lib/sesstion"; // 세션 관리를 위한 getSession 모듈 임포트

// 이메일이 존재하는지 확인하는 비동기 함수
const checkEmailExists = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email, // 주어진 이메일을 가진 사용자를 찾음
        },
        select: {
            id: true, // 사용자 ID만 선택
        },
    });
    return Boolean(user); // 이메일이 존재하면 true 반환, 그렇지 않으면 false 반환
};

// 폼 검증 스키마 정의
const formSchema = z.object({
    email: z
        .string()
        .email() // 이메일 형식인지 검증
        .toLowerCase() // 이메일을 소문자로 변환
        .refine(checkEmailExists, "An account with this email does not exist."), // 이메일이 존재하는지 검증
    password: z.string({
        required_error: "Password is required", // 비밀번호가 필수 항목임을 지정
    }),
    // .min(PASSWORD_MIN_LENGTH), // 비밀번호 최소 길이 검증
    // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR), // 비밀번호 정규식 검증
});

// 로그인 함수
export async function logIn(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"), // 폼 데이터에서 이메일 가져오기
        password: formData.get("password"), // 폼 데이터에서 비밀번호 가져오기
    };

    // 폼 데이터 검증
    const result = await formSchema.spa(data);
    if (!result.success) {
        // 검증 실패 시 에러 반환
        // console.log(result.error.flatten());
        return result.error.flatten(); // 검증 오류를 플래튼하여 반환
    } else {
        // 검증 성공 시, 사용자 정보 가져오기
        const user = await db.user.findUnique({
            where: {
                email: result.data.email, // 검증된 이메일로 사용자 찾기
            },
            select: {
                id: true, // 사용자 ID 선택
                password: true, // 사용자 비밀번호 선택
                admin: true, // 사용자 관리자 여부 선택
            },
        });

        // 비밀번호 비교
        const ok = await bcrypt.compare(
            result.data.password,
            user!.password ?? "xxxx" // 사용자 비밀번호와 입력한 비밀번호 비교
        );
        console.log(ok); // 비교 결과를 콘솔에 출력

        if (ok) {
            // 비밀번호가 일치하면 세션 생성 및 저장
            const session = await getSession(); // 세션 가져오기
            session.id = user!.id; // 세션에 사용자 ID 설정
            await session.save(); // 세션을 변경할 때마다 세션을 저장해야 함

            if (user!.admin) {
                // 사용자가 관리자인 경우
                redirect("/profile"); // 프로필 페이지로 리다이렉트
            } else {
                // 사용자가 관리자가 아닌 경우
                redirect("/"); // 홈 페이지로 리다이렉트
            }
        } else {
            // 비밀번호가 일치하지 않으면 에러 반환
            return {
                fieldError: {
                    password: ["Wrong password."], // 비밀번호 오류 메시지 설정
                    email: [], // 이메일 오류 메시지는 없음
                },
            };
        }
    }
}
