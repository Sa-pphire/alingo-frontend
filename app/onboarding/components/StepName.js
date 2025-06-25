export default function StepName({ value, onChange }) {
  return (
    <div className="px-4">
      <label className="hidden sm:block text-2xl font-black text-center mb-1">
        What’s your name?
      </label>
      <p className="hidden sm:block text-sm text-emerald-800 text-center mb-6">
        What should we shout when we see you?
      </p>
      <div className="flex flex-col sm:flex-row sm:py-20 gap-4">
        <input
          type="text"
          value={value.firstName}
          onChange={(e) => onChange({ ...value, firstName: e.target.value })}
          className="w-full border rounded-md p-3"
          placeholder="First name"
          required
        />
        <input
          type="text"
          value={value.lastName}
          onChange={(e) => onChange({ ...value, lastName: e.target.value })}
          className="w-full border rounded-md p-3"
          placeholder="Last name"
          required
        />
      </div>
    </div>
  );
}
