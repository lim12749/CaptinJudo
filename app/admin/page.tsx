"use client";
import { useRouter } from "next/router";

export default function AdminPage() {
    const router = useRouter();

    const handleLogout = () => {
        // 로그아웃 로직을 여기에 추가 (예: 인증 토큰 삭제)
        router.push("/login");
    };

    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center gap-10 py-8 px-6">
            <div className="w-full flex flex-col items-center gap-2 font-bold">
                <h1 className="text-3xl">관리자 대시보드</h1>
                <h2 className="text-xl">환영합니다, 관리자님!</h2>
            </div>
            <button
                onClick={handleLogout}
                className="bg-red-500 h-10 w-full text-white mt-4"
            >
                로그아웃
            </button>
        </div>
    );
}