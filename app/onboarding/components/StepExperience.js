import Image from "next/image";

export default function StepExperience({ value, onChange }) {
    const levels = [
        {
            label: "Novice",
            description: "Ajebutter, I see you!!",
            emoji: (
                <Image
                    src="/images/novice.svg"
                    alt="Smiling with sweat Emoji"
                    width={50}
                    height={50}
                    className="sm:mt-18"
                    priority
                />
            ),
            style: "border-blue-400 text-blue-600 bg-blue-50",
            color: "ring-blue-400",
            divider: "bg-blue-400",
        },
        {
            label: "Intermediate",
            description: "Okay na, you don sabi small small.",
            emoji: (
                <Image
                    src="/images/intermediate.svg"
                    alt="Smiling Emoji"
                    width={50}
                    height={50}
                    className="sm:mt-12"
                    priority
                />
            ),
            style: "border-red-400 text-red-500 bg-red-50",
            color: "ring-red-400",
            divider: "bg-red-400",
        },
        {
            label: "Conversational",
            description: "OG, Na baba you be ni",
            emoji: (
                <Image
                    src="/images/conversational.svg"
                    alt="Disguised Emoji"
                    width={50}
                    height={50}
                    className="sm:mt-18"
                    priority
                />
            ),
            style: "border-green-400 text-green-600 bg-green-50",
            color: "ring-green-400",
            divider: "bg-green-400",
        },
    ];

    return (
        <div>
            <label className="hidden sm:block text-2xl font-black text-center mb-1">
                Experience
            </label>
            <p className="hidden sm:block text-sm text-emerald-800 text-center mb-6">
                Rate your language street cred!
            </p>
            <div className="flex flex-col sm:flex-row gap-8 sm:px-10 py-2">
                {levels.map((level) => {
                    const isSelected = value === level.label;
                    return (
                        <button
                            key={level.label}
                            type="button"
                            onClick={() => onChange(level.label)}
                            className={`flex flex-col sm:flex-1 sm:flex-col sm:items-center justify-between gap-3 text-left sm:text-center rounded-2xl pt-4 pb-6 px-4 shadow-xl border transition duration-200
                            ${level.style}
                            ${isSelected ? `ring-4 ${level.color} scale-105` : "hover:scale-105"}
                            `}
                        >
                            <div className="flex justify-between items-center w-full sm:block">
                                <div className="sm:flex sm:flex-col sm:items-center sm:text-center">
                                    <h3 className="text-lg font-black">{level.label}</h3>
                                    <div className={`h-0.5 w-16 sm:w-32 my-1 sm:my-2 rounded-full ${level.divider}`} />
                                    <p className="text-sm">{level.description}</p>
                                </div>

                                <div className="ml-4 sm:ml-0 sm:mb-2 flex justify-end sm:justify-center">
                                    {level.emoji}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
