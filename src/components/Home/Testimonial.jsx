import React from 'react';
import { Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';

export default function Testimonial() {
    const testimonials = [
        {
            name: "Rajeev Singh",
            role: "CEO",
            avatar: "bg-yellow-400",
            icon: "👤",
            text: "Overall, I was impressed with the team's work and attitude. Everyone was helpful, dedicated and hardworking to make put before them.",
            rating: 5
        },
        {
            name: "Amit Sharma",
            role: "CEO",
            avatar: "bg-blue-300",
            icon: "💼",
            text: "We were very satisfied with the service. The squad has become part of the family. Everyone was extremely and calm great quality professionals.",
            rating: 5
        },
        {
            name: "Megha Gupta",
            role: "CEO",
            avatar: "bg-teal-600",
            icon: "🏆",
            text: "Management and Squads were professional and caring. I definitely would recommend them close to anyone who has professional needs.",
            rating: 5
        },
        {
            name: "Priya Desai",
            role: "Manager",
            avatar: "bg-pink-400",
            icon: "👩",
            text: "Exceptional service and dedication. The team went above and beyond to ensure our project was successful.",
            rating: 5
        },
        {
            name: "Vikram Patel",
            role: "Director",
            avatar: "bg-purple-500",
            icon: "🎯",
            text: "Professional approach and excellent results. Highly recommended for anyone looking for quality work.",
            rating: 5
        }
    ];

    return (
        <div className="max-w-7xl mx-auto bg-white py-16 px-4">
            <div className=" mx-auto">
                <div className="text-center mb-16">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
                        Testimonials
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        What Our Customers Say
                    </h2>
                </div>

                <Marquee speed={50} gradient={false} pauseOnHover={true}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4 min-w-[350px] max-w-[350px]"
                        >
                            <div className="flex justify-center mb-6">
                                <div className={`${testimonial.avatar} w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-md`}>
                                    {testimonial.icon}
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {testimonial.name}
                                </h3>
                                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                            </div>

                            <p className="text-gray-600 text-center mb-6 leading-relaxed min-h-[120px]">
                                {testimonial.text}
                            </p>

                            <div className="flex justify-center gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}