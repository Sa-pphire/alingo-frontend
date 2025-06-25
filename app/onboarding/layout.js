import CharacterRenderer from "@/components/CharacterRenderer";
import Image from "next/image";
export const metadata = {
    title: 'Onboarding | Alingo',
    description: 'Start learning African languages today.',
};


export default function OnboardingLayout({ children }) {
    return (
        <div>
            {/* Logo */}
            <div className="absolute left-4 mt-[-20px] z-20">
                <Image
                    src="/images/logo.png"
                    alt="Alingo logo"
                    width={224}
                    height={64}
                    className="hidden md:block w-30 lg:w-50 h-auto"
                    priority
                />
            </div>
            <h1 className="text-3xl font-bold text-white text-center mt-12 mb-4 sm:hidden"> Sign Up </h1>
            <p className="text-center text-sm text-white mb-4 sm:hidden">Let us get to know you more</p>
            <div className="sm:min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden sm:pt-10 sm:px-4">
                <div className="w-full max-w-4xl flex items-end justify-center">
                    <main className="bg-white sm:rounded-xl shadow-lg w-full pt-10 pb-90 p-6 md:p-10">
                        {children}
                    </main>
                </div>
                <CharacterRenderer />
            </div>
        </div>
    );
}
