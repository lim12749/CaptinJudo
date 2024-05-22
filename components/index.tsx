"use client";
import { useState, useEffect } from 'react';
import '@/containers/styles/ImageSlider.css'

import img1 from '../public/img/Bg00.jpg';
import img2 from '../public/img/Bg01.jpg';
import img3 from '../public/img/Bg02.jpg';

const images = [img1, img2, img3];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000); // 3초마다 이미지 변경

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Image Slider</h1>
            <div className="w-full max-w-screen-sm h-64 overflow-hidden relative px-10 slider-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={`Slide ${index}`}
                        className={`slider-image ${index === currentIndex ? "show" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}