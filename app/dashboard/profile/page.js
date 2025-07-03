'use client';
import Image from "next/image";
import { useRef, useState } from 'react';
import ProgressCircle from '@/components/ProgressCircle';
import { FireIcon, PencilSquareIcon, HeartIcon } from '@heroicons/react/24/solid';

export default function Profile() {
    const [profileImage, setProfileImage] = useState('/images/lady.png'); // Default avatar
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-2 ">
            <div className="hidden sm:flex flex-col items-center mb-8 md:mb-0 sm:p-15">
                <div className="relative w-[220px] h-[220px]">
                    {/* Circle Frame */}
                    <div className="w-full h-full rounded-full bg-white shadow-lg shadow-gray-400 ring-8 ring-gray-200 overflow-hidden relative">
                        <Image
                            src={profileImage}
                            alt="User avatar"
                            fill
                            className="object-scale-down w-auto h-auto transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Edit Icon outside the circle */}
                    <button
                        onClick={handleImageClick}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        <PencilSquareIcon className="w-5 h-5 text-green-900" />
                    </button>

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                        className="hidden"
                    />
                </div>

                <h2 className="text-xl font-bold mt-4">Jane Doe</h2>
                <div className="flex space-x-2 mt-2">
                    <Image src="/images/ng.png" alt='flag' width={30} height={30} />
                </div>
                <p className="text-sm text-emerald-900 mt-2">@Jdoe Joined Aug 2025</p>
            </div>

            {/* Overview & Achievements */}
            <div className="flex-1 w-full sm:w-1/2 sm:px-10 sm:mt-4">
                <h3 className="sm:text-2xl font-semibold mb-4">Overview</h3>
                <div className="mb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {/* Fire */}
                        <div className="flex items-center justify-center gap-2 font-bold bg-emerald-50 rounded-md shadow-lg border border-emerald-900 text-red-600 w-full h-8">
                            <FireIcon className="w-5 h-5 text-orange-500" />
                            <span>103</span>
                        </div>

                        {/* Progress */}
                        <div className="flex items-center justify-center gap-2 font-bold bg-emerald-50 rounded-md shadow-lg border border-emerald-900 text-emerald-900 w-full h-8">
                            <ProgressCircle progress={90} />
                            <span>0/45</span>
                        </div>

                        {/* Level */}
                        <div className="flex items-center justify-center gap-2 font-bold bg-emerald-50 rounded-md shadow-lg border border-emerald-900 text-emerald-900 w-full h-8">
                            <span className="font-bold text-sm">Lvl.</span>
                            <span className="font-bold text-sm">1</span>
                        </div>

                        {/* Hearts */}
                        <div className="flex items-center justify-center gap-2 font-bold bg-emerald-50 rounded-md shadow-lg border border-emerald-900 text-emerald-900 w-full h-8">
                            <HeartIcon className="w-5 h-5" />
                            <span>5</span>
                        </div>
                    </div>
                </div>

                <h4 className="font-semibold mb-2">Achievements</h4>
                <div className="bg-green-50 border border-[#004A40] p-2 rounded-lg shadow-inner mb-6">
                    <div className="flex flex-wrap items-center">
                        <div className="flex items-center space-x-2 ">
                            <Image src="/images/badge-1.png" alt='flag' width={50} height={50} className="w-14 h-14" />
                            <Image src="/images/badge-2.png" alt='flag' width={50} height={50} className="w-14 h-14" />
                            <Image src="/images/badge-3.png" alt='flag' width={50} height={50} className="w-14 h-14" />
                        </div>
                    </div>
                </div>

                {/* Personal Details */}
                <h4 className="font-semibold mb-2">Personal Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-xs mb-6">
                    <input type="text" placeholder="Name" className="bg-gray-100 rounded-full py-1.5 px-4 w-full" />
                    <input type="email" placeholder="Email" className="bg-gray-100 rounded-full py-1.5 px-4 w-full" />
                    <input type="password" placeholder="Password" className="bg-gray-100 rounded-full py-1.5 px-4 w-full" />
                    <input type="tel" placeholder="Mobile Number" className="bg-gray-100 rounded-full py-1.5 px-4 w-full" />
                </div>

                {/* Buttons */}
                <div className="flex flex-col text-xs sm:flex-row justify-end py-10 sm:py-6  gap-3 sm:space-y-0">
                    <button className="bg-[#004A40] hover:bg-green-900 text-white py-2 px-6 rounded-full">
                        Save Changes
                    </button>
                    <button className="bg-red-100 border border-red-600 text-red-600 hover:bg-red-200 py-2 px-6 rounded-full">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
}
