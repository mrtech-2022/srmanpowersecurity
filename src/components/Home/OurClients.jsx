import React from 'react';
//International Client Logos
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
//Local Client Logos
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

//Client referenceLetters
import letter1 from '../../../public/assets/home/Reference_Letter/1.jpg';
import letter2 from '../../../public/assets/home/Reference_Letter/2.jpg';
import letter3 from '../../../public/assets/home/Reference_Letter/3.jpg';
import letter4 from '../../../public/assets/home/Reference_Letter/4.jpg';
import letter5 from '../../../public/assets/home/Reference_Letter/5.jpg';
import letter6 from '../../../public/assets/home/Reference_Letter/6.jpg';
import letter7 from '../../../public/assets/home/Reference_Letter/7.jpg';
import letter8 from '../../../public/assets/home/Reference_Letter/8.jpg';
import letter9 from '../../../public/assets/home/Reference_Letter/9.jpg';

export default function OurClients() {
    const clients = [
        { id: 1, name: 'Ashulia Elevated Expressway', logo: AshuliaElevatedExpressway, alt: 'Ashulia Elevated Expressway logo' },
        { id: 2, name: 'CGC Base Camp', logo: CGCBaseCamp, alt: 'CGC Base Camp logo' },
        { id: 3, name: 'China Geo Engineering Corporation', logo: ChinaGeoEngineeringCorporation, alt: 'China Geo Engineering Corporation logo' },
        { id: 4, name: 'China Harbour Engineering Company', logo: ChinaHarbourEngineeringCompany, alt: 'China Harbour Engineering Company logo' },
        { id: 5, name: 'China Machinery Engineering Corporation', logo: ChinaMachineryEngineeringcorporation, alt: 'China Machinery Engineering Corporation logo' },
        { id: 6, name: 'China Major Bridge Engineering Co Ltd', logo: ChinaMajorBridgeEngineeringCoLtd, alt: 'China Major Bridge Engineering Co Ltd logo' },
        { id: 7, name: 'CRBG', logo: CRBG, alt: 'CRBG logo' },
        { id: 8, name: 'CRCE', logo: CRCE, alt: 'CRCE logo' },
        { id: 9, name: 'CSCEC7', logo: CSCEC7, alt: 'CSCEC7 logo' },
        { id: 10, name: 'Huitong International Construction & Installation', logo: HuitongInternationalConstructionInstallationEngineering, alt: 'Huitong International Construction & Installation logo' },
        { id: 11, name: 'HydroChina / PowerChina', logo: HydroChinaPowerChina, alt: 'HydroChina and PowerChina logo' },
        { id: 12, name: 'Italian-Thai Development PCL', logo: ItalianThaiDevelopmentPCL, alt: 'Italian-Thai Development PCL logo' },
        { id: 13, name: 'Sinohydro Corporation Limited', logo: SinohydroCorporationLimited, alt: 'Sinohydro Corporation Limited logo' },
        { id: 14, name: 'Zhongnan Engineering Corporation Limited', logo: ZhongnanEngineeringCorporationLimited, alt: 'Zhongnan Engineering Corporation Limited logo' },
        { id: 15, name: 'Zihad Construction', logo: ZihadConstruction, alt: 'Zihad Construction logo' },
        { id: 16, name: 'XL Engineering', logo: XLEngineering, alt: 'XL Engineering logo' },
        { id: 17, name: 'THB Engineering & Construction', logo: THBEngineering, alt: 'THB Engineering & Construction logo' },
        { id: 18, name: 'SM Construction', logo: SMConstruction, alt: 'SM Construction logo' },
        { id: 19, name: 'NorthWest Engineering', logo: NorthWestEngineering, alt: 'NorthWest Engineering logo' },
        { id: 20, name: 'Nadia Sadia Construction', logo: NadiaSadiaConstruction, alt: 'Nadia Sadia Construction logo' },
        { id: 21, name: 'MS Safa Construction', logo: MS_SafaConstruction, alt: 'MS Safa Construction logo' },
        { id: 22, name: 'Mostofa Construction Ltd', logo: MostofaConstructionLtd, alt: 'Mostofa Construction Ltd logo' },
        { id: 23, name: 'Metal Industries Ltd', logo: MetalIndustriesLtd, alt: 'Metal Industries Ltd logo' },
        { id: 24, name: 'Lotafa Enterprise', logo: LotafaEnterprise, alt: 'Lotafa Enterprise logo' },
        { id: 25, name: 'Khan Enterprise', logo: KhanEnterprise, alt: 'Khan Enterprise logo' },
        { id: 26, name: 'Jonota Construction Ltd', logo: JonotaConstructionLtd, alt: 'Jonota Construction Ltd logo' },
        { id: 27, name: 'JCX Samina House', logo: JCXsaminaHouse, alt: 'JCX Samina House logo' },
        { id: 28, name: 'Jahid Construction Ltd', logo: JahidConstructionLtd, alt: 'Jahid Construction Ltd logo' },
        { id: 29, name: 'Green Dynasty Limited', logo: GreenDynastyLimited, alt: 'Green Dynasty Limited logo' },
        { id: 30, name: 'DRS Engineering Construction', logo: DRSEngineeringconstruction, alt: 'DRS Engineering Construction logo' },
        { id: 31, name: 'CDL', logo: CDL, alt: 'CDL logo' },
        { id: 32, name: 'Bongobondhu HiTech City Project', logo: BongobondhuHiTechCityProject, alt: 'Bongobondhu HiTech City Project logo' },
        { id: 33, name: 'BM Trading Corporation (CRBG Project)', logo: BMTradingCorporationCRBGProject, alt: 'BM Trading Corporation CRBG Project logo' },
        { id: 34, name: 'Bismillah Construction Ltd', logo: BismillahConstructionLtd, alt: 'Bismillah Construction Ltd logo' },
        { id: 35, name: 'Bengal Engineering & Services', logo: BengalEngineering, alt: 'Bengal Engineering & Services logo' },
        { id: 36, name: 'AR Corporation', logo: ARCorporation, alt: 'AR Corporation logo' }
    ];

    const referenceLetters = [
        { id: 1, logo: letter1, alt: 'Reference Letter 1' },
        { id: 2, logo: letter2, alt: 'Reference Letter 2' },
        { id: 3, logo: letter3, alt: 'Reference Letter 3' },
        { id: 4, logo: letter4, alt: 'Reference Letter 4' },
        { id: 5, logo: letter5, alt: 'Reference Letter 5' },
        { id: 6, logo: letter6, alt: 'Reference Letter 6' },
        { id: 7, logo: letter7, alt: 'Reference Letter 7' },
        { id: 8, logo: letter8, alt: 'Reference Letter 8' },
        { id: 9, logo: letter9, alt: 'Reference Letter 9' }
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
                                aria-label={client.name}
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
                                aria-label={client.name}
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
            </div>

            <div className="container mx-auto px-4 mt-12 lg:mt-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-8 lg:mb-12">
                    Client's Reference Letter
                </h2>

                <Marquee speed={50} gradient={false} pauseOnHover={true}>
                    {referenceLetters.map((letter) => (
                        <div
                            key={letter.id}
                            className="bg-gray-50 border border-gray-200 flex items-center justify-center p-6 lg:p-8 mx-4 min-h-[300px] min-w-[250px]"
                            aria-label={letter.alt}
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
            </div>
        </div>
    );
}