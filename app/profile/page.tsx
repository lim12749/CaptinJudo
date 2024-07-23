import db from "@/lib/db"; // 데이터베이스 접근을 위한 db 모듈 임포트
import getSession from "@/lib/sesstion"; // 세션 관리를 위한 getSession 모듈 임포트
import { notFound, redirect } from "next/navigation"; // 페이지 네비게이션을 위한 모듈 임포트
import Link from "next/link"; // 페이지 링크를 위한 Link 컴포넌트 임포트
import React, { useState } from "react"; // React 임포트

// 현재 세션에 해당하는 유저 정보를 가져오는 비동기 함수
async function getUser() {
    const session = await getSession(); // 세션 정보를 가져옴
    if (session.id) {
        const user = await db.user.findUnique({
            where: {
                id: session.id,
            },
            select: {
                id: true,
                username: true,
                instaLink: true,
                naverLink: true,
            },
        });
        if (user) {
            return user; // 유저 정보를 반환
        }
    }
    notFound(); // 유저를 찾지 못한 경우 notFound 페이지로 이동
}

// 프로필 페이지 컴포넌트
export default async function Profile() {
    const user = await getUser(); // 유저 정보를 가져옴

    // 로그아웃 함수
    const logOut = async () => {
        "use server";
        const session = await getSession(); // 세션 정보를 가져옴
        await session.destroy(); // 세션을 파기
        redirect("/"); // 메인 페이지로 리다이렉트
    };

    // 링크 업데이트 함수
    const updateLinks = async (event: React.FormEvent) => {
        "use server";
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const instaLink = formData.get("instaLink") as string;
        const naverLink = formData.get("naverLink") as string;
        await fetch("/api/updateLinks", {
            method: "POST",
            body: JSON.stringify({ instaLink, naverLink }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        window.location.reload();
    };

    return (
        <div className="flex flex-col w-full relative bg-gray-100 min-h-screen">
            {/* 상단 고정 네비게이션 바 */}
            <div className="fixed w-full z-10 bg-white shadow">
                <nav className="flex items-center justify-between p-4">
                    <form action={logOut}>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                            Log out
                        </button>
                    </form>
                </nav>
            </div>
            {/* 유저 환영 메시지 및 프로필 정보 */}
            <div className="mt-16 p-4">
                <h1 className="text-2xl font-bold mb-4">Welcome! {user?.username}!</h1>
                <div>
                    {/* 링크 변경 섹션 */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">링크 변경</h2>
                        <p>Instagram Link: {user?.instaLink}</p>
                        <p>Naver Blog Link: {user?.naverLink}</p>
                        <form onSubmit={updateLinks}>
                            <div>
                                <label htmlFor="instaLink" className="block text-sm font-medium text-gray-700">
                                    Instagram Link
                                </label>
                                <input
                                    type="text"
                                    name="instaLink"
                                    defaultValue={user?.instaLink || ""}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="naverLink" className="block text-sm font-medium text-gray-700">
                                    Naver Blog Link
                                </label>
                                <input
                                    type="text"
                                    name="naverLink"
                                    defaultValue={user?.naverLink || ""}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Update Links
                            </button>
                        </form>
                    </div>
                    {/* 소개 사진 섹션 */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">소개 사진</h2>
                    </div>
                    {/* 내부 사진 섹션 */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">내부 사진</h2>
                    </div>
                    {/* 시간표 사진 섹션 */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">시간표 사진</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
