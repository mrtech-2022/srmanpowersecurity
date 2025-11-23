"use client";
import React from 'react';
import teamImage from '../../../public/assets/images/Team.png'
import Image from 'next/image';

const timeline = [
    { year: '2024', title: 'Founded', text: 'SR Manpower & Security Services Ltd. began its journey in 2019 with a clear vision — to provide reliable manpower and professional security services that ensure safety, discipline, and operational excellence across Bangladesh.' },
    { year: '2025', title: 'History', text: 'SR Manpower & Security Services Ltd. has grown into one of Bangladesh’s most trusted manpower outsourcing and security service providers. From its humble beginnings in Dhaka, the company has expanded nationwide, supplying skilled, semi-skilled, and unskilled workforce, as well as armed and unarmed security personnel to industrial projects, multinational companies, government institutions, and residential establishments. With a strong foundation built on discipline, integrity, and professionalism, SR Manpower & Security Services Ltd. ensures every team member is trained, police-verified, and supervised by experienced professionals from defense and law enforcement backgrounds. The company provides a wide range of services — including facility management, safety training, and emergency response solutions — designed to meet the evolving needs of its clients. Today, SR Manpower & Security Services Ltd. stands as a symbol of trust, reliability, and excellence, continuing to contribute to Bangladesh’s industrial development and workforce empowerment through world-class manpower and security solutions.' },
];

export default function AboutCompany() {
    return (
        <div className="text-black bg-white">

            <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden text-center px-6">
                <div className="absolute inset-0 bg-cover bg-center opacity-20 -z-10 transform-gpu filter blur-sm" />
                <div className="z-10 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
                        About Us <br /> Reliable. Disciplined. Trusted.
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                        We provide professional manpower and security solutions across Bangladesh -- oferring trained, police-verified and skilled person to ensure safety, reliability and operational excellence.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <a className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-xl hover:scale-105 transition" href="#history">Our Journey</a>
                        <a className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-black transition" href="#team">Meet the Management & Team</a>
                    </div>
                </div>
            </section>

            <main className="relative bg-white">

                <section id="history" className="max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-center my-12 text-black">Our Journey</h2>
                    <div className="space-y-12">
                        {timeline.map((t, i) => (
                            <article
                                key={t.year}
                                className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-24 flex-shrink-0">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">{t.year}</div>
                                        <div className="h-2 w-12 bg-indigo-500 rounded mt-3" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">{t.title}</h3>
                                        <p className="text-gray-700 mt-2">{t.text}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>


                <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-blue-100 border border-gray-200 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To be the most trusted and professional manpower and security service provider in Bangladesh, recognized for excellence, discipline, and reliability. We aim to create a safer and more efficient work environment for every organization we serve — ensuring peace of mind and contributing to national development.
                        </p>
                    </div>

                    <div className="p-8 bg-blue-100 border border-gray-200 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To deliver trained, verified, and dependable manpower and security personnel through a transparent and client-focused approach. We are committed to maintaining the highest standards of safety, integrity, and service quality, while continuously improving our workforce through training, supervision, and innovation.
                        </p>
                    </div>
                </section>


                <section className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <div className="text-4xl mb-3 text-indigo-500">🔒</div>
                            <h4 className="font-semibold mb-2 text-black">Security-First Architecture</h4>
                            <p className="text-gray-700">Designs follow best practices for resilience, monitoring and incident response.</p>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <div className="text-4xl mb-3 text-pink-500">⚙️</div>
                            <h4 className="font-semibold mb-2 text-black">Tailored Integrations</h4>
                            <p className="text-gray-700">We integrate with your existing systems to maximize ROI and minimize disruption.</p>
                        </div>

                        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <div className="text-4xl mb-3 text-cyan-500">📈</div>
                            <h4 className="font-semibold mb-2 text-black">Central Monitoring</h4>
                            <p className="text-gray-700">Real-time dashboards and alerts to keep you informed and in control.</p>
                        </div>
                    </div>
                </section>


                <section id="team" className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-black">Meet the Innovators</h2>
                    <Image loading='eager' src={teamImage} alt="Team" />
                </section>

            </main>
        </div>
    );
}