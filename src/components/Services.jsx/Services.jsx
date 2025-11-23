"use client";
import React from 'react';
import { Shield, Users, Wrench, Building, GraduationCap, AlertTriangle, CheckCircle } from 'lucide-react';

export default function OurServices() {
    const services = [
        {
            id: 1,
            icon: Shield,
            iconBg: 'bg-blue-200',
            title: 'Security Personnel',
            category: 'Security Services',
            items: [
                'Armed & Unarmed Security Guards',
                'Lady Security Trained to Charges (Retired Defense/Police Personnel)',
                'Executive Protection (VIP/Corporate)',
                'Access Control & Monitoring',
                'CCTV Surveillance & Electronic Security',
                'Security Consulting & Threat Assessment',
                'Fire Safety and Emergency Response',
                'Traffic and Parking Management',
                'Event and Property Security',
                '24/7 Security Monitoring & Rapid Response'
            ]
        },
        {
            id: 2,
            icon: Users,
            iconBg: 'bg-blue-200',
            title: 'Construction Workers',
            category: 'Manpower Supply Services',
            items: [
                'General Labor & Helpers',
                'Cleaners & Office Assistants',
                'Technicians (Electrical, Mechanical, Civil)',
                'Machine Operators (Crane, Excavator, Forklift, Bulldozer, etc.)',
                'Drivers (Light & Heavy Vehicles)',
                'Mechanics, Welders, and Fabricators',
                'Engineers (Civil, Electrical, Mechanical, QC, Quantity Surveyor (QS))',
                'Administrative & Office Staff (Managers, Clerks, Computer Operators)',
                'Safety Officers & Medical Personnel (Doctors, Nurses, Paramedics)'
            ]
        },
        {
            id: 3,
            icon: Wrench,
            iconBg: 'bg-blue-200',
            title: 'Heavy Equipment',
            category: 'Industrial & Construction Manpower',
            items: [
                'Mason, Carpenter, Steel Fixer, Pipe Fitter, Plumber',
                'Rod Binder (4G, 6G, TIG, ARC)',
                'Heavy Equipment Operators (Pay Loader, Roller, Dumper, Grader, etc.)',
                'Foremen & Supervisors (Civil, Mechanical, Electrical, Scaffolding)',
                'Marine & Production Staff (Divers, Marine Mechanics, Barge Masters)'
            ]
        },
        {
            id: 4,
            icon: Building,
            iconBg: 'bg-blue-200',
            title: 'Facility Management',
            category: 'Clean Office Services',
            items: [
                'Office Cleaning & Housekeeping',
                'Tea Boy / Poon / Messenger Services',
                'Waste Management & Janitorial Support',
                'Maintenance Support Staff',
                'Building Assistance and Equipment Maintenance'
            ]
        },
        {
            id: 5,
            icon: GraduationCap,
            iconBg: 'bg-blue-200',
            title: 'Training & Recruitment',
            category: 'Human Resource Services',
            items: [
                'Recruitment of Verified and Qualified Personnel',
                'Security & Safety Training Programs',
                'Firefighting, First Aid, and Emergency Response Training',
                'Discipline, Etiquette, and Communication Skills Development',
                'On-the-job Orientation and Performance Evaluation'
            ]
        },
        {
            id: 6,
            icon: AlertTriangle,
            iconBg: 'bg-blue-200',
            title: 'Emergency Response',
            category: 'Support Services',
            items: [
                'Rapid Deployment during Emergencies',
                'Crisis Management & Disaster Response',
                'Coordination with Local Law Enforcement',
                'Security Equipment Supply & Maintenance',
                'Client Advisory on Risk and Safety Planning'
            ]
        }
    ];

    return (
        <div className="bg-white">

            <div className="relative h-64 bg-gray-800 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Service Details</h1>
                </div>
            </div>


            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Our Comprehensive Services
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Delivering excellence across security, manpower, facility management, and training.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-20">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >

                                <div className={`${service.iconBg} p-8 text-center`}>
                                    <div className="flex justify-center mb-4">
                                        <IconComponent className="w-16 h-16 text-blue-700" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-900">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Shield className="w-5 h-5 text-blue-600" />
                                        <h4 className="text-lg font-bold text-gray-900">
                                            {service.category}
                                        </h4>
                                    </div>

                                    <ul className="space-y-3">
                                        {service.items.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}