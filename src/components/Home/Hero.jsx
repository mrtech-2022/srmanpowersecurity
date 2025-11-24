"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SecurityServicesHero() {
    const [currentSlide, setCurrentSlide] = useState(0);


    const backgroundImages = [
        '../../assets/home/hero_image/security.jpg',
        '../../assets/home/hero_image/gunman.jpg',
        '../../assets/home/hero_image/Pratol.jpg',
        '../../assets/home/hero_image/Gurd.jpg',
        '../../assets/home/hero_image/Gurd2.jpg',
        '../../assets/home/hero_image/manpower.jpg',
        '../../assets/home/hero_image/manpower2.jpg',
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);


        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-900">

            <div className="h-[calc(100vh-12vh)] relative overflow-hidden mx-auto justify-center items-center flex">

                <div className="absolute inset-0">
                    {backgroundImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
                        </div>
                    ))}
                </div>


                <div className="relative h-full flex items-center mx-auto">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <p className="text-white text-lg mb-4 font-semibold">YOUR SAFETY, OUR EFFORT</p>
                            <h2 className="text-white text-3xl md:text-6xl font-bold mb-8 leading-tight">
                                BEST MANPOWER & SECURITY SERVICE
                            </h2>
                            <button className="px-8 py-3 bg-primary text-white font-semibold hover:bg-blue-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>


                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {backgroundImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-colors z-10"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-colors z-10"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    );
}