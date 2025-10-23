'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        title: 'Organic & Healthy Vegetables',
        subtitle: 'Starting at $20.00',
        image: 'https://img.freepik.com/free-photo/traditional-salad-with-pieces-medium-rare-grilled-ahi-tuna-sesame-with-fresh-vegetable-salad-rice-plate_2829-18465.jpg?semt=ais_hybrid&w=740&q=80',
    },
    {
        id: 2,
        title: 'Fresh Fruits Every Day',
        subtitle: 'Starting at $15.00',
        image: 'https://media.istockphoto.com/id/496165530/photo/vegetable-tablet-hero-header.jpg?s=612x612&w=0&k=20&c=iyHexF-pgVSb5fNa_fA7iBckjMBOlN54zR8EVqlEw2g=',
    },
    {
        id: 3,
        title: 'Healthy Smoothies',
        subtitle: 'Starting at $10.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDMgeAtlf5ogNhs2EudeJrpN8xLf4IRAQfA&s',
    },
];

const HeroBanner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className='my-10'>
            {/* Settings Icon */}
            <motion.div
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'linear',
                }}
            >
                <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-gray-700 hover:bg-gray-600 text-white border-none shadow-md"
                >
                    <Settings className="h-5 w-5" />
                </Button>
            </motion.div>





            <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl container mx-auto ">
                <AnimatePresence mode="wait">
                    {slides.map(
                        (slide, index) =>
                            index === current && (
                                <motion.div
                                    key={slide.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="absolute inset-0 z-0"
                                        unoptimized
                                    />

                                    <div className="absolute inset-0 bg-black/40 z-10"></div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 1 }}
                                        className="relative z-20 flex flex-col justify-center h-full px-6 md:px-16 max-w-lg text-white"
                                    >
                                        <p className="text-green-400 text-lg mb-2">{slide.subtitle}</p>
                                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                            {slide.title}
                                        </h1>
                                        <Button className="w-fit bg-green-600 hover:bg-green-700 text-white px-10 py-7 rounded-md text-lg">
                                            <Link href={''}>Shop Now &raquo;</Link>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            )
                    )}
                </AnimatePresence>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
                    <Button variant="outline" size="icon" onClick={prevSlide}>
                        <ChevronLeft className="h-6 w-6 text-black font-bold" />
                    </Button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
                    <Button variant="outline" size="icon" onClick={nextSlide}>
                        <ChevronRight className="h-6 w-6 text-black" />
                    </Button>
                </div>



                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {slides.map((_, idx) => (
                        <span
                            key={idx}
                            className={`h-2 w-8 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'
                                }`}
                        ></span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HeroBanner;
