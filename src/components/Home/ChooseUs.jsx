import React from 'react';
import { Shield, Award, Headphones, Users, Smile, UserCheck, Briefcase, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
    return (
        <div className="bg-gray-100 pt-16 ">
            <div className=" mx-auto ">

                <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto mb-16 max-w-screen-xl">

                    <div className="relative m-2">
                        <div className="grid grid-cols-2 gap-4">

                            <div className="">
                                <div className="bg-gray-100">

                                    <img
                                        src="../../assets/home/why_choose_us/stand.jpg"
                                        alt="Security monitoring"
                                        className="w-[400px] h-[200px] object-cover rounded-tl-[40%] rounded-xl "
                                    />
                                </div>
                            </div>

                            <div className='flex items-end'>
                                <div className=" bg-primary rounded-xl  rounded-tr-[60%] px-8 py-6 text-white text-center shadow-xl w-fit h-fit">
                                    <div className="text-5xl font-bold mb-2">6+</div>
                                    <div className="text-sm font-semibold">Year Experience</div>
                                </div>
                            </div>

                            <div className="col-span-2 flex justify-end">
                                <div className="">

                                    <img
                                        src="../../assets/home/why_choose_us/stand2.jpg"
                                        alt="Security service"
                                        className="w-[450px] h-[200px] object-cover rounded-br-[110px] rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='mx-5 xl:mx-0'>
                        <h2 className="text-primary text-4xl font-bold mb-8">WHY CHOOSE US?</h2>


                        <div className="grid sm:grid-cols-2 gap-6 mb-8">

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">HIGH SECURITY</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos rebum sit
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">GOVT APPROVED</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos rebum sit
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                                        <Headphones className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">24/7 SUPPORT</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos rebum sit
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                                        <UserCheck className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">TRAINED GUARDS</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos rebum sit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition-colors">
                            READ MORE →
                        </button>
                    </div>
                </div>


                <div className="bg-primary py-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

                        <div className="text-center text-white">
                            <div className="flex justify-center mb-3">
                                <Smile className="w-8 sm:w-12 h-12" strokeWidth={1.5} />
                            </div>
                            <div className="text-2xl sm:text-5xl font-bold mb-2">48+</div>
                            <div className="sm:text-lg font-semibold">Happy Clients</div>
                        </div>


                        <div className="text-center text-white">
                            <div className="flex justify-center mb-3">
                                <Users className="w-8 sm:w-12 h-12" strokeWidth={1.5} />
                            </div>
                            <div className="text-2xl sm:text-5xl font-bold mb-2">14+</div>
                            <div className="sm:text-lg font-semibold">Team Members</div>
                        </div>


                        <div className="text-center text-white">
                            <div className="flex justify-center mb-3">
                                <Briefcase className="w-8 sm:w-12 h-12" strokeWidth={1.5} />
                            </div>
                            <div className="text-2xl sm:text-5xl font-bold mb-2">30+</div>
                            <div className="sm:text-lg font-semibold">Services Served</div>
                        </div>


                        <div className="text-center text-white">
                            <div className="flex justify-center mb-3">
                                <CheckCircle className="w-8 sm:w-12 h-12" strokeWidth={1.5} />
                            </div>
                            <div className="text-2xl sm:text-5xl font-bold mb-2">48+</div>
                            <div className="sm:text-lg font-semibold">Projects Completed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}