import ProgressCircle from '@/components/ProgressCircle';
import Image from "next/image";

export default function FinalScore({ score, total }) {
  const percentage = (score / total) * 100
  return (
    <div>
      <div className="bg-[#004A4038] p-8 rounded-2xl shadow-xl text-center max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-[#004A40] mb-4">Lesson Complete!</h2>
        <div className='flex justify-center relative'>
          <ProgressCircle rad={80} strk={20} baseStrk={8} progress={percentage} color={"#004A40"} baseColor={"#FFFFFF"} />
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <p className="text-lg text-gray-700">Score</p>
            <p className="text-4xl font-bold text-[#004A40] my-4">{score} / {total}</p>
          </div>
        </div>
        <div className='flex gap-2 mt-4'>
          <button onClick={() => window.location.href = '/lesson'} className="bg-[#004A40] text-white px-10 py-2 rounded-md">
            Retry
          </button>
          <button
            onClick={() => window.location.href = '/dashboard/profile'}
            className="border border-[#004A40] bg-white text-[#004A40] px-10 py-2 rounded-md"
          >
            Details
          </button>
        </div>
      </div>
      <div className='flex flex-col mt-4 sm:mt-0 items-center justify-center'>
        <Image
          src="/images/lady.png"
          alt="Lady"
          width={100}
          height={100}
          className=""
        />
        <button
          onClick={() => window.location.href = '/dashboard'}
          className="bg-[#004A40] text-white px-20 py-2  rounded-3xl sm:rounded-lg"
        >
          Go to Next Lesson
        </button>
      </div>
    </div>
  );
}