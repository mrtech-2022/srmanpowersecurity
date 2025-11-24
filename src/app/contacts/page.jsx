import Contacts from '@/components/Contacts/Contacts'
import MainLayout from '@/layout/MainLayout'
import React from 'react'

export const metadata = {
    title: 'Contact Us - SR Manpower & Security Services',
    description: 'Contact us today to get in touch with our team. Our team is dedicated to delivering top-notch solutions that meet your needs.',
}

const ContactsPage = () => {
    return (
        <MainLayout>
            <Contacts />
        </MainLayout>
    )
}

export default ContactsPage