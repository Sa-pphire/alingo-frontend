import Image from "next/image";
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/solid';
import DashboardHeadingRenderer from '@/components/DashboardHeadingRenderer';
import ProtectedRoute from '@/components/ProtectedRoutes';

export const viewport = {
    themeColor: '#004A40',
}

export const metadata = {
    title: 'Dashboard | Alingo',
    description: 'Start learning African languages today.',
};


export default function DashboardLayout({ children }) {
    return (
        <ProtectedRoute>
            <div>
                <DashboardHeadingRenderer />
                <div className="min-h-screen sm:flex sm:items-center sm:justify-center sm:px-4 sm:bg-inherit">
                    <div className="w-full sm:max-w-4xl">
                        <main className="bg-white sm:rounded-4xl shadow-lg p-6 sm:pt-0 sm:px-0 min-h-screen sm:min-h-fit">
                            {/* Desktop Header */}
                            <header className="hidden sm:flex justify-between items-center sm:px-10 mb-4 sm:mb-0">
                                <Image
                                    src="/images/green.png"
                                    alt="Alingo logo"
                                    width={224}
                                    height={64}
                                    className="hidden md:block w-30 h-auto mt-[-10px]"
                                    priority
                                />
                                <div className="flex items-center gap-10 space-x-4 text-green-900">
                                    <Image src="/images/bars.svg" alt='Bars Icon' width={30} height={30} className="cursor-not-allowed" />
                                    <Link href="/dashboard"><Image src="/images/chat.svg" alt='Chat icon' width={30} height={30} /></Link>
                                    <Link href="/dashboard/profile"><UserIcon className="w-7 h-7" /></Link>
                                </div>
                            </header>
                            <hr className='hidden sm:block text-gray-200' />
                            {children}
                            {/* Footer on Mobile */}
                            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3 sm:hidden z-50">
                                <Image src="/images/bars.svg" alt='Bars Icon' width={28} height={28} className="cursor-not-allowed" />
                                <Link href="/dashboard"><Image src="/images/chat.svg" alt='Chat icon' width={28} height={28} /></Link>
                                <Link href="/dashboard/profile"><UserIcon className="w-7 h-7 text-green-900" /></Link>
                            </footer>
                        </main>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
