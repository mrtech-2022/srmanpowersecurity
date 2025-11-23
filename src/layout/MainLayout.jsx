import Footer from '@/pages/Shared/Footer'
import Navbar from '@/pages/Shared/Navbar'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout