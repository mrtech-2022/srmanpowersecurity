import MainLayout from '@/layout/MainLayout'
import About from '@/pages/AboutUs'
import React from 'react'

export const metadata = {
    title: 'About Us - SR Manpower & Security Services',
    description: 'Learn more about SR Manpower & Security Services, our mission, vision, and the dedicated team behind our top-notch security and manpower solutions.',
}

const AboutPage = () => {
    return (
        <MainLayout>
            <About />
        </MainLayout>
    )
}

export default AboutPage