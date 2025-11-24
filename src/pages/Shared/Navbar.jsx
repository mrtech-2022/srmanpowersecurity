"use client";
import React, { useState, useEffect } from 'react'
import { Facebook, Linkedin, Youtube, Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import LogoWithText from './LogoWithText';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {

                setIsVisible(false);
            } else {

                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };


    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSidebarOpen]);

    const navLinks = [
        {
            href: "/", label: "Home", icon: (
                <svg className={`w-5 h-5 ${isSidebarOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            )
        },
        { href: "/about-us", label: "About Us" },
        { href: "/our-services", label: "Our Services" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contacts", label: "Contact Us" }
    ];

    return (
        <div>
            <header className={`bg-white backdrop-blur-sm fixed w-full top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <LogoWithText />


                        <div className="hidden lg:flex items-center gap-6">
                            <div className="text-right">
                                <div className="flex items-center gap-2 text-white">
                                    <Phone className="w-4 h-4 text-red-500" />
                                    <div>
                                        <p className="text-xs text-gray-400">HOTLINE</p>
                                        <p className="text-sm text-primary font-semibold">+880 1898-801560</p>
                                        <p className="text-sm text-primary font-semibold">+880 1898-801561</p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex gap-2">
                                <a href="https://www.facebook.com/srsecuritybd" className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                                    <Facebook className="w-4 h-4 text-white" />
                                </a>
                                <a href="#" className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-blue-800 transition">
                                    <Linkedin className="w-4 h-4 text-white" />
                                </a>
                                <a href="#" className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                                    <Youtube className="w-4 h-4 text-white" />
                                </a>
                                <a href="#" className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition">
                                    <Phone className="w-4 h-4 text-white" />
                                </a>
                            </div>


                            <Link href={'/contacts'} className="">
                                <button className='text-xs bg-primary hover:bg-blue-700 text-white p-2 rounded-xl hover:cursor-pointer'> Free Consultation</button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-primary font-bold p-2 "
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu className="text-4xl font-bold" />
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="bg-primary hidden lg:block">
                    <div className="container mx-auto px-4">
                        <ul className="flex items-center gap-1">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 px-6 py-4 text-white hover:bg-blue-700 transition"
                                    >
                                        {link.icon && link.icon}
                                        <span className="font-semibold">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${isSidebarOpen ? 'opacity-50' : 'opacity-0'
                        }`}
                    onClick={() => setIsSidebarOpen(false)}
                />

                {/* Sidebar Content */}
                <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
                    <div className="flex items-center justify-between p-4 border-b">
                        <LogoWithText />
                        <button
                            className="p-2 text-gray-600 hover:text-gray-800"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-4 border-b">
                        <div className="flex items-center gap-2 text-gray-700 mb-3">
                            <Phone className="w-4 h-4 text-red-500" />
                            <div>
                                <p className="text-xs text-gray-500">HOTLINE</p>
                                <p className="text-sm text-primary font-semibold">+8801944474444</p>
                                <p className="text-sm text-primary font-semibold">+8801944464444</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                                <Facebook className="w-3 h-3 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition">
                                <Linkedin className="w-3 h-3 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                                <Youtube className="w-3 h-3 text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition">
                                <Phone className="w-3 h-3 text-white" />
                            </a>
                        </div>
                    </div>

                    <nav className="p-4">
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                                        onClick={handleLinkClick}
                                    >
                                        {link.icon && link.icon}
                                        <span className="font-medium">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="absolute bottom-4 left-4 right-4 text-center p-4 bg-gray-50 rounded-lg">
                        <Link href={'/contacts'} className="">
                            <button className='text-xs bg-primary hover:bg-blue-700 text-white p-2 rounded-xl hover:cursor-pointer'> Free Consultation</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-[120px] lg:h-[136px]"></div>
        </div>
    )
}

export default Navbar