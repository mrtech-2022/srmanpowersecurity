import React from 'react';
import { ArrowRight } from 'lucide-react';
import AshuliaElevatedExpressway from '../../../public/assets/home/our_client_logo/AshuliaElevatedExpressway.jpg';
import CGCBaseCamp from '../../../public/assets/home/our_client_logo/CGCBaseCamp.png';
import ChinaGeoEngineeringCorporation from '../../../public/assets/home/our_client_logo/ChinaGeoEngineeringCorporation.jpg';
import ChinaHarbourEngineeringCompany from '../../../public/assets/home/our_client_logo/ChinaHarbourEngineeringCompany.png';
import ChinaMachineryEngineeringcorporation from '../../../public/assets/home/our_client_logo/ChinaMachineryEngineeringcorporation.jpg';
import ChinaMajorBridgeEngineeringCoLtd from '../../../public/assets/home/our_client_logo/ChinaMajorBridgeEngineeringCoLtd.jpg';
import CRBG from '../../../public/assets/home/our_client_logo/CRBG.png';
import CRCE from '../../../public/assets/home/our_client_logo/CREC.jpg';
import CSCEC7 from '../../../public/assets/home/our_client_logo/CSCEC7.png';
import HuitongInternationalConstructionInstallationEngineering from '../../../public/assets/home/our_client_logo/HuitongInternationalConstruction&InstallationEngineering.jpg';
import HydroChinaPowerChina from '../../../public/assets/home/our_client_logo/HydroChina&PowerChina.png';
import ItalianThaiDevelopmentPCL from '../../../public/assets/home/our_client_logo/ItalianThaiDevelopmentPCL.jpg';
import SinohydroCorporationLimited from '../../../public/assets/home/our_client_logo/SinohydroCorporationLimited.png';
import ZhongnanEngineeringCorporationLimited from '../../../public/assets/home/our_client_logo/ZhongnanEngineeringCorporationLimited.jpg';

import ARCorporation from '../../../public/assets/home/our_client_logo/Local/ARCorporation.png';
import BengalEngineering from '../../../public/assets/home/our_client_logo/Local/BengalEngineering&Services.jpg';
import BismillahConstructionLtd from '../../../public/assets/home/our_client_logo/Local/BismillahConstructionLtd.png';
import BMTradingCorporationCRBGProject from '../../../public/assets/home/our_client_logo/Local/BMTradingCorporationCRBGProject.png';
import BongobondhuHiTechCityProject from '../../../public/assets/home/our_client_logo/Local/BongobondhuHiTechCityProject.png';
import CDL from '../../../public/assets/home/our_client_logo/Local/CDL.png';
import DRSEngineeringconstruction from '../../../public/assets/home/our_client_logo/Local/DRSEngineeringconstruction.png';
import GreenDynastyLimited from '../../../public/assets/home/our_client_logo/Local/GreenDynastyLimited.jpg';
import JahidConstructionLtd from '../../../public/assets/home/our_client_logo/Local/JahidConstructionLtd.jpg';
import JCXsaminaHouse from '../../../public/assets/home/our_client_logo/Local/JCXsaminaHouse.png';
import JonotaConstructionLtd from '../../../public/assets/home/our_client_logo/Local/JonotaConstructionLtd.jpg';
import KhanEnterprise from '../../../public/assets/home/our_client_logo/Local/KhanEnterprise.jpg';
import LotafaEnterprise from '../../../public/assets/home/our_client_logo/Local/LotafaEnterprise.png';
import MetalIndustriesLtd from '../../../public/assets/home/our_client_logo/Local/MSMetalIndustriesLtd.png';
import MamunConstructionLtd from '../../../public/assets/home/our_client_logo/Local/MamunConstructionLtd.png';
import MostofaConstructionLtd from '../../../public/assets/home/our_client_logo/Local/MostofaConstructionLtd.jpg';
import MS_SafaConstruction from '../../../public/assets/home/our_client_logo/Local/MS_SafaConstruction.jpg';
import NadiaSadiaConstruction from '../../../public/assets/home/our_client_logo/Local/NadiaSadiaConstruction.jpg';
import NorthWestEngineering from '../../../public/assets/home/our_client_logo/Local/NorthWestEngineering.png';
import SMConstruction from '../../../public/assets/home/our_client_logo/Local/SMConstruction.png';
import THBEngineering from '../../../public/assets/home/our_client_logo/Local/THBEngineering&constructionLTD.png';
import XLEngineering from '../../../public/assets/home/our_client_logo/Local/XLEngineering.png';
import ZihadConstruction from '../../../public/assets/home/our_client_logo/Local/ZihadConstruction.jpg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function OurClients() {
    const clients = [
        { id: 1, name: 'AshuliaElevatedExpressway', logo: AshuliaElevatedExpressway, alt: 'AshuliaElevatedExpressway logo' },
        { id: 2, name: 'CGCBaseCamp', logo: CGCBaseCamp, alt: 'CGCBaseCamp logo' },
        { id: 3, name: 'ChinaGeoEngineeringCorporation', logo: ChinaGeoEngineeringCorporation, alt: 'ChinaGeoEngineeringCorporation logo' },
        { id: 4, name: 'ChinaHarbourEngineeringCompany', logo: ChinaHarbourEngineeringCompany, alt: 'ChinaHarbourEngineeringCompany logo' },
        { id: 5, name: 'ChinaMachineryEngineeringcorporation', logo: ChinaMachineryEngineeringcorporation, alt: 'ChinaMachineryEngineeringcorporation logo' },
        { id: 6, name: 'ChinaMajorBridgeEngineeringCoLtd', logo: ChinaMajorBridgeEngineeringCoLtd, alt: 'ChinaMajorBridgeEngineeringCoLtd logo' },
        { id: 7, name: 'CRBG', logo: CRBG, alt: 'CRBG logo' },
        { id: 8, name: 'CRCE', logo: CRCE, alt: 'CRCE logo' },
        { id: 9, name: 'CSCEC7', logo: CSCEC7, alt: 'CSCEC7 logo' },
        { id: 10, name: 'HuitongInternationalConstructionInstallationEngineering', logo: HuitongInternationalConstructionInstallationEngineering, alt: 'HuitongInternationalConstruction&InstallationEngineering logo' },
        { id: 11, name: 'HydroChinaPowerChina', logo: HydroChinaPowerChina, alt: 'HydroChina&PowerChina logo' },
        { id: 12, name: 'ItalianThaiDevelopmentPCL', logo: ItalianThaiDevelopmentPCL, alt: 'ItalianThaiDevelopmentPCL logo' },
        { id: 13, name: 'SinohydroCorporationLimited', logo: SinohydroCorporationLimited, alt: 'SinohydroCorporationLimited logo' },
        { id: 14, name: 'ZhongnanEngineeringCorporationLimited', logo: ZhongnanEngineeringCorporationLimited, alt: 'ZhongnanEngineeringCorporationLimited logo' },
        { id: 15, name: 'ZihadConstruction', logo: ZihadConstruction, alt: 'ZihadConstruction logo' },
        { id: 16, name: 'XLEngineering', logo: XLEngineering, alt: 'XLEngineering logo' },
        { id: 17, name: 'THBEngineering', logo: THBEngineering, alt: 'THBEngineering logo' },
        { id: 18, name: 'SMConstruction', logo: SMConstruction, alt: 'SMConstruction logo' },
        { id: 19, name: 'NorthWestEngineering', logo: NorthWestEngineering, alt: 'NorthWestEngineering logo' },
        { id: 20, name: 'NadiaSadiaConstruction', logo: NadiaSadiaConstruction, alt: 'NadiaSadiaConstruction logo' },
        { id: 21, name: 'MS_SafaConstruction', logo: MS_SafaConstruction, alt: 'MS_SafaConstruction logo' },
        { id: 22, name: 'MostofaConstructionLtd', logo: MostofaConstructionLtd, alt: 'MostofaConstructionLtd logo' },
        { id: 23, name: 'MetalIndustriesLtd', logo: MetalIndustriesLtd, alt: 'MetalIndustriesLtd logo' },
        { id: 24, name: 'LotafaEnterprise', logo: LotafaEnterprise, alt: 'LotafaEnterprise logo' },
        { id: 25, name: 'KhanEnterprise', logo: KhanEnterprise, alt: 'KhanEnterprise logo' },
        { id: 26, name: 'JonotaConstructionLtd', logo: JonotaConstructionLtd, alt: 'JonotaConstructionLtd logo' },
        { id: 27, name: 'JCXsaminaHouse', logo: JCXsaminaHouse, alt: 'JCXsaminaHouse logo' },
        { id: 28, name: 'JahidConstructionLtd', logo: JahidConstructionLtd, alt: 'JahidConstructionLtd logo' },
        { id: 29, name: 'GreenDynastyLimited', logo: GreenDynastyLimited, alt: 'GreenDynastyLimited logo' },
        { id: 30, name: 'DRSEngineeringconstruction', logo: DRSEngineeringconstruction, alt: 'DRSEngineeringconstruction logo' },
        { id: 31, name: 'CDL', logo: CDL, alt: 'CDL logo' },
        { id: 32, name: 'BongobondhuHiTechCityProject', logo: BongobondhuHiTechCityProject, alt: 'BongobondhuHiTechCityProject logo' },
        { id: 33, name: 'BMTradingCorporationCRBGProject', logo: BMTradingCorporationCRBGProject, alt: 'BMTradingCorporationCRBGProject logo' },
        { id: 34, name: 'BismillahConstructionLtd', logo: BismillahConstructionLtd, alt: 'BismillahConstructionLtd logo' },
        { id: 35, name: 'BengalEngineering', logo: BengalEngineering, alt: 'BengalEngineering logo' },
        { id: 36, name: 'ARCorporation', logo: ARCorporation, alt: 'ARCorporation logo' }
    ];

    const referenceLetters = [
        { id: 1, logo: AshuliaElevatedExpressway, alt: 'Reference Letter 1' },
        { id: 2, logo: CGCBaseCamp, alt: 'Reference Letter 2' },
        { id: 3, logo: ChinaGeoEngineeringCorporation, alt: 'Reference Letter 3' },
        { id: 4, logo: ChinaHarbourEngineeringCompany, alt: 'Reference Letter 4' },
        { id: 5, logo: CRBG, alt: 'Reference Letter 5' },
        { id: 6, logo: CRCE, alt: 'Reference Letter 6' }
    ];

    const halfIndex = Math.ceil(clients.length / 2);
    const firstRow = clients.slice(0, halfIndex);
    const secondRow = clients.slice(halfIndex);

    return (
        <div className="bg-white py-16 max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-8 lg:mb-12">
                    Our Valued Clients
                </h2>

                <div className="space-y-6">
                    <Marquee speed={50} gradient={false} pauseOnHover={true}>
                        {firstRow.map((client) => (
                            <div
                                key={client.id}
                                className="flex items-center justify-center p-6 lg:p-8 mx-4 min-h-[120px] min-w-[200px]"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.alt}
                                    width={120}
                                    height={80}
                                    className="max-w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>

                    <Marquee speed={50} gradient={false} pauseOnHover={true} direction="right">
                        {secondRow.map((client) => (
                            <div
                                key={client.id}
                                className="flex items-center justify-center p-6 lg:p-8 mx-4 min-h-[120px] min-w-[200px]"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.alt}
                                    width={120}
                                    height={80}
                                    className="max-w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
                {/* 
                <div className="text-center mt-8">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 group text-sm sm:text-base mx-auto">
                        View More
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div> */}
            </div>

            <div className="container mx-auto px-4 mt-12 lg:mt-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-8 lg:mb-12">
                    Client's Reference Letter
                </h2>

                <Marquee speed={50} gradient={false}>
                    {referenceLetters.map((letter) => (
                        <div
                            key={letter.id}
                            className="bg-gray-50 border border-gray-200 flex items-center justify-center p-6 lg:p-8 mx-4 min-h-[300px] min-w-[250px]"
                        >
                            <Image
                                src={letter.logo}
                                alt={letter.alt}
                                width={200}
                                height={280}
                                className="max-w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </Marquee>

                {/* <div className="text-center mt-8">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 group text-sm sm:text-base mx-auto">
                        View More
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div> */}
            </div>
        </div>
    );
}