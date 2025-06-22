// app/signup/layout.js
export const metadata = {
    title: 'Sign In | Alingo',
    description: 'Start learning African languages today.',
};
import CharacterIllustration from '../../components/characters';

export default function SigninLayout({ children }) {
    return (
        <div className='items-center justify-center bg-cover bg-center overflow-hidden'>
            {/* Mobile Title Outside Card */}
            <div className="bg-origin-border bg-contain bg-center text-white sm:hidden">
                <h1 className="text-3xl font-bold text-white text-center mt-12 mb-4 sm:hidden"> Sign In </h1>
                <p className="text-center text-sm text-white-600 mb-4 sm:hidden">Let us get to know you more</p>
            </div>
            <div className="flex items-center bg-white lg:bg-[url('/images/bg.jpg')] relative justify-center sm:px-4 sm:min-h-screen">
                <div className="bg-white shadow-lg w-full max-w-md p-10 sm:mb-[-15px] pb-[100px] sm:mt-0 sm:mb-0 sm:pb-8 sm:rounded-lg">
                    {children}
                </div>
                <CharacterIllustration />
            </div>
        </div>
    );
}
