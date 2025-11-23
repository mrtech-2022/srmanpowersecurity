import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/logo/srmanpower.png'
import Link from 'next/link'

const LogoWithText = () => {
    return (
        <Link href={'/'} className='flex items-center gap-3 hover:cursor-pointer'>
            <Image src={logo} alt="SR Manpower & Security Services Ltd. Logo" width={60} height={60} />
            <div>
                <h1 className="text-primary font-bold text-lg leading-tight">SR MANPOWER &</h1>
                <p className="text-primary text-sm">SECURITY SERVICES LTD.</p>
            </div>
        </Link>
    )
}

export default LogoWithText