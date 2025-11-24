import Pricing from '@/components/Pricing/Pricing'
import MainLayout from '@/layout/MainLayout'
import React from 'react'

export const metadata = {
    title: 'Pricing - SR Manpower & Security Services',
    description: 'Explore our pricing options and choose the best plan for your business needs. Our team is dedicated to delivering top-notch solutions that meet your needs.',
}

const PricingPage = () => {
    return (
        <MainLayout>
            <Pricing />
        </MainLayout>
    )
}

export default PricingPage