'use client';
import Image from 'next/image';

export default function LadyCharacter() {
  return (
      <Image
        src="/images/lady.png"
        alt="Lady Character"
        width={200}
        height={64}
        className="absolute bottom-0 left-0 z-1 hidden lg:block ml-24"
        priority
      />
  );
}
