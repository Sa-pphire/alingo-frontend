
export default function StepAge({ value, onChange }) {
  return (
    <div>
      <label className="hidden sm:block text-2xl text-center font-black mb-2">When is your birthday?</label>
      <p className="hidden sm:block text-sm text-emerald-900 text-center mb-6">We might send a cake (virtually) </p>
      <div className="pb-10 pt-2 sm:px-70 sm:py-20">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border rounded-md p-3  focus:outline-none focus:ring-2 focus:ring-[#004A40]"
        />
      </div>
    </div>
  );
}
