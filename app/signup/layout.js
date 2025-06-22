// app/signup/layout.js
export const metadata = {
    title: 'Sign Up | Alingo',
    description: 'Start learning African languages today.',
};
import Image from "next/image";
import CharacterIllustration from '../../components/characters';

export default function SignupLayout({ children }) {
    return (
        <div className='items-center justify-center bg-cover bg-center overflow-hidden'>
            {/* Logo */}
            <div className="absolute left-4 z-20">
                <Image
                    src="/images/logo.png"
                    alt="Alingo logo"
                    width={224}
                    height={64}
                    className="hidden sm:block w-30 lg:w-50 h-auto"
                    priority
                />
            </div>
            {/* Mobile Title Outside Card */}
            <h1 className="text-3xl font-bold text-white text-center mt-12 mb-4 sm:hidden"> Sign Up </h1>
            <p className="text-center text-sm text-white-600 mb-4 sm:hidden">Let us get to know you more</p>
            <div className="flex items-center relative justify-center sm:px-4 sm:min-h-screen">
                <div className="bg-white shadow-lg w-full max-w-md p-6 sm:mb-[-15px] pt-10 pb-90 sm:mt-0 sm:mb-0 sm:pb-8 sm:rounded-lg">
                    {children}
                </div>
                <CharacterIllustration />
            </div>
        </div>
    );
}
