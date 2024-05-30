"use client"; // Next.js에서 클라이언트 측에서만 실행되는 컴포넌트를 정의

import { useState, useEffect, useRef } from 'react'; // React 훅들을 import
import Image from 'next/image'; // Next.js의 Image 컴포넌트를 import

// 이미지 파일을 가져옵니다.
import bg00 from '../public/img/bg_00.jpg';
import bg01 from '../public/img/bg_01.jpg';
import bg02 from '../public/img/bg_02.jpg';
import bg03 from '../public/img/bg_03.jpg';

// 이미지 파일 배열을 정의
const images = [bg00, bg01, bg02, bg03];

export default function ImageSlider()
{
    // 현재 슬라이드의 인덱스를 관리하는 상태 변수
    const [currentIndex, setCurrentIndex] = useState(0);
    // 슬라이드 이동 중인지 여부를 관리하는 상태 변수
    const [isTransitioning, setIsTransitioning] = useState(false);
    // 슬라이더 컨테이너의 DOM 요소를 참조하기 위한 ref
    const sliderRef = useRef<HTMLDivElement>(null);
    // 슬라이드의 총 개수를 계산
    const totalSlides = images.length;

    //useEffect(함수() => { },[]) //대괄호 안에 값이 없으면 마운트 됬을때 웹페이지가 처음 로드될때 처음 실행했을때를 동작함.
    useEffect(() =>
    {
        // 3초마다 슬라이드를 변경하기 위한 인터벌 설정
        //setInterval은 setTimeOut과 같은 역할
        const interval = setInterval(() =>
        {
            handleNext(); // 슬라이드를 다음으로 변경하는 함수 호출
        }, 5000); // 3초마다 슬라이드 변경

        return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌을 정리
    }, []);

    //업데이트마다 실행 [괄호안에 값이 있으면] 배열안에는 배열안에 검사하고 잎은 값을 넣어달라고 한다.
    useEffect(() =>
    {
        if (isTransitioning && sliderRef.current) // 슬라이드 이동 중인지 여부를 그리고 DOM 요소에 있는지?
        {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드 이동 애니메이션 적용
        }
    }, [currentIndex, isTransitioning]); // currentIndex 또는 isTransitioning 상태가 변경될 때마다 실행

    const handleNext = () =>
    {
        setIsTransitioning(true); // 슬라이드 이동 중 상태를 true로 설정
        setCurrentIndex((prevIndex) => prevIndex + 1); // 현재 슬라이드 인덱스를 증가시킴
    };

    //애니메이션이 끝났을때 호출되는 함수 슬라이더의 무한 순환을 구현함.
    const handleTransitionEnd = () =>
    {
        if (currentIndex >= totalSlides)
        {
            setIsTransitioning(false); // 슬라이드 이동 중 상태를 false로 설정  //슬라이드이미지가 이동중인지 상태를 체크하는 변수
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

    return (
            <div className="relative rounded-2xl overflow-hidden w-[300px] h-[300px]">
                <div
                    ref={sliderRef} // sliderRef를 슬라이더 컨테이너에 연결
                    className={`flex transition-transform duration-700 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
                    onTransitionEnd={handleTransitionEnd} // 트랜지션이 끝났을 때 handleTransitionEnd 함수 호출
                    style={{transform: `translateX(-${currentIndex * 100}%)`}} // 현재 슬라이드 위치로 이동
                >
                    {images.concat(images[0]).map((image, index) => (
                        <div
                            className="flex-shrink-0 w-[300px] h-[300px]"
                            key={index} // 고유한 key 값 설정
                        >
                            {/* Next.js의 Image 컴포넌트를 사용하여 이미지 렌더링 */}
                            <Image src={image} alt={`Slide ${index}`} width={400} height={400} objectFit="cover"/>
                        </div>
                    ))}
                </div>
        </div>
    );
}
