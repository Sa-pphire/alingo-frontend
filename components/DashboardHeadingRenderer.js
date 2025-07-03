'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FireIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import ProgressCircle from '@/components/ProgressCircle'; // adjust path
import { useRef, useState } from 'react';

export default function DashboardHeadingRenderer() {
  const pathname = usePathname();
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState('/images/lady.png');

  const handleImageClick = () => fileInputRef.current?.click();

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setProfileImage(fileURL);
    }
  };

  if (pathname === '/dashboard') {
    return (
      <div className="sm:hidden flex justify-center text-white items-center space-x-6 my-8 text-[#004A40]">
        <div className="flex items-center space-x-1">
          <Image src="/images/ng.png" alt="flag" width={40} height={20} className='rounded-full border-2 border-green-200' />
        </div>
        <div className="flex items-center space-x-1">
          <ProgressCircle progress={65} color={"#e5e7eb"} baseColor={"#81a5a0"} />
          <span className="font-black">26/45</span>
        </div>
        <div className="flex items-center space-x-1">
          <FireIcon className="w-5 h-5 text-orange-500" />
          <span className="font-black">1</span>
        </div>
        <div className="flex items-center space-x-1">
          <Image src="/images/Infinity-white.svg" alt="infinity White" width={30} height={30} />
          <span className="font-black">5</span>
        </div>
      </div>
    );
  }

  if (pathname === '/dashboard/profile') {
    return (
      <div className="sm:hidden flex flex-row items-center mt-8 mx-2 text-white">
        <div className="relative w-[100px] h-[100px]">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <Image
              src={profileImage}
              alt="User avatar"
              fill
              className="object-scale-down w-auto h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          <button
            onClick={handleImageClick}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <PencilSquareIcon className="w-5 h-5 text-green-900" />
          </button>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <div className="mb-4">
          <div className="flex gap-2">
            <h2 className="text-base font-black">Jane Doe</h2>
            <Image src="/images/ng.png" alt="flag" width={40} height={40} className='rounded-full border-2 border-green-200' />
          </div>
          <p className="text-xs text-white mt-2">@Sapphire Joined Aug 2025</p>
        </div>
      </div>
    );
  }

  return null;
}
