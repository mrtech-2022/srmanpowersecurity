import React from 'react';
import { Calendar } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            id: 1,
            date: 'August 5, 2024',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80',
            title: 'What Is The Best Solution For Cyber Security',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
        },
        {
            id: 2,
            date: 'August 5, 2024',
            image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80',
            title: '5 Easy Steps To Optimize System Security In 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
        },
        {
            id: 3,
            date: 'August 5, 2024',
            image: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=500&q=80',
            title: 'The 3 Best Cyber Security In The World Right Now',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-blue-900 text-center mb-12">
                    Our Project
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
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
                                <h3 className="text-xl font-bold text-blue-600 mb-3 hover:text-blue-700 transition-colors cursor-pointer">
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
    );
}