"use client"; // Next.js에서 클라이언트 측에서만 실행되는 컴포넌트를 정의

import { useState, useEffect, useRef } from 'react'; // React 훅들을 import
import Image from 'next/image'; // Next.js의 Image 컴포넌트를 import

// 이미지 파일을 가져옵니다.
import bg00 from '../public/img/Slid00.jpg';
import bg01 from '../public/img/Slide01.jpg';
import bg02 from '../public/img/Slide02.jpg';

// 이미지 파일 배열을 정의
const images = [bg00, bg01, bg02];

export default function ImageSlider() {
    // 현재 슬라이드의 인덱스를 관리하는 상태 변수
    const [currentIndex, setCurrentIndex] = useState(0);
    // 슬라이드 이동 중인지 여부를 관리하는 상태 변수
    const [isTransitioning, setIsTransitioning] = useState(false);
    // 슬라이더 컨테이너의 DOM 요소를 참조하기 위한 ref
    const sliderRef = useRef<HTMLDivElement>(null);
    // 슬라이드의 총 개수를 계산
    const totalSlides = images.length;

    useEffect(() => {
        // 5초마다 슬라이드를 변경하기 위한 인터벌 설정
        const interval = setInterval(() => {
            handleNext(); // 슬라이드를 다음으로 변경하는 함수 호출
        }, 5000); // 5초마다 슬라이드 변경

        return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌을 정리
    }, []);

    useEffect(() => {
        if (isTransitioning && sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드 이동 애니메이션 적용
        }
    }, [currentIndex, isTransitioning]);

    const handleNext = () => {
        setIsTransitioning(true); // 슬라이드 이동 중 상태를 true로 설정
        setCurrentIndex((prevIndex) => prevIndex + 1); // 현재 슬라이드 인덱스를 증가시킴
    };

    //애니메이션이 끝났을때 호출되는 함수 슬라이더의 무한 순환을 구현함.
    const handleTransitionEnd = () => {
        if (currentIndex >= totalSlides) {
            setIsTransitioning(false); // 슬라이드 이동 중 상태를 false로 설정
            setCurrentIndex(0); // 현재 슬라이드 인덱스를 0으로 재설정
            if (sliderRef.current) {
                sliderRef.current.style.transition = 'none'; // 트랜지션 효과를 일시적으로 비활성화
                sliderRef.current.style.transform = `translateX(0%)`; // 슬라이드를 첫 번째 위치로 이동
            }
            setTimeout(() => {
                if (sliderRef.current) {
                    sliderRef.current.style.transition = ''; // 트랜지션 효과를 다시 활성화
                }
            }, 50); // 짧은 시간 후 트랜지션 효과를 다시 활성화
        }
    };

    const handleIndicatorClick = (index: number) => {
        setIsTransitioning(true); // 슬라이드 이동 중 상태를 true로 설정
        setCurrentIndex(index); // 클릭한 인덱스로 슬라이드 이동
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden w-[300px] h-[400px] my-2">
                <div
                    ref={sliderRef} // sliderRef를 슬라이더 컨테이너에 연결
                    className={`flex transition-transform duration-700 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
                    onTransitionEnd={handleTransitionEnd} // 트랜지션이 끝났을 때 handleTransitionEnd 함수 호출
                    style={{transform: `translateX(-${currentIndex * 100}%)`}} // 현재 슬라이드 위치로 이동
                >
                    {images.concat(images[0]).map((image, index) => (
                        <div
                            className="flex-shrink-0 w-[300px] h-[400px]"
                            key={index} // 고유한 key 값 설정
                        >
                            <Image src={image} alt={`Slide ${index}`} width={400} height={400} objectFit="cover"/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-200 rounded-xl my-2 px-3 py-2 flex justify-center items-center">
                <div className=" flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
                            onClick={() => handleIndicatorClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}