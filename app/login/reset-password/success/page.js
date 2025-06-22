export default function ResetSuccess() {
    return (
        <div className="px-6 pb-8 pt-6 w-full max-w-sm text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-green-900 text-white w-30 h-30 flex items-center justify-center rounded-full">
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold mb-2 text-green-900">All Done!</h2>
            <p className="text-xs sm:text-sm text-green-800 mb-5">You have successfully reset your password.</p>

            <a href="/login">
                <button className="w-full bg-green-900 hover:bg-green-800 text-white py-2 rounded-md font-semibold">Go To Sign In</button>
            </a>
        </div>
    );
}
