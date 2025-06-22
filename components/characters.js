'use client';
import Image from 'next/image';

export default function CharacterIllustration() {
  return (
    <div className="hidden sm:block mt-8">
      {/* Woman on the left */}
      <Image
        src="/images/woman.png"
        alt="Character Left"
        width={128}
        height={180}
        className="hidden md:block absolute bottom-0 left-0 w-24 md:w-20 lg:w-32 h-auto"
      />

      {/* Boy on the right */}
      <Image
        src="/images/boy.png"
        alt="Character Right"
        width={192}
        height={220}
        className="absolute bottom-0 right-0 w-30 sm:w-24 md:w-32 lg:w-48 h-auto"
      />
    </div>
  );
}
