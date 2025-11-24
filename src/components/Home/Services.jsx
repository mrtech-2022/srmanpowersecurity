import React from 'react';

export default function Services() {
    const services = [
        {
            id: 1,
            title: ' Security Services',
            image: '../../assets/home/service/security.jpg',
            alt: ' Security Services'
        },
        {
            id: 2,
            title: ' Manpower Supply Services',
            image: '../../assets/home/service/manpower.jpg',
            alt: ' Manpower Supply Services'
        },
        {
            id: 3,
            title: ' Facility Management Services',
            image: '../../assets/home/service/facility.jpg',
            alt: ' Facility Management Services'
        },
        {
            id: 4,
            title: ' Specialized Industrial & Construction Manpower',
            image: '../../assets/home/service/SpecializedIndustrial&ConstructionManpower.jpg',
            alt: ' Specialized Industrial & Construction Manpower'
        },
        {
            id: 5,
            title: 'Training & Recruitment Services',
            image: '../../assets/home/service/traning.jpg',
            alt: 'Training & Recruitment Services'
        },
        {
            id: 6,
            title: 'Additional & Support Services',
            image: '../../assets/home/service/aditional.jpg',
            alt: 'Additional & Support Services'
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-primary text-center mb-12">Our Services</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="border-4 border-gray-300 rounded-lg overflow-hidden hover:border-orange-400 transition-all duration-300 hover:shadow-lg group"
                        >
                            <div className="aspect-video overflow-hidden bg-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-bold text-blue-500 group-hover:text-orange-600 transition-colors">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="bg-primary text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:cursor-pointer">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
}