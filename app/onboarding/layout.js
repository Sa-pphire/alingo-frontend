import CharacterRenderer from "@/components/CharacterRenderer";
import StepHeadingRenderer from "@/components/StepHeadingRenderer";
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
            {/* Mobile Title Outside Card */}
            <StepHeadingRenderer />
            <div className="min-h-screen sm:flex sm:items-center sm:justify-center sm:pt-10 sm:px-4 bg-white sm:bg-inherit">
                <div className="w-full sm:max-w-4xl">
                    <main className="bg-white sm:rounded-xl shadow-lg p-6 md:p-10 min-h-screen sm:min-h-fit">
                        {children}
                    </main>
                </div>
                <CharacterRenderer />
            </div>
        </div>
    );
}
