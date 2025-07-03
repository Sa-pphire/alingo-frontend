'use client';
import Image from "next/image";
import ProgressCircle from '@/components/ProgressCircle';
import StepProgress from './components/StepProgress';
import { FireIcon, UserIcon } from '@heroicons/react/24/solid';


export default function Dashboard() {
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
                <StepProgress />
            </div>

            {/* Chapters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 sm:mb-2">
                <div className="bg-[#004A40] text-center text-white rounded-4xl p-6 mx-0 shadow-md flex flex-col space-y-4">
                    <h3 className="text-xl font-bold">Chapter 1</h3>
                    <hr className="w-1/2 mx-auto" />
                    <p>lorem ipsum sit amet.</p>
                    <button className="border border-white py-2 rounded-2xl hover:bg-white hover:text-green-900 transition">
                        Guidelines
                    </button>
                    <button className="bg-green-500 text-white py-2 rounded-2xl hover:bg-green-300 transition">
                        Get Started
                    </button>
                </div>

                <div className="relative bg-gray-100 text-center text-gray-600 rounded-4xl p-6 shadow-md flex flex-col space-y-4">
                    <h3 className="text-xl text-red-500 font-bold">Chapter 2</h3>
                    <hr className="w-1/2 text-red-500 mx-auto" />
                    <p className="text-red-500">lorem ipsum sit amet.</p>
                    <button className="border border-red-500 text-red-300 py-2 rounded-2xl cursor-not-allowed">
                        Guidelines
                    </button>
                    <button className="bg-[#004A40] text-white py-2 rounded-2xl cursor-not-allowed">
                        Get Started
                    </button>
                    <div className="absolute inset-0 bg-gray-200 opacity-60 rounded-4xl pointer-events-none"></div>
                    <Image
                        src="/images/lock.svg"
                        alt="star"
                        width={20}
                        height={20}
                        className="absolute top-[15px] right-[30px]"
                    />
                </div>

                <div className="relative bg-gray-100 text-center text-gray-600 rounded-4xl p-6 shadow-md flex flex-col space-y-4">
                    <h3 className="text-xl text-red-500 font-bold">Chapter 3</h3>
                    <hr className="w-1/2 text-red-500 mx-auto" />
                    <p className="text-red-500">lorem ipsum sit amet.</p>
                    <button className="border border-red-500 text-red-300 py-2 rounded-2xl cursor-not-allowed">
                        Guidelines
                    </button>
                    <button className="bg-[#004A40] text-white py-2 rounded-2xl cursor-not-allowed">
                        Get Started
                    </button>
                    <div className="absolute inset-0 bg-gray-200 opacity-60 rounded-4xl pointer-events-none"></div>
                    <Image
                        src="/images/lock.svg"
                        alt="star"
                        width={20}
                        height={20}
                        className="absolute top-[15px] right-[30px]"
                    />
                </div>
            </div>
        </div>
    );
}
