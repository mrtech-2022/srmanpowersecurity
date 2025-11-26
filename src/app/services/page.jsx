import SelectionProcess from '@/components/Services.jsx/SelectionProcess'
import OurServices from '@/components/Services.jsx/Services'
import MainLayout from '@/layout/MainLayout'
import React from 'react'

export const metadata = {
    title: 'Our Services - SR Manpower & Security Services',
    description: 'Explore our comprehensive services, including security, manpower, facility management, and training. Our team is dedicated to delivering top-notch solutions that meet your needs.',
}

const ServicePage = () => {
    return (
        <MainLayout>
            <OurServices />
            <SelectionProcess />
        </MainLayout>
    )
}

export default ServicePage