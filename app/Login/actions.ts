"use server";

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
            email,
        },
        select: {
            id: true,
        },
    });
    return Boolean(user); // 이메일이 존재하면 true 반환, 그렇지 않으면 false 반환
};

// 폼 검증 스키마 정의
const formSchema = z.object({
    email: z
        .string()
        .email()
        .toLowerCase()
        .refine(checkEmailExists, "An account with this email does not exist."), // 이메일이 존재하는지 검증
    password: z.string({
        required_error: "Password is required",
    }),
    // .min(PASSWORD_MIN_LENGTH),
    // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
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
        //console.log(result.error.flatten());
        return result.error.flatten();
    } else {
        // 검증 성공 시, 사용자 정보 가져오기
        const user = await db.user.findUnique({
            where: {
                email: result.data.email,
            },
            select: {
                id: true,
                password: true,
            },
        });

        // 비밀번호 비교
        const ok = await bcrypt.compare(
            result.data.password,
            user!.password ?? "xxxx" // 사용자 비밀번호와 입력한 비밀번호 비교
        );
        console.log(ok);

        if (ok) {
            // 비밀번호가 일치하면 세션 생성 및 저장
            const session = await getSession();
            session.id = user!.id;
            await session.save(); // 세션을 변경할 때마다 세션을 저장해야 함
            redirect("/profile"); // 프로필 페이지로 리다이렉트
        } else {
            // 비밀번호가 일치하지 않으면 에러 반환
            return {
                fieldError: {
                    password: ["Wrong password."],
                    email: [],
                },
            };
        }
    }
}
