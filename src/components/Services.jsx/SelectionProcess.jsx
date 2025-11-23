"use client"
import React from 'react';
import { Search, Filter, Users, Shield, FileText, GraduationCap, CheckCircle, ArrowRight, BookOpen, ClipboardCheck, TrendingUp } from 'lucide-react';

export default function SelectionProcess() {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-primary text-center mb-12">
                    Selection & Employment Process
                </h2>

                <div className="mb-16 flex flex-col lg:grid lg:grid-cols-2 items-center gap-6">
                    <div className='flex items-center justify-center gap-4'>
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 w-48 text-center">
                            <div className="flex justify-center mb-3">
                                <div className="bg-blue-500 p-3 rounded-lg">
                                    <ClipboardCheck className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-gray-800">Client Requirement</h3>
                        </div>

                        <ArrowRight className="w-6 h-6 text-blue-500 hidden lg:block" />
                        <ArrowRight className="w-6 h-6 text-blue-500 rotate-90 lg:hidden" />
                    </div>
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-start h-full">
                                <div className="flex justify-center mb-3">
                                    <Search className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-gray-800">Candidate Sourcing</h3>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-start h-full">
                                <div className="flex justify-center mb-3">
                                    <Filter className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-gray-800">Screening & Shortlisting</h3>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-start h-full">
                                <div className="flex justify-center mb-3">
                                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-gray-800">Interview & Assessment</h3>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-start h-full">
                                <div className="flex justify-center mb-3">
                                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-gray-800">Police & Medical Verification</h3>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-start h-full">
                                <div className="flex justify-center mb-3">
                                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-gray-800">Documentation</h3>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-start h-full">
                                <div className="flex justify-center mb-3">
                                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-gray-800">Training & Orientation</h3>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-start h-full">
                                <div className="flex justify-center mb-3">
                                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-gray-800">Final Selection & Client Approval</h3>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <ArrowRight className="w-6 h-6 text-blue-500 rotate-90" />

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 w-full max-w-2xl text-center hover:shadow-lg transition-shadow">
                                <div className="flex justify-center items-center gap-3">
                                    <ArrowRight className="w-6 h-6 text-blue-600" />
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Deployment</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <BookOpen className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Training Syllabus</h3>
                        <p className="text-primary text-sm">Standardized, comprehensive programs</p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <ClipboardCheck className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">On-Job Evaluation</h3>
                        <p className="text-primary text-sm">Regular assessments and feedback</p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <TrendingUp className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Improvement</h3>
                        <p className="text-primary text-sm">Feedback-driven performance review</p>
                    </div>
                </div>
            </div>
        </div>
    );
}