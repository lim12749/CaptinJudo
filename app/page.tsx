"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Home() {
    const [instaLink] = useState("https://www.instagram.com/captain_judo/");
    const [naverLink] = useState("https://m.blog.naver.com/captain_judo?tab=1");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const StoryText = `용인대 유도학과 출신의 젊은 부부가 함께 운영하는 유도관 입니다.
    두 아이의 부모로써 항상 부모의 마음으로 지도하고 있습니다.
    707특수임무단 예비역 대위(ROTC 55기) 출신 관장님의 체계적인 운동 프로그램으로 유도뿐만 아니라 체력증진 및 다이어트가 가능합니다.`;

    return (
        <div className="flex flex-col w-full relative text-black">
            {/* 네비게이션 바 */}
            <motion.nav 
                className="fixed w-full z-50 bg-white/80 backdrop-blur-md"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                    <motion.a 
                        href="/" 
                        className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        CAPTAIN JUDO
                    </motion.a>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16"/>
                        </svg>
                    </motion.button>
                </div>

                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full w-full bg-white shadow-xl"
                    >
                        <div className="max-w-7xl mx-auto py-4">
                            <ul className="space-y-4 px-4">
                                {['소개', '시설', '시간표', '오시는길'].map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        whileHover={{ x: 10 }}
                                    >
                                        <a 
                                            href={`#section${index + 1}`}
                                            className="text-lg font-medium hover:text-blue-600 transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            <main className="w-full">
                {/* 히어로 섹션 */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="mb-12"
                            >
                                <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                                    CAPTAIN JUDO
                                </h1>
                            </motion.div>

                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="space-y-6"
                            >
                                <div className="flex flex-col items-center space-y-2">
                                    <p className="text-3xl font-medium text-gray-700 tracking-wide">
                                        유능제강 · 예시예종
                                    </p>
                                    <div className="w-20 h-1 bg-blue-600 rounded-full"/>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* SNS 링크 */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-8 right-8 flex space-x-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = instaLink}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg"
                        >
                            <Image src="/img/InstagramIcon.png" alt="Instagram" width={24} height={24} className="invert"/>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = naverLink}
                            className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-full shadow-lg"
                        >
                            <span className="text-white font-bold">N</span>
                        </motion.button>
                    </motion.div>
                </motion.section>

                {/* 소개 섹션 */}
                <motion.section
                    id="section1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="py-32 px-4 bg-gradient-to-b from-white to-gray-50"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">관장 소개</h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"/>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-1/2"
                            >
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/img/Profile01.jpg"
                                        alt="관장님 프로필"
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:w-1/2 space-y-8"
                            >
                                <div>
                                    <h3 className="text-3xl font-bold mb-2">김진우 관장</h3>
                                    <p className="text-lg text-blue-600 font-medium">용인대 캡틴 유도관</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"/>
                                            학력 및 자격
                                        </h4>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"/>
                                                용인대학교 유도학과 졸업
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"/>
                                                대한유도회 공인 유도 4단
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"/>
                                            경력 사항
                                        </h4>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"/>
                                                707특임단 대위 전역 (학군 55기)
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {StoryText}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* 시설 섹션 */}
                <motion.section
                    id="section2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">내부 시설</h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"/>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <Image
                                        src={`/img/facility${index}.jpg`}
                                        alt={`시설 이미지 ${index}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* 시간표 섹션 */}
                <motion.section
                    id="section3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="py-32 px-4 bg-gradient-to-b from-white to-gray-50"
                >
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">정규 시간표</h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"/>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                { title: "초등부", time: "17:30 ~ 18:20", duration: "50분", color: "yellow" },
                                { title: "전연령 1부", time: "19:30 ~ 20:30", duration: "60분", color: "blue" },
                                { title: "전연령 2부", time: "21:00 ~ 22:00", duration: "60분", color: "blue" },
                                { title: "선수 입시반", time: "22:10 ~", duration: "특별반", color: "red" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-center">
                                        <div className={`w-2 h-full bg-${item.color}-${item.color === "yellow" ? "400" : "500"}`}/>
                                        <div className="flex-1 p-6">
                                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-600 mt-2">{item.time}</p>
                                        </div>
                                        <div className="px-6">
                                            <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-${item.color}-100 text-${item.color}-800`}>
                                                {item.duration}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-12 text-center text-gray-500 text-sm"
                        >
                            * 수업 시작 10분 전까지 도착해주세요
                        </motion.div>
                    </div>
                </motion.section>

                {/* 오시는 길 섹션 */}
                <motion.section
                    id="section4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">오시는 길</h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"/>
                        </motion.div>

                        <div className="grid lg:grid-cols-5 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-3"
                            >
                                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12697.073656980016!2d127.09277361342654!3d37.288771867609384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5a62484cad8b%3A0xa3db3971ddeca119!2z6rK96riw64-EIOyaqeyduOyLnCDquLDtnaXqtawg7Iug6rCI64-ZIDcyMg!5e0!3m2!1sko!2skr!4v1717093129502!5m2!1sko!2skr"
                                        width="100%"
                                        height="500"
                                        style={{border: 0}}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-2 space-y-6"
                            >
                                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <h3 className="text-xl font-bold mb-4 flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        도로명 주소
                                    </h3>
                                    <p className="text-gray-600">
                                        경기 용인시 기흥구 새천년로16번길 3-2 2층 201호
                                    </p>
                                    <p className="text-blue-600 font-medium mt-2">
                                        용인대캡틴유도
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <h3 className="text-xl font-bold mb-4 flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                        </svg>
                                        교통 안내
                                    </h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start">
                                            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 mt-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
                                                </svg>
                                            </span>
                                            <span>자가용: 건물 내 주차 가능</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-medium text-blue-900 mb-2">
                                        찾아오시는 길 문의
                                    </h3>
                                    <p className="text-blue-700">
                                        길찾기가 어려우시다면 연락주세요
                                    </p>
                                    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                        전화하기
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    );
}