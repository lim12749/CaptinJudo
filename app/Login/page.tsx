"use client";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        alert("로그인 버튼이 눌렸습니다!");
    };

    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center gap-10 py-8 px-6">
            <form onSubmit={handleLogin} className="w-full flex flex-col items-start gap-2">
                <div className="w-full flex flex-col items-start gap-2 font-bold">
                    <h1 className="text-2xl">로그인</h1>
                    <h2 className="text-xs">로그인을 위해 이메일과 비밀번호를 입력해주세요</h2>
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md ring-black ring-2 border-none focus:ring-blue-300 focus:ring-4 focus:outline-none"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="패스워드"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md ring-black ring-2 border-none focus:ring-blue-300 focus:ring-4 focus:outline-none mt-4"
                />
                <button type="submit" className="bg-orange-400 h-10 w-full text-white mt-4">로그인</button>
            </form>
        </div>
    );
}
