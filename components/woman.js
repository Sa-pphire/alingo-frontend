'use client';
import Image from 'next/image';

export default function WomanCharacter() {
  return (
      <Image
        src="/images/woman-right.png"
        alt="Woman Character"
        width={160}
        height={64}
        className="absolute bottom-0 right-0 z-1 hidden lg:block mr-26"
        priority
      />
  );
}
