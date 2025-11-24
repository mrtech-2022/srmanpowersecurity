import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import LogoWithText from './LogoWithText';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <LogoWithText />
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Ipsum amet sed vero et lorem amet sed vero et lorem, amet sed vero et lorem amet sed vero et lorem. Amet sed vero et lorem amet sed vero et lorem amet sed vero et lorem diam tempor
                        </p>
                    </div>

                    {/* Our Services - Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>Security Services</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>*Manpower Supply Services</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>Facility Management Services</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>Specialized Industrial & Construction Manpower</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>Training & Recruitment Services</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Menu - Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Quick Menu</h4>
                        <ul className="space-y-2">
                            <Link href={'/'} className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>Home</span>
                            </Link>
                            <Link href={'/about-us'} className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>About US</span>
                            </Link>
                            <Link href={'/our-services'} className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>Our Service</span>
                            </Link>
                            <Link href={'/pricing'} className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>Pricing</span>
                            </Link>
                            <Link href={'/contacts'} className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                                <span className="text-blue-500 mt-1">›</span>
                                <span>Contact Us</span>
                            </Link>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Get In Touch</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>House # 474, Road # 03, Solmaid, Dhali Bari,
                                    Vatara, Gulshan, Dhaka-1212</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>+880 1898-801560</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>info@srsecuritybd.com</span>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-2 mt-4">
                            <a href="https://www.facebook.com/srsecuritybd" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <Twitter className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Linkedin className="w-4 h-4 text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                                <Youtube className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-6">
                    <div className="text-center text-sm text-gray-400">
                        © 2024, All Rights Reserved. Designed & Develop by{' '}
                        <a href='https://mrtech.com.bd/' target='_blank' className="text-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
                            MR Tech
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}