import React from 'react';

export default function Services() {
    const services = [
        {
            id: 1,
            title: 'Bathtub Installation & Repairing',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80',
            alt: 'Bathtub installation'
        },
        {
            id: 2,
            title: 'Commercial Office Painting Service',
            image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80',
            alt: 'Office painting'
        },
        {
            id: 3,
            title: 'Custom Furniture Crafting',
            image: 'https://images.unsplash.com/photo-1661446600373-125cfeadf275?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Furniture crafting'
        },
        {
            id: 4,
            title: 'House Painting Service',
            image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&q=80',
            alt: 'House painting'
        },
        {
            id: 5,
            title: 'Landscaping Service',
            image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=500&q=80',
            alt: 'Landscaping'
        },
        {
            id: 6,
            title: 'Plumbing Solutions',
            image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500&q=80',
            alt: 'Plumbing service'
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
                                <h3 className="text-xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
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