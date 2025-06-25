import Image from "next/image";

export default function StepReason({ value, onChange }) {
  const reasons = [
    {
      label: "Career",
      emoji: (
        <Image
          src="/images/career.svg"
          alt="Briefcase"
          width={40}
          height={40}
          priority
        />
      )
    },
    {
      label: "Travel",
      emoji: (
        <Image
          src="/images/travel.svg"
          alt="Airplane"
          width={40}
          height={40}
          priority
        />
      )
    },
    {
      label: "Friends and family",
      emoji: (
        <Image
          src="/images/family.svg"
          alt="Chat icon"
          width={40}
          height={40}
          priority
        />
      )
    },
    {
      label: "Education",
      emoji: (
        <Image
          src="/images/education.svg"
          alt="Notebook"
          width={40}
          height={40}
          priority
        />
      )
    },
    {
      label: "Just for fun",
      emoji: (
        <Image
          src="/images/fun.svg"
          alt="Confetti"
          width={40}
          height={40}
          priority
        />
      )
    }
  ];

  return (
    <div>
      <label className="hidden sm:block text-2xl font-black text-center mb-1">Why do you want to learn an African Language?</label>
      <p className="hidden sm:block text-sm text-emerald-800 text-center mb-6">
        You get ginger! But tell us what’s fueling the fire?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map((reason) => (
          <button
            key={reason.label}
            type="button"
            onClick={() => onChange(reason.label)}
            className={` flex gap-4 p-3 border border-2 border-gray-100 rounded-lg shadow-xl ${value === reason.label ? 'border-emerald-900 bg-green-50' : ''
              }`}
          >
            {reason.emoji}
            <div className="content-center text-black font-bold">{reason.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
