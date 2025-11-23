import React from 'react';
import { ArrowRight } from 'lucide-react';
import samsaraLogo from '../../../public/assets/images/samsara.png';
import sngLogo from '../../../public/assets/images/sng.png';
import spigenLogo from '../../../public/assets/images/spigen.png';
import supertechLogo from '../../../public/assets/images/supertech.png';
import premierLogo from '../../../public/assets/images/premier.png';
import purvanchalLogo from '../../../public/assets/images/purvanchal.png';
import sargodhaLogo from '../../../public/assets/images/sargodha.png';
import Image from 'next/image';

export default function OurClients() {
    const clients = [
        {
            id: 1,
            name: 'Samsara',
            logo: samsaraLogo,
            alt: 'Samsara logo'
        },
        {
            id: 2,
            name: 'SNG',
            logo: sngLogo,
            alt: 'SNG logo'
        },
        {
            id: 3,
            name: 'Spigen',
            logo: spigenLogo,
            alt: 'Spigen logo'
        },
        {
            id: 4,
            name: 'Supertech',
            logo: supertechLogo,
            alt: 'Supertech logo'
        },
        {
            id: 5,
            name: 'Premier',
            logo: premierLogo,
            alt: 'Premier logo'
        },
        {
            id: 6,
            name: 'Purvanchal',
            logo: purvanchalLogo,
            alt: 'Purvanchal logo'
        },
        {
            id: 7,
            name: 'Sargodha',
            logo: sargodhaLogo,
            alt: 'Sargodha logo'
        }
    ];

    const clientsWithButton = [
        ...clients,
        {
            id: 8,
            name: 'View More',
            isButton: true
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-8 lg:mb-12">
                    Our Valued Client's
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {clientsWithButton.map((client, index) => (
                        <div
                            key={client.id}
                            className="bg-gray-50 border border-gray-200 flex items-center justify-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 min-h-[120px]"
                        >
                            {client.isButton ? (
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 group text-sm sm:text-base">
                                    View More
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            ) : (
                                <Image
                                    src={client.logo}
                                    alt={client.alt}
                                    width={100}
                                    height={80}
                                    className="max-w-full h-auto transition-all duration-300 object-contain"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 lg:mt-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-8 lg:mb-12">
                    Client's Reference Letter
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {clientsWithButton.map((client, index) => (
                        <div
                            key={client.id}
                            className="bg-gray-50 border border-gray-200 flex items-center justify-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 min-h-[120px]"
                        >
                            {client.isButton ? (
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 group text-sm sm:text-base">
                                    View More
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            ) : (
                                <Image
                                    src={client.logo}
                                    alt={client.alt}
                                    width={100}
                                    height={80}
                                    className="max-w-full h-auto transition-all duration-300 object-contain"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}