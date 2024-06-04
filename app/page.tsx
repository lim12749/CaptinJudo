"use client"

import React, {useState} from 'react';
import Image from 'next/image';
import ImageSlider from '@/components/Index';
import ProfileCard from "@/components/OnCardRotate";
import ButtonSlider from "@/components/ButtonImageSlider";

export default function Home() {
    const InstaButtonClick = () => {
        window.location.href = 'https://www.instagram.com/captain_judo/';
    };
    const NaverBlogButtonClick = () => {
        window.location.href = 'https://m.blog.naver.com/captain_judo?tab=1';
    };

    //값 감지 변수 / 리엑트 동작시킬 함수 정의
    const [isMenuOpen, OnIsMenuOpen] = useState(false);
    const NevMenu = () => { OnIsMenuOpen(!isMenuOpen); } //함수 정의

    const StoryText = `용인대 유도학과 출신의 젊은 부부가 함께 운영하는 유도관 입니다.
    두 아이의 부모로써 항상 부모의 마음으로 지도하고 있습니다.
    707특수임무단 예비역 대위(ROTC 55기) 출신 관장님의 체계적인 운동 프로그램으로 유도뿐만 아니라 체력증진 및 다이어트가 가능합니다.
    언제든 문의하시면 친절하게 상담 도와드리겠습니다.
    남녀노소 모두 할 수 있는 유도! 유도가 궁금하시다면 용인대 캡틴 유도장으로 오세요. 즐겁고 건강한 유도 함께 해요!`;

    return (
        <div className="flex flex-col w-full relative">
            {/*상단에 고정하기위해 fixed*/}
            <div className="fixed w-full z-10">
                <nav className="bg-white flex items-center justify-between p-4">
                    <a href="http://localhost:8080" className="mx-2">
                        <p className="text-3xl font-bold">CPT</p>
                    </a>
                    {/*버튼에 메뉴바 아이콘 추가해야함*/}
                    <button type="button"
                            onClick={NevMenu}
                            className="bg-gray-200 rounded-xl w-8 h-8 mx-2"/>
                </nav>
                {isMenuOpen && (
                    <div className=" w-full bg-white shadow-2xl z-10">
                        <ul className="flex flex-col p-4 space-y-8">
                            <li><a href="#section1" onClick={NevMenu}
                                   className="">소개</a></li>
                            <li><a href="#section2" onClick={NevMenu}
                                   className="">시설</a></li>
                            <li><a href="#section3" onClick={NevMenu}
                                   className="">시간표</a></li>
                            <li><a href="#section4" onClick={NevMenu}
                                   className="">오시는길</a></li>
                            <li>로그인</li>
                        </ul>
                    </div>
                )}
            </div>
            {/* 메인 콘텐츠 */}
            <main className="w-full">
                {/*메인 타이틀 위치*/}
                <section className="bg-gray-50 h-screen flex flex-col items-center justify-center relative m-0 p-4 ">
                    <div>
                        <p className="px-4 mt-[-10rem] font-bold text-7xl">CAPTAIN JUDO</p>
                        <p className="px-4 text-left font-bold text-2xl mt-2">유능제강</p>
                        <p className="px-4 text-left font-bold text-2xl mt-2">예시예종</p>
                    </div>
                    {/*position이 relative, absolute,는 문서 흐름에서 벗어나 고정된 위치에 배치됨*/}
                    <div className="flex space-x-3 absolute bottom-4 right-4">
                        <button
                            type="button"
                            onClick={InstaButtonClick}
                            className="bg-green-500 rounded-xl w-12 h-12"
                        >
                            <Image src="/img/InstagramIcon.png" alt="인스타그램 바로가기" width={200} height={200}/>
                        </button>
                        <button
                            type="button"
                            onClick={NaverBlogButtonClick}
                            className="bg-green-500 rounded-xl w-12 h-12 text-white font-bold text-lg"
                        >
                            blog
                        </button>
                    </div>
                </section>
                {/* 관장 소개 */}
                <section id="section1" className="  flex flex-col p-4">
                    <p className="text-4xl font-bold py-4 text-left">관장 소개</p>
                    {/*배경*/}
                    <div className="bg-white rounded-2xl w-full shadow-lg flex items-center flex-col">

                        <div className="w-full max-w-xs ">
                            <div className="w-full max-w-xs overflow-hidden mt-4 mb-4 rounded-2xl ">
                                <Image src="/img/Profile01.jpg" alt="관장님 프로필" width={300} height={300}
                                       className="object-cover object-top w-full h-auto"/>
                            </div>
                            <span className="block font-bold text-xl">김진우 관장 이력</span>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>용인대학교 유도학과 졸업</li>
                                <li>용인대학교 특수체육학과 부전공</li>
                                <li className="font-bold mt-2">대한유도회 공인 유도 4단</li>
                                <li>생활체육지도자 2급 (유도, 보디빌딩)</li>
                                <li>유도 지도자 2급</li>
                                <li>유도 심판 2급</li>
                                <li className="font-bold mt-2">특전사 707특임단 대위 전역 (학군 55기)</li>
                                <li>특전사 특공무술 3단</li>
                                <li>사회복지사 2급</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="card-face card-back bg-white text-black rounded-2xl w-full shadow-lg p-5 flex items-center flex-col mt-4">
                        <div className="w-full max-w-xs rounded-2xl overflow-hidden mt-4 mb-4">
                            <Image src="/img/Profile2.jpg" alt="관장님 프로필" width={300} height={300}
                                   className="object-cover object-top w-full h-auto"/>
                        </div>
                        <div className="my-2 w-full max-w-xs">
                            <span className="block font-bold text-xl mb-2">캡틴 유도관 스토리</span>
                            <div>
                                {StoryText.split('\n').map((line, index) => (
                                    <p key={index}>{line.trim()}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                </section>
                <section id="section2" className="flex flex-col items-start justify-start m-0 p-4 ">
                    <p className="text-4xl font-bold py-4 text-left">내부 사진</p>
                    <div
                        className="bg-white text-black rounded-2xl w-full shadow-2xl my-6 p-5 flex items-center flex-col">
                        <ImageSlider/>
                    </div>
                </section>
                <section id="section3" className="flex flex-col items-start justify-start m-0 p-4">
                    <p className="text-4xl font-bold py-4 text-left">정규 시간표</p>
                    <div
                        className="bg-white text-black rounded-2xl w-full shadow-lg flex items-center flex-col">
                        <div className="rounded-3xl bg-white">
                            <Image src="/img/Timetable.png" alt="운영 시간표" width={400} height={300}
                                   className="object-cover object-top w-full h-auto"/>
                        </div>
                    </div>
                </section>
                <section id="section4" className="flex flex-col items-start justify-start m-0 p-4 ">
                    <p className="text-4xl font-bold py-4 text-left">오시는 길</p>
                    <p className="font-bold mb-4 text-left">주소 : 경기 용인시 기흥구 새천년로16번길 3-2 2층 201호 용인대캡틴유도</p>
                    <div className="bg-white text-black rounded-2xl w-full shadow-lg my-6 p-5 flex-col inline-flex">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12697.073656980016!2d127.09277361342654!3d37.288771867609384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5a62484cad8b%3A0xa3db3971ddeca119!2z6rK96riw64-EIOyaqeyduOyLnCDquLDtnaXqtawg7Iug6rCI64-ZIDcyMg!5e0!3m2!1sko!2skr!4v1717093129502!5m2!1sko!2skr"
                            width="100%"
                            height="450"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
            </main>
        </div>
    );
}
