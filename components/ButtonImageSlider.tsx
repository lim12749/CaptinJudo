"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import bg00 from '../public/img/Bg00.jpg';
import bg01 from '../public/img/Bg01.jpg';
import bg02 from '../public/img/Bg02.jpg';

const ButtonSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [bg00, bg01, bg02];

    const showSlide = (index: number) => {
        if (index >= images.length) {
            setCurrentIndex(0);
        } else if (index < 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(index);
        }
    };

    const nextSlide = () => {
        showSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        showSlide(currentIndex - 1);
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="flex transition-transform duration-300 h-full" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}>
                {images.map((src, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <Image src={src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button className="absolute top-1/2 left-0 ml-2 p-2 bg-gray-200 rounded-full transform -translate-y-1/2" onClick={prevSlide}>&#9664;</button>
            <button className="absolute top-1/2 right-0 mr-2 p-2 bg-gray-200 rounded-full transform -translate-y-1/2" onClick={nextSlide}>&#9654;</button>
        </div>
    );
};

export default ButtonSlider;
