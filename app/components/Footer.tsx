import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
    return (
        <div className='p-6 pt-10 faz:p-10 md:p-20 md:pt-10 xl:max-w-7xl mx-auto 2xl:p-0 2xl:pt-10'>
            <div>
                <h2 className='font-bold text-2xl w-full mb-8 md:text-4xl'><span className='block'>Designed</span> for Companies</h2>
                <p className='text-black/50 text-sm md:text-lg'>We are a team of passionate people whose goal is to improve everyone{"'"}s life. Our services are designed for small to medium size companies.</p>
            </div>
            <div className='pt-10'>
                <div>
                    <ul className='list-disc pl-5 text-black text-sm md:text-lg'>
                        <li className="text-[#79DFC1]">Home</li>
                        <li className="text-[#79DFC1]">Contact us</li>
                        <li className="text-[#79DFC1]">Privacy policy</li>
                        <li className="text-[#79DFC1]">Help</li>
                        <li className="text-[#79DFC1]">Forum</li>
                    </ul>

                </div>
                <div className='pt-4 '>
                    <p className='flex gap-x-2 text-[#79DFC1] items-center text-sm md:text-lg'>
                        <span><FaPhoneAlt className='text-black' /></span>
                        +1 (650) 555-0111
                    </p>
                    <p className='flex gap-x-2 pt-2 text-[#79DFC1] items-center text-sm md:text-lg'>
                        <span><MdOutlineMailOutline className='text-black' /></span>
                        muhammadfawwad88@gmail.com
                    </p>
                </div>
            </div>
            <div className='flex mt-6 mb-10 pl-44 gap-x-4'>
                <FaFacebook className='h-12 w-12  ' />
                <FaInstagram className='h-12 w-12  ' />
                <FaLinkedin className='h-12 w-12  ' />
            </div>

            <div className='text-center text-sm md:text-lg'>
                <h2>Copyright © Company name</h2>
            </div>
        </div>
    )
}

export default Footer