'use client';
import Image from "next/image";
import ProgressCircle from '@/components/ProgressCircle';
import { FireIcon, ArrowRightIcon } from '@heroicons/react/24/solid';


export default function Chapter() {
    return (
        <div className='sm:px-10'>
            {/* Stats & Unit */}
            <div className="hidden sm:flex justify-center items-center space-x-6 my-8 text-[#004A40]">
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
            <div className="flex flex-col items-center mb-8">
                <button className="bg-[#004A40] text-white px-12 py-2 rounded-full mb-4 shadow hover:bg-emerald-800">
                    Unit 1
                </button>
                <h3 className="text-xl text-[#004A40] font-bold">Chapter 1</h3>
            </div>

            {/* Lessons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 sm:mb-2">
                <div className="bg-emerald-300 text-center rounded-3xl px-6 mx-0 shadow-md flex flex-row">
                    <h3 className="text-9xl bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent font-semibold p-2">1</h3>
                    <div className="ml-6 mr-4 w-px h-40 bg-emerald-900"></div>
                    <div className="py-6 space-y-4">
                        <p className="text-emerald-900 text-2xl font-semibold">Nouns</p>
                        <button className="border-4 border-emerald-900 text-emerald-900 text-lg px-4 font-semibold flex rounded-xl">
                            Test
                            <span><ArrowRightIcon className="w-5 h-5 mt-1 ml-2 text-emerald-950" /></span>
                        </button>
                    </div>
                </div>

                <div className="relative bg-gray-100 text-center rounded-3xl px-2 mx-0 shadow-md flex flex-row">
                    <h3 className="text-9xl bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent font-semibold p-2">2</h3>
                    <div className="ml-4 mr-4 w-px h-40 bg-emerald-900"></div>
                    <div className="py-6 space-y-4">
                        <p className="text-emerald-900 text-2xl font-semibold">Solid</p>
                        <button className="border-4 border-emerald-900 text-emerald-900 text-lg px-4 font-semibold flex rounded-xl">
                            Test
                            <span><ArrowRightIcon className="w-5 h-5 mt-1 ml-2 text-emerald-950" /></span>
                        </button>
                    </div>
                    <Image
                        src="/images/lock.svg"
                        alt="star"
                        width={20}
                        height={20}
                        className="absolute top-[15px] sm:top-[5px] right-[30px] sm:right-[10px]"
                    />
                    <div className="absolute inset-0 bg-gray-200 h-40 opacity-60 rounded-3xl pointer-events-none"></div>

                </div>

                <div className="relative bg-gray-100 text-center rounded-3xl px-4 mx-0 shadow-md flex flex-row">
                    <h3 className="text-9xl bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent font-semibold p-2">3</h3>
                    <div className="ml-2 mr-4 w-px h-40 bg-emerald-900"></div>
                    <div className="py-6 space-y-4">
                        <p className="text-emerald-900 text-2xl font-semibold">Pro</p>
                        <button className="border-4 border-emerald-900 text-emerald-900 text-lg px-4 font-semibold flex rounded-xl">
                            Test
                            <span><ArrowRightIcon className="w-5 h-5 mt-1 ml-2 text-emerald-950" /></span>
                        </button>
                    </div>
                    <Image
                        src="/images/lock.svg"
                        alt="star"
                        width={20}
                        height={20}
                        className="absolute top-[15px] sm:top-[5px] right-[30px] sm:right-[10px]"
                    />
                    <div className="absolute inset-0 bg-gray-200 h-40 opacity-60 rounded-3xl pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
}
