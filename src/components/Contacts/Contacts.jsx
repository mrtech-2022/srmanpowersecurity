"use client";
import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { Phone, MapPin, Building, Send } from 'lucide-react';

const Contacts = () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        number: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;

        const data = {
            name: name,
            email: email,
            subject: subject,
            number: number,
            message: message,
        };

        setFormData(data);

        try {
            // Initialize emailjs with public key
            emailjs.init(publicKey);

            const res = await emailjs.sendForm(serviceId, templateId, form);
            if (res.status === 200) {
                setSubmitted(true);
                form.reset();
                setErrorMessage("");
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    number: '',
                    message: ''
                });
                // Auto-hide success message after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            }
        } catch (error) {
            setErrorMessage(error.text || "Failed to send message. Please try again.");
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const offices = [
        {
            icon: Building,
            name: "Gazipur Office",
            location: "Gazipur City",
            address: "Holding 1062, Barabari Gacha Road, Kali Gachatala, Gazipur",
            phone: "+880 1898-801566",
            email: "info@srsecuritybd.com"
        },
        {
            icon: MapPin,
            name: "Sirajganj Office",
            location: "Sirajganj City",
            address: "House: 11/A, Golakpur, Hatikumrul, Ullapara, Sirajganj",
            phone: "+880 1898-801564",
            email: "info@srsecuritybd.com"
        },
        {
            icon: Building,
            name: "Chattogram Office",
            location: "Chattogram City",
            address: "209/B, Rangipara, Bank Colony, North Agrabad, Chittagong",
            phone: "+880 1898-801569",
            email: "info@srsecuritybd.com"
        },
        {
            icon: Building,
            name: "Nilphamari Office",
            location: "Nilphamari City",
            address: "Holding: 1905, Ward No. 7, Hospital Road, Jummapara, Nilphamari",
            phone: "+880 1898-801562",
            email: "info@srsecuritybd.com"
        }
    ];

    return (
        <div className='bg-gray-50'>

            <div className="relative h-124 bg-gray-800 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/assets/images/concat.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold">Contacts Us</h1>
                </div>
            </div>

            <div className='bg-gradient-to-br from-blue-100 to-gray-50 lg:w-1/2 mx-auto p-10 text-center m-10'>
                <h1 className='text-xl lg:text-3xl font-bold'>Get In Touch With <br /> SR Manpower & Security Service Ltd.</h1>
                <p>We're here to provide reliable security and manpower solutions. Contact us today.</p>
                <div className='border text-xs md:text-base border-primary mt-2 mx-6'></div>
            </div>

            <section>
                <div className="py-16 px-4 container max-w-7xl mx-auto">
                    <div className="mx-auto">

                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-2 border-blue-100">
                            <div className="text-center max-w-2xl mx-auto">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Phone className="w-8 h-8 text-blue-600" />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                    Dhaka Head Office
                                </h2>
                                <p className="text-gray-500 text-sm mb-4">
                                    House # 474, Road # 03, Solmaid, Dhali Bari, Gulshan, Vatara, Dhaka-1212
                                </p>
                                <a href='tel:+8801711430179' className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                                    +880 1711-430179
                                </a>
                                <p className="text-gray-500 text-sm mb-2">
                                    +880 1898-801560, +880 1985-801481
                                </p>
                                <a href="mailto:info@srsecuritybd.com" className="text-blue-600 hover:text-blue-700 text-sm">
                                    info@srsecuritybd.com
                                </a>
                            </div>
                        </div>


                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                                Our Regional Offices
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {offices.map((office, index) => {
                                    const IconComponent = office.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
                                        >
                                            <div className="flex justify-center mb-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <IconComponent className="w-6 h-6 text-blue-600" />
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 text-center mb-1">
                                                {office.name}
                                            </h3>
                                            <p className="text-blue-600 text-sm text-center mb-4">
                                                {office.location}
                                            </p>
                                            <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
                                                {office.address}
                                            </p>
                                            <div className="text-center">
                                                <p className="text-gray-700 text-sm font-semibold mb-1">
                                                    Phone: {office.phone}
                                                </p>
                                                <a
                                                    href={`mailto:${office.email}`}
                                                    className="text-blue-600 hover:text-blue-700 text-sm"
                                                >
                                                    {office.email}
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary">
                                Feel Free to Contact Us Today
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] lg:h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d228.1474812450731!2d90.43081906439953!3d23.805804993723196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ4JzIxLjAiTiA5MMKwMjUnNTEuMyJF!5e0!3m2!1sen!2sbd!4v1766520612053!5m2!1sen!2sbd"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                        Send A Message
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                        
                                    </p>
                                </div>

                                {submitted && (
                                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-700 text-sm text-center">
                                            Thank you! We received your message successfully.
                                        </p>
                                    </div>
                                )}

                                {errorMessage && (
                                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-700 text-sm text-center">
                                            {errorMessage || "Something went wrong. Please try again."}
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                        <input
                                            type="tel"
                                            name="number"
                                            placeholder="Your Phone"
                                            value={formData.number}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Comment"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors hover:cursor-pointer"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contacts;