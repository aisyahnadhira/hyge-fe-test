import React from 'react';
import Image from "next/image";

export default function Footer() {
    return (
        <div className="grid grid-cols-3 gap-8 text-white bg-[rgb(15,17,22)] px-12 py-20">
            <div className="flex flex-col text-base">
                <Image src="/image/logo.png" alt="Logo" width={100} height={28} />
                <p className='mt-4'>Hyge is a Singapore based company that provides customisation and specialisation in website design, development, as well as mobile app development.</p>
                <div className="flex flex-row items-center mt-4">
                    <Image src="/image/location.png" alt="Location" width={24} height={24} />
                    <p className='ml-2 font-semibold'>North Point Bizhub, Singapore.</p>
                </div>
            </div>
            <div className="flex flex-col text-base ">
                <div className="flex flex-col">
                    <p>Email Us</p>
                    <p>michael@hygeworks.com</p>
                </div>
                <div className="flex flex-col mt-4">
                    <p>Contact Us</p>
                    <p>+65 8533 3575</p>
                </div>
            </div>
            <div className="flex flex-col text-base">
                <div className="flex flex-row justify-between tracking-[1.5px]">
                    <p>Linkedin</p>
                    <Image src="/image/arrow-up.png" alt="Linkedin" width={20} height={20} />
                </div>
                <div className="flex flex-row justify-between mt-4 py-4 border-t border-b border-white tracking-[1.5px]">
                    <p>Instagram</p>
                    <Image src="/image/arrow-up.png" alt="Instagram" width={20} height={20} />
                </div>
                <div className="flex flex-row justify-between mt-4 tracking-[1.5px]">
                    <p>Behance</p>
                    <Image src="/image/arrow-up.png" alt="Behance" width={20} height={20} />
                </div>
            </div>
            <hr className="col-span-3 my-8 border-t-1 border-[rgba(255,255,255,0.1)]" />
            <div className="col-span-3 ">
                <div className="flex justify-between w-full">
                    <p className="text-sm">Copyright © 2023 Hyge, Pte. Ltd.</p>
                    <p className="text-sm">All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}
