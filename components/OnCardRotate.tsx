import React, { useState } from 'react';
import Image from "next/image";
import ImageSlider from "@/components/Index";

const ProfileCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };
    const StoryText = `용인대 유도학과 출신의 젊은 부부가 함께 운영하는 유도관 입니다.
    두 아이의 부모로써 항상 부모의 마음으로 지도하고 있습니다.
    707특수임무단 예비역 대위(ROTC 55기) 출신 관장님의 체계적인 운동 프로그램으로 유도뿐만 아니라 체력증진 및 다이어트가 가능합니다.
    언제든 문의하시면 친절하게 상담 도와드리겠습니다.
    남녀노소 모두 할 수 있는 유도! 유도가 궁금하시다면 용인대 캡틴 유도장으로 오세요. 즐겁고 건강한 유도 함께 해요!`;
    return (
        <div>
            <style jsx>{`
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }

                .backface-hidden {
                    backface-visibility: hidden;
                }

                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
            <style jsx>{`
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }

                .backface-hidden {
                    backface-visibility: hidden;
                }

                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }

                .card-container {
                    perspective: 1000px;
                }

                .card {
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                    position: relative;
                }

                .card.flip {
                    transform: rotateY(180deg);
                }

                .card-face {
                    position: absolute;
                    width: 100%;
                    backface-visibility: hidden;
                    border-radius: 1rem;
                }

                .card-back {
                    transform: rotateY(180deg);
                }
            `}</style>
            <div className={`card ${isFlipped ? 'flip' : ''}`} onClick={handleCardClick}>
                {/* 소개 카드 앞면 */}
                <div
                    className="card-face bg-white text-black rounded-2xl w-full shadow-lg p-5 flex items-center flex-col">
                    <div className="w-full max-w-xs rounded-2xl overflow-hidden mt-4 mb-4">
                        <Image src="/img/Profile01.jpg" alt="관장님 프로필" width={300} height={300}
                               className="object-cover object-top w-full h-auto"/>
                    </div>
                    <div className="my-2 w-full max-w-xs">
                        <span className="block font-bold text-xl mb-2">김진우 관장 이력</span>
                        <ul className="list-disc list-inside space-y-2">
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
                {/* 소개 카드 뒷면 */}
                <div
                    className="card-face card-back bg-white text-black rounded-2xl w-full shadow-lg p-5 flex items-center flex-col">
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
            </div>
            {/* 지도자 소개 */}
            <section className="h-screen flex flex-col items-start justify-start m-0 p-4">

                <p className="flex text-4xl font-bold py-4 text-left">지도자 소개</p>
                <p className="flex font-bold text-left">[용인시 최초 부부 유도관장]</p>
                <div className="card-container w-full max-w-md mx-auto">
                    <div className={`card ${isFlipped ? 'flip' : ''}`} onClick={handleCardClick}>
                        {/* 소개 카드 앞면 */}
                        <div className="card-face bg-white text-black rounded-2xl w-full shadow-lg p-5 flex items-center flex-col">
                            <div className="w-full max-w-xs rounded-2xl overflow-hidden mt-4 mb-4">
                                <Image src="/img/Profile01.jpg" alt="관장님 프로필" width={300} height={300}
                                       className="object-cover object-top w-full h-auto" />
                            </div>
                            <div className="my-2 w-full max-w-xs">
                                <span className="block font-bold text-xl mb-2">김진우 관장 이력</span>
                                <ul className="list-disc list-inside space-y-2">
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
                        {/* 소개 카드 뒷면 */}
                        <div className="card-face card-back bg-white text-black rounded-2xl w-full shadow-lg p-5 flex items-center flex-col">
                            <div className="w-full max-w-xs rounded-2xl overflow-hidden mt-4 mb-4">
                                <Image src="/img/Profile2.jpg" alt="관장님 프로필" width={300} height={300}
                                       className="object-cover object-top w-full h-auto" />
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
                    </div>
                </div>
            </section>

            <section className="h-screen flex flex-col items-start justify-start m-0 p-4 ">
                <p className="text-4xl font-bold py-4 text-left">내부 사진</p>
                <div
                    className="bg-white text-black rounded-2xl w-full shadow-2xl my-6 p-5 flex items-center flex-col">
                    <ImageSlider/>
                </div>
            </section>

            <section className="h-screen flex flex-col items-start justify-start m-0 p-4">
                <p className="text-4xl font-bold py-4 text-left">정규 시간표</p>
                <div
                    className="bg-white text-black rounded-2xl w-full shadow-lg flex items-center flex-col">
                    <div className="rounded-3xl bg-white">
                        <Image src="/img/Timetable.png" alt="운영 시간표" width={400} height={300}
                               className="object-cover object-top w-full h-auto"/>
                    </div>
                </div>
            </section>

            <section className="h-screen flex flex-col items-start justify-start m-0 p-4 ">
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
        </div>
    );
};

export default ProfileCard;
