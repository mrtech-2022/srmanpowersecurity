import React from 'react';
import Link from 'next/link';

export default function Pricing() {
    const securityServices = [
        {
            title: 'Security Guard / Traffic',
            subtitle: 'Male/Female, 8-Hour Shift',
            price: '18,000',
            period: 'Month',
            features: [
                '8 Hours Total Duty',
                'Monthly Service (30 Days)',
                'Leave Included',
                'Retired Defense/Civil Personnel'
            ],
            color: 'blue'
        },
        {
            title: 'Supervisor (Team Lead)',
            subtitle: '8-Hour Leadership Shift',
            price: '22,000',
            period: 'Month',
            features: [
                'Team Management & Supervision',
                'Monthly Service (30 Days)',
                'Leave Included',
                'Retired Defense/Civil Personnel'
            ],
            color: 'blue'
        },
        {
            title: 'In-Charge (Senior Management)',
            subtitle: 'Overseeing Responsibility',
            price: '26,000',
            period: 'Month',
            features: [
                'Site Management & Reporting',
                'Full 1-Month Term',
                'Leave Included',
                'Retired Defense/Civil Personnel'
            ],
            color: 'blue'
        },
        {
            title: 'Gun Man (Armed)',
            subtitle: 'High-Level Armed Security',
            price: '50,000',
            period: 'Month',
            features: [
                'Specialized Protective Duties',
                'Monthly Service (30 Days)',
                'Leave Included',
                'Retired Defense/Civil Personnel'
            ],
            color: 'red'
        }
    ];

    const manpowerServices = [
        { category: 'Cleaner', salary: 80, perDay: 640, monthly: '19,200', color: 'white' },
        { category: 'General Worker', salary: 80, perDay: 640, monthly: '19,200', color: 'white' },
        { category: 'Cook Helper', salary: 80, perDay: 640, monthly: '19,200', color: 'white' },
        { category: 'Mason', salary: 100, perDay: 800, monthly: '24,000', color: 'yellow' },
        { category: 'Steel Fixer', salary: 100, perDay: 800, monthly: '24,000', color: 'yellow' },
        { category: 'Carpenter', salary: 100, perDay: 800, monthly: '24,000', color: 'yellow' },
        { category: 'Pipe Fitter', salary: 100, perDay: 800, monthly: '24,000', color: 'yellow' },
        { category: 'Welder', salary: 110, perDay: 880, monthly: '26,400', color: 'yellow' },
        { category: 'Electrician', salary: 110, perDay: 880, monthly: '26,400', color: 'yellow' },
        { category: 'Foreman', salary: 110, perDay: 880, monthly: '26,400', color: 'yellow' },
        { category: 'Cook', salary: 150, perDay: 1200, monthly: '36,000', color: 'yellow' },
        { category: 'Tractor Operator', salary: 90, perDay: 720, monthly: '21,600', color: 'green' },
        { category: 'Car/Pick Up Driver', salary: 90, perDay: 720, monthly: '21,600', color: 'green' },
        { category: 'Trailer Operator', salary: 90, perDay: 720, monthly: '21,600', color: 'green' },
        { category: 'Forklift Operator', salary: 110, perDay: 880, monthly: '26,400', color: 'green' },
        { category: 'Excavator Operator', salary: 125, perDay: 1000, monthly: '30,000', color: 'red' },
        { category: 'Pay Loader Operator', salary: 125, perDay: 1000, monthly: '30,000', color: 'red' },
        { category: 'Loader Operator', salary: 125, perDay: 1000, monthly: '30,000', color: 'red' },
        { category: 'Bulldozer Operator', salary: 125, perDay: 1000, monthly: '30,000', color: 'red' },
        { category: 'Mobile Crane Operator', salary: 160, perDay: 1280, monthly: '38,400', color: 'red' },
        { category: 'Roller Operator', salary: 115, perDay: 920, monthly: '27,600', color: 'red' },
        { category: 'Dumper Operator', salary: 115, perDay: 920, monthly: '27,600', color: 'red' },
        { category: 'Grader Operator', salary: 115, perDay: 920, monthly: '27,600', color: 'red' },
        { category: 'Mechanic/Repairman', salary: 125, perDay: 1000, monthly: '30,000', color: 'red' },
        { category: 'Lathe Operator', salary: 125, perDay: 1000, monthly: '30,000', color: 'red' }
    ];

    const getRowColor = (color) => {
        switch (color) {
            case 'white': return 'bg-white';
            case 'yellow': return 'bg-yellow-50';
            case 'green': return 'bg-green-50';
            case 'red': return 'bg-red-50';
            default: return 'bg-white';
        }
    };

    const getTextColor = (color) => {
        switch (color) {
            case 'yellow': return 'text-yellow-800';
            case 'green': return 'text-green-700';
            case 'red': return 'text-red-700';
            default: return 'text-gray-700';
        }
    };

    return (
        <div className="bg-white ">

            <div className="relative h-124 bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/assets/images/pricing.jpg)',
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative h-full flex items-center text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-white text-5xl font-bold">Affordable Prices</h1>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <div className="inline-block bg-yellow-200 px-6 py-2 rounded-full mb-4">
                        <span className="text-yellow-800 font-semibold">Our Service Pricing</span>
                    </div>
                    <h2 className="text-5xl font-bold text-blue-900 mb-4">
                        Choose the Most Suitable Package
                    </h2>
                    <p className="text-gray-600 text-lg">
                        The detailed price list for our Security and Manpower Services is provided below.
                    </p>
                </div>


                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-blue-900 mb-8">1. Security Services (Monthly)</h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {securityServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow"
                            >
                                <h4 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h4>
                                <p className="text-sm text-gray-500 mb-6">{service.subtitle}</p>

                                <div className="text-center mb-6">
                                    <div className="text-sm text-gray-500 mb-1">TK</div>
                                    <div className={`text-5xl font-bold ${service.color === 'red' ? 'text-red-600' : 'text-blue-600'} mb-1`}>
                                        {service.price}
                                        <span className="text-2xl">,</span>
                                    </div>
                                    <div className="text-gray-500">{service.period}</div>
                                </div>

                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-gray-600">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h4 className="text-2xl font-bold text-blue-900 mb-2">
                                    Looking for Your Own Quotation?
                                </h4>
                                <p className="text-gray-600">
                                    Contact our expert team and get the best price for your specific needs.
                                </p>
                            </div>
                            <Link href="/contacts" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-600 transition-colors whitespace-nowrap hover:cursor-pointer">
                                Contact for a Free Quotation
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="bg-indigo-700 text-white p-6 rounded-t-lg">
                        <h3 className="text-3xl font-bold mb-2">2. General Manpower Services (8 Hours/Day)</h3>
                        <p className="text-indigo-200 text-sm">
                            Manpower Provider Company Gets Service Commission From Party 'A' With 10% Commission
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="bg-indigo-700 text-white">
                                <tr>
                                    <th className="border border-indigo-600 px-6 py-4 text-left font-bold">CATEGORY</th>
                                    <th className="border border-indigo-600 px-6 py-4 text-left font-bold">SALARY (TK/PER HOUR)</th>
                                    <th className="border border-indigo-600 px-6 py-4 text-left font-bold">PER DAY (TK)</th>
                                    <th className="border border-indigo-600 px-6 py-4 text-left font-bold">TOTAL MONTHLY TK</th>
                                    <th className="border border-indigo-600 px-6 py-4 text-left font-bold">REMARKS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manpowerServices.map((service, index) => (
                                    <tr key={index} className={getRowColor(service.color)}>
                                        <td className={`border border-gray-300 px-6 py-4 font-semibold ${getTextColor(service.color)}`}>
                                            {service.category}
                                        </td>
                                        <td className={`border border-gray-300 px-6 py-4 font-semibold ${getTextColor(service.color)}`}>
                                            {service.salary}
                                        </td>
                                        <td className={`border border-gray-300 px-6 py-4 font-semibold ${getTextColor(service.color)}`}>
                                            {service.perDay}
                                        </td>
                                        <td className={`border border-gray-300 px-6 py-4 font-semibold ${getTextColor(service.color)}`}>
                                            {service.monthly}
                                        </td>
                                        <td className={`border border-gray-300 px-6 py-4 font-semibold ${getTextColor(service.color)}`}>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-indigo-800 text-white p-6 rounded-lg text-center">
                    <p className="mb-2">
                        <span className="text-yellow-400 font-bold">Important Notice:</span> A service commission of **10% is applicable** for all Manpower Services. Listed prices are initial quotations; the final rate will be determined through scope of work and **negotiation**.
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold">Hotline: +8801944474444</span>
                        <span className="mx-4">|</span>
                        <span className="font-semibold">Other: +8801944464444</span>
                    </p>
                </div>
            </div>
        </div>
    );
}