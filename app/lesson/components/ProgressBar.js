export default function ProgressBar({ currentStep, totalSteps }) {
  const percent = ((currentStep + 1) / totalSteps) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-[#004A40] h-2 rounded-full transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
