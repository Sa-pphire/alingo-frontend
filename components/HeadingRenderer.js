'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FireIcon } from '@heroicons/react/24/solid';
import ProgressCircle from '@/components/ProgressCircle';

export default function HeadingRenderer() {
  const pathname = usePathname();

  if (pathname === '/dashboard/chapter' || '/lesson') {
    return (
      <div className='mb-4 sm:mb-0'>
        {/* Stats & Unit */}
        <div className="hidden sm:flex justify-center items-center space-x-6 my-2 text-[#004A40]">
          <div className="flex items-center space-x-1">
            <Image src="/images/ng.png" alt='flag' width={30} height={30} />
          </div>
          <div className="flex items-center space-x-1">
            <ProgressCircle progress={65} />
            <span className="font-black">26/45</span>
          </div>
          <div className="flex items-center space-x-1">
            <FireIcon className="w-5 h-5 text-orange-500" />
            <span className="font-black">1</span>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/images/Infinity.svg" alt='infinity' width={30} height={30} />
            <span className="font-black">5</span>
          </div>
        </div>

        {/* Unit Progress */}
        <div className="flex flex-row items-center justify-center gap-4">
          <button className="bg-[#004A40] text-white px-4 sm:px-8 py-2 rounded-full shadow border-2 border-[#004A40] font-extrabold">
            Unit 1
          </button>
          <h3 className="bg-emerald-100 text-[#004A40] px-4 sm:px-8 py-2 rounded-full shadow border-2 border-[#004A40] font-extrabold">Chapter 1</h3>
        </div>
      </div>
    )
  }
  return null;
}
