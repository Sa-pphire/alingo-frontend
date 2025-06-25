'use client';
import Image from 'next/image';

export default function UncleCharacter() {
  return (
      <Image
        src="/images/uncle.png"
        alt="Uncle Character"
        width={224}
        height={200}
        className="absolute bottom-0 right-0 z-1 w-90 hidden lg:block mr-4"
        priority
      />
  );
}
