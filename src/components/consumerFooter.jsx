import React from 'react';
import SidebarLogo from "../../public/assets/LOGO.png";
import GooglePlayLogo from "../../public/assets/google-playstore.png";
import AppleStoreLogo from "../../public/assets/apple.png";
import FbLogo from "../../public/assets/fb-logo.png";
import InstaLogo from "../../public/assets/insta-logo.png";
import Image from "next/image";

const ConsumerFooter = () => {
    return (
        <div className='bg-[#BB1140]'>
            <div id='mainFooter' className='flex flex-wrap'>
                <div id='logoAndAppDownload' className='md:w-3/12 w-full flex flex-col items-center mx-2 mb-7'>
                    <div id='logo'>
                        <Image
                            src={SidebarLogo}
                            width={140}
                            height={140}
                            alt="logo"
                            objectFit="contain"
                            objectPosition="center"
                            className="mt-2"
                        />
                    </div>
                    <div id='appDownload' className='flex flex-col items-center'>
                        <div className='text-xs text-white italic'>Download the app by clicking the link below:</div>
                        <div className='flex justify-center'>
                            <div id="googlePlay">
                                <Image
                                    src={GooglePlayLogo}
                                    alt="logo"
                                    objectFit="contain"
                                    objectPosition="center"
                                    className="h-[44px] w-[110px]"
                                />
                            </div>
                            <div id="appleStore">
                                <Image
                                    src={AppleStoreLogo}
                                    alt="logo"
                                    objectFit="contain"
                                    objectPosition="center"
                                    className="py-1 h-[44px] w-[110px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='usefulLinks' className='py-5 px-1 md:w-1/6 mx-2'>
                    <p className='text-base text-white font-semibold mb-2 italic'>Useful links</p>
                    <p className='text-sm text-white font-extralight italic'>Delivery information</p>
                    <p className='text-sm text-white font-extralight italic'>Returns</p>
                    <p className='text-sm text-white font-extralight italic'>Blog</p>
                    <p className='text-sm text-white font-extralight italic'>Payment options</p>
                    <p className='text-sm text-white font-extralight italic'>Track your order</p>
                </div>
                <div id='services' className='py-5 px-1 md:w-1/6 mx-2'>
                    <p className='text-base text-white font-semibold mb-2 italic'>Service</p>
                    <p className='text-sm text-white font-extralight italic'>Offers</p>
                    <p className='text-sm text-white font-extralight italic'>Help and FAQ</p>
                    <p className='text-sm text-white font-extralight italic'>About FABGOLD</p>
                </div>
                <div id='contact' className='py-5 px-1 md:w-1/6 mx-2'>
                    <p className='text-base text-white font-semibold mb-2 italic'>Contact</p>
                    <p className='text-sm text-white font-extralight mb-2 italic'>(091) 322-7128</p>
                    <p className='text-sm text-white font-extralight mb-2 italic'>Fabgold@gmail.com</p>
                    <p className='text-sm text-white font-extralight italic'>Office no 738 & 740, Gera Imperium Rise, near Wipro circle, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057</p>
                </div>
                <div id='socialMedia' className='py-5 px-1 md:ml-4 md:w-1/6 mx-2'>
                    <p className='text-base text-white font-semibold mb-2 italic'>Social media</p>
                    <div className='flex'>
                        <Image
                            src={FbLogo}
                            width={25}
                            height={25}
                            alt="logo"
                            objectFit="contain"
                            objectPosition="center"
                            className=""
                        />
                        <Image
                            src={InstaLogo}
                            width={25}
                            height={25}
                            alt="logo"
                            objectFit="contain"
                            objectPosition="center"
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div id='copyright' className=''>

            </div>
        </div>
    )
}

export default ConsumerFooter;