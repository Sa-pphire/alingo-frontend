'use client';
import Image from 'next/image';

export default function BoyCharacter() {
  return (
      <Image
        src="/images/child.png"
        alt="Boy Character"
        width={224}
        height={64}
        className="absolute bottom-0 left-0 z-1 hidden lg:block ml-16"
        priority
      />
  );
}