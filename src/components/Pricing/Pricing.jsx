'use client';

import React, { useState } from 'react';
import { X, Aperture } from 'lucide-react';

// Mock data for the gallery images, now including a 'category' field
const mockImages = [
    
    // --- Meeting Section ---
    { id: 1, url: "../../../assets/gallery/meeting/1.jpg", caption: "meeting 1", category: "Meeting" },
    { id: 2, url: "../../../assets/gallery/meeting/2.jpg", caption: "meeting 2", category: "Meeting" },
    { id: 3, url: "../../../assets/gallery/meeting/3.jpg", caption: "meeting 3", category: "Meeting" },
    { id: 4, url: "../../../assets/gallery/meeting/4.jpg", caption: "meeting 4", category: "Meeting" },
    { id: 5, url: "../../../assets/gallery/meeting/5.jpg", caption: "meeting 5", category: "Meeting" },
    { id: 6, url: "../../../assets/gallery/meeting/6.jpg", caption: "meeting 6", category: "Meeting" },
    { id: 7, url: "../../../assets/gallery/meeting/7.jpg", caption: "meeting 7", category: "Meeting" },
    { id: 8, url: "../../../assets/gallery/meeting/8.jpg", caption: "meeting 8", category: "Meeting" },
    { id: 9, url: "../../../assets/gallery/meeting/9.jpg", caption: "meeting 9", category: "Meeting" },
    { id: 10, url: "../../../assets/gallery/meeting/10.jpg", caption: "meeting 10", category: "Meeting" },

    // --- Worker Section ---
    { id: 11, url: "../../../assets/gallery/worker/1.jpg", caption: "Security Personnel 1", category: "Worker" },
    { id: 12, url: "../../../assets/gallery/worker/2.jpg", caption: "Security Personnel 2", category: "Worker" },
    { id: 13, url: "../../../assets/gallery/worker/3.jpg", caption: "Security Personnel 3", category: "Worker" },
    { id: 14, url: "../../../assets/gallery/worker/4.jpg", caption: "Security Personnel 4", category: "Worker" },
    { id: 15, url: "../../../assets/gallery/worker/5.jpg", caption: "Security Personnel 5", category: "Worker" },
    { id: 16, url: "../../../assets/gallery/worker/6.jpg", caption: "Security Personnel 6", category: "Worker" },
    { id: 17, url: "../../../assets/gallery/worker/7.jpg", caption: "Security Personnel 7", category: "Worker" },
    { id: 18, url: "../../../assets/gallery/worker/8.jpg", caption: "Security Personnel 8", category: "Worker" },
    { id: 19, url: "../../../assets/gallery/worker/9.jpg", caption: "Security Personnel 9", category: "Worker" },
    { id: 20, url: "../../../assets/gallery/worker/10.jpg", caption: "Security Personnel 10", category: "Worker" },
];

// All available categories including 'All'
const categories = ["All", "Meeting", "Worker"];

// Helper function to map category key to display name
const getCategoryDisplayName = (key) => {
    switch (key) {
        case "Meeting": return "Our Meetings";
        case "Worker": return "Our Workers";
        default: return "All";
    }
};


// --- Modal Component for Full-Screen View ---
const GalleryModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition-colors shadow-lg"
                    aria-label="Close Gallery"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Image Content */}
                <div className="flex-grow overflow-hidden flex items-center justify-center">
                    <img
                        src={image.url}
                        alt={image.caption}
                        className="object-contain w-full h-full max-h-[70vh] rounded-t-xl"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/800x600/AAAAAA/FFFFFF?text=Image+Load+Error";
                        }}
                    />
                </div>

                {/* Caption Footer */}
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-lg font-semibold text-gray-800">
                        {image.caption}
                    </p>
                    <span className="text-sm text-gray-500 capitalize">
                        Category: {getCategoryDisplayName(image.category)}
                    </span>
                </div>
            </div>
        </div>
    );
};

// --- Main App Component ---
export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    // Filter images based on the active category
    const filteredImages = activeCategory === 'All'
        ? mockImages
        : mockImages.filter(image => image.category === activeCategory);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    // Style the category buttons based on the provided image design
    const CategoryButton = ({ categoryKey }) => {
        const isActive = activeCategory === categoryKey;
        const displayName = getCategoryDisplayName(categoryKey);

        const activeClasses = 'bg-yellow-500 text-gray-900 shadow-md ring-4 ring-yellow-300/50';
        const inactiveClasses = 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white';

        return (
            <button
                onClick={() => handleCategoryClick(categoryKey)}
                className={`px-6 py-2 rounded-full font-semibold uppercase text-xs tracking-wider transition-all duration-200 ${isActive ? activeClasses : inactiveClasses}`}
            >
                {displayName}
            </button>
        );
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Hero Banner Section */}
            <header 
                className="relative h-96 bg-center flex items-center justify-center shadow-lg"
                style={{
                    backgroundImage: 'url(/assets/gallery/bg.jpg)',
                    backgroundSize: 'cover',
                }}
            >
                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="relative text-center z-10">
                    <h1 className="text-white text-5xl font-bold">
                        Our Gallery
                    </h1>
                </div>
            </header>

            {/* Gallery Content and Filters */}
            <main className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                
                {/* Filter Buttons */}
                <div className="flex justify-center space-x-3 mb-12 -mt-10 z-20 relative">
                    {categories.map(category => (
                        <CategoryButton key={category} categoryKey={category} />
                    ))}
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                    {filteredImages.length > 0 ? (
                        filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-[1.02] transition duration-300 ease-in-out bg-gray-100"
                                onClick={() => setSelectedImage(image)}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        setSelectedImage(image);
                                    }
                                }}
                                role="button"
                            >
                                {/* Image Thumbnail */}
                                <img
                                    src={image.url}
                                    alt={image.caption}
                                    className="w-full h-64 object-cover transition duration-300 group-hover:opacity-80"
                                />
                                
                                {/* Overlay Caption on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <p className="text-sm font-medium text-white line-clamp-2">
                                        {image.caption}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16 text-gray-500">
                            No images found in the {getCategoryDisplayName(activeCategory)} category.
                        </div>
                    )}
                </div>
            </main>

            {/* Image Modal */}
            <GalleryModal
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
}