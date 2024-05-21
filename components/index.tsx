"use client"
import { useState, useEffect } from 'react';

import img1 from '../public/img/Bg00.jpg';
import img2 from '../public/img/Bg01.jpg';
import img3 from '../public/img/Bg02.jpg';

const Images=[img1,img2,img3];

export default function ImageSlider()
{
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
        }, 1000); // 3초마다 이미지 변경

        return () => clearInterval(interval);
    },[]);
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Image Slider</h1>
            <div className="w-full max-w-screen-sm h-64 overflow-hidden relative px-10">
                <img
                    src={Images[currentIndex].src}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
        </div>
    );
}