import { useState } from "react";
import { useRouter } from "next/router";

export function useLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("로그인 시도");

        // 임시 데이터
        const validEmail = "admin@example.com";
        const validPassword = "admin123";

        if (email === validEmail && password === validPassword) {
            console.log("로그인 성공");
            // 로그인 성공 시 페이지 이동
            router.push("/admin");
        } else {
            console.log("로그인 실패");
            // 로그인 실패 시 경고
            alert("이메일 또는 패스워드가 잘못되었습니다.");
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
    };
}
