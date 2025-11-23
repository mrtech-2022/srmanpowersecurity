import WhyChooseUs from '@/components/Home/ChooseUs'
import SecurityServicesHero from '@/components/Home/Hero'
import OurClients from '@/components/Home/OurClients'
import Projects from '@/components/Home/Projects'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import React from 'react'
import MainLayout from '@/layout/MainLayout'

const HomePage = () => {
    return (
        <div>
            <MainLayout>
                <SecurityServicesHero />
                <WhyChooseUs />
                <Services />
                <OurClients />
                <Projects />
                <Testimonial />
            </MainLayout>
        </div>
    )
}

export default HomePage