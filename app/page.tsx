"use client"

import React from 'react';
import Image from 'next/image';
import ImageSlider from '@/components/Index';
import ButtonSlider from "@/components/ButtonImageSlider";
export default function Home() {
    const InstaButtonClick = () => {
        window.location.href = 'https://www.instagram.com/captain_judo/';
    };
    const NaverBlogButtonClick = () => {
        window.location.href = 'https://m.blog.naver.com/captain_judo?tab=1';
    };

  return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <header className="w-full fixed top-0 z-50 bg-gray-800 text-white py-4 flex justify-between items-center">
          <p className="text-xl font-bold ml-2">CPT 캡틴 유도관</p>
        </header>

          <div className="flex flex-col w-full relative mt-16">
              <div className="bg-white h-screen flex items-center justify-center relative">
                  <div className="">
                      <p className="px-4 mt-[-10rem] font-bold text-7xl">CAPTAIN JUDO</p>
                      <p className="text-right font-bold text-2xl mr-14">유능제강</p>
                      <p className="text-right font-bold text-2xl mt-4 mr-14">예시예종</p>
                  </div>
                  <div className="flex space-x-3 absolute bottom-4 right-4">
                      <button type="button"
                              onClick={InstaButtonClick}
                              className="bg-green-500 rounded-xl w-12 h-12">
                          <Image src="/img/InstagramIcon.png" alt="인스타그램 바로가기" width={200} height={200}/>
                      </button>
                      <button type="button"
                              onClick={NaverBlogButtonClick}
                              className="bg-green-500 rounded-xl w-12 h-12 text-white font-bold text-lg">blog</button>
                  </div>
              </div>

              <div className="h-screen flex flex-col items-start justify-start m-0 p-4">
                  <p className="text-4xl font-bold py-4">지도자 소개</p>
                  <p className=" font-bold mb-4">[용인시 최초 유도관장]</p>
                  <div className="bg-white text-black rounded-2xl w-full shadow-lg p-5 flex items-center flex-col">

                      {/* 이미지 컨테이너를 원형으로 만들고 크기를 설정합니다 */}
                      <div className="w-80 h-80 rounded-2xl overflow-hidden mt-4 mb-4">
                          <Image src="/img/Profile2.jpg" alt="관장님 프로필" width={400} height={300}
                                 className="object-cover object-top w-full h-full"/>
                      </div>
                      <div className="my-2">
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
              </div>

              <div className="bg-white h-screen flex flex-col items-start justify-start m-0 p-4">
                  <p className="text-4xl font-bold py-4">내부 사진</p>
                  <div className="bg-white text-black rounded-2xl w-full shadow-lg p-5 flex items-center flex-col">
                      <ImageSlider/>
                  </div>
              </div>
              <div className="h-screen flex flex-col items-start justify-start m-0 p-4">
                  <p className="text-4xl font-bold py-4">정규 시간표</p>
                  <p className=" font-bold mb-4">--------------------------------------------------</p>
                  <div className="bg-white text-black rounded-2xl w-full shadow-lg p-5 flex items-center flex-col">
                      <Image src="/img/Timetable.png" alt="운영 시간표" width={400} height={300}
                             className="object-cover object-top w-full h-full"/>
                  </div>
              </div>
              <div className="bg-white h-screen flex flex-col items-start justify-start m-0 p-4">
                  <p className="text-4xl font-bold py-4">오시는 길</p>
                  <p className=" font-bold mb-4">주소 : 경기 용인시 기흥구 새천년로16번길 3-2 2층 201호 용인대캡틴유도</p>
                  <div className="bg-white text-black rounded-2xl w-full shadow-lg p-5 flex-col inline-flex">
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
              </div>
          </div>
      </main>
  );
}
