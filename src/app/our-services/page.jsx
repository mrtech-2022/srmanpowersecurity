import SelectionProcess from '@/components/Services.jsx/SelectionProcess'
import OurServices from '@/components/Services.jsx/Services'
import MainLayout from '@/layout/MainLayout'
import React from 'react'

const ServicePage = () => {
    return (
        <MainLayout>
            <OurServices />
            <SelectionProcess />
        </MainLayout>
    )
}

export default ServicePage