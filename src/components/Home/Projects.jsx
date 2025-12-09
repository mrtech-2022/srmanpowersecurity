"use client";
import React, { useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
    const scrollContainerRef = useRef(null);

    const projects = [
        {
            id: 1,
            date: 'June 6, 2025',
            image: '../../../assets/project/CSCEC.jpg',
            title: 'China Construction Seventh Engineering Division Corp., Ltd.',
            description: 'This project provides 40 trained security guards for continuous protection and monitoring of the client’s premises. The deployment will run for 1 year, ensuring 24/7 security coverage, patrolling, access control, and incident reporting. The goal is to maintain a safe and secure environment through reliable and professional security services.'
        },
        {
            id: 2,
            date: 'Dec 8, 2019',
            image: '../../../assets/project/CREC.jpg',
            title: 'China Railway Engineering Corporation',
            description: "This project involves supplying 12 trained gunmen and 56 security guards to the CREC. It's ending in June 2024. The security team will provide full-site protection through access control, patrolling, incident response, and coordination with site management. The objective is to ensure a safe and secure operational environment during the project period."
        },
        {
            id: 3,
            date: 'August 5, 2024',
            image: '../../../assets/project/CRBG.jpg',
            title: 'China Railway Construction Bridge Engineering Bureau Group Co. Ltd',
            description: "This is a Security Guards Service Contract between China Railway Construction Bridge Engineering Bureau Group Co., Ltd. (Client) and SR Manpower & Security Service Ltd. (Security Provider), effective March 14, 2024. It mandates the 24-hour provision of security and access control services for the Client's SASEC Road Connectivity Project - II site in Bangladesh, covering personnel, property, and materials."
        },
        {
            id: 4,
            date: 'October 8, 2025',
            image: '../../../assets/project/RHD.jpg',
            title: 'Roads and Highways Department (RHD)',
            description: "The project is a 1-year contract under the Roads and Highways Department (RHD), scheduled for completion on October 8, 2025. It likely involves routine maintenance, urgent repair, or a short-term infrastructure enhancement within the national road network of Bangladesh."
        },
        {
            id: 5,
            date: 'September 16, 2025',
            image: '../../../assets/project/GFC.jpg',
            title: 'Guoguo Food Co. Ltd.',
            description: "This document details a Security Company Service Agreement (Contract No: 103 SBL/GFC-2025.09) for Guoguo Food Co. Ltd. and SR Manpower & Security Service Ltd.. It outlines a one-year contract for the provision of security, property safety, and site patrol services. The agreement is valid from September 16, 2025, to September 16, 2026."
        },
        {
            id: 6,
            date: 'Feb 26, 2025',
            image: '../../../assets/project/CGECP.jpg',
            title: 'China Geo-Engineering Corporation-Patira',
            description: "This document is a 3-year Security Company Service Agreement (Contract No: 102.SR.CGC-2025.02) between China Geo-Engineering Corporation-Patira (Client) and SR Manpower & Security Service Ltd. (Security Provider). It provides for 24-hour security, property protection, and site control services. The agreement begins on February 26, 2025, and is valid until February 25, 2028"
        },
        {
            id: 7,
            date: 'April 28, 2024',
            image: '../../../assets/project/CMEC.jpg',
            title: 'China Machinery Engineering Corporation',
            description: "This document is a 5-year Manpower Company Agreement (Contract No: 001. SR. CMEC 524.2024.04) between China Machinery Engineering Corporation (CMEC) and SR Manpower & Security Service Ltd.. The contract provides for the supply of required manpower for the CMEC project. It is valid from April 28, 2024, to April 28, 2029."
        },
        {
            id: 8,
            date: 'June 17, 2024',
            image: '../../../assets/project/jv.jpg',
            title: 'JV of Zhongnan Engineering Corporation Limited and Sinohydro Corporation Limited',
            description: "This is a Labor Supply Agreement made on June 17, 2024, between the JV of Zhongnan Engineering Corporation Limited and Sinohydro Corporation Limited and SR Manpower & Security Service Ltd.. The purpose is to supply labor for Pipe laying Work as part of the Establishment of a Sewerage System in Chattogram Metropolitan—Phase-1/W-2. The Client is responsible for providing the site, materials, and equipment, while the Supplier is responsible for providing skilled and unskilled manpower."
        },
        {
            id: 9,
            date: 'June 1, 2024',
            image: '../../../assets/project/jcx.jpg',
            title: 'JCX SaminaHouse',
            description: "3-year Security Service Contract between JCX SaminaHouse and SR Manpower & Security Service Ltd.. The contract mandates the 24/7 provision of uninterrupted security services, including site patrol, access control, protection of property, and specific duties like maintaining the lower floor and rooftop area. The service is compensated."
        },
        {
            id: 10,
            date: 'December 1, 2025',
            image: '../../../assets/project/CIT.jpg',
            title: ' Corea Impex Trading Co. Ltd',
            description: "1-year Service Agreement (Contract No: 001. SR. CITCL 676.2025.11) between Corea Impex Trading Co. Ltd and SR Manpower & Security Service Ltd.. It is for the supply of a single Manpower staff to serve as both an Office Assistant and a Cook. The contract begins on December 1, 2025, and ends on December 1, 2026"
        }
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white py-16 max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-blue-900 text-center mb-12">
                    Our Project
                </h2>

                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-primary hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-primary hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {project.date}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary mb-3 hover:text-blue-700 transition-colors cursor-pointer">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}