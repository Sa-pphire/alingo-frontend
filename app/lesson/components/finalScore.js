// app/lesson/components/FinalScore.js
export default function FinalScore({ score, total }) {
  return (
    <div className="bg-emerald-900 p-8 rounded-xl shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-green-500 mb-4">🎉 Lesson Complete!</h2>
      <p className="text-lg text-gray-700">You scored</p>
      <p className="text-4xl font-bold text-white my-4">{score} / {total}</p>

      <button
        onClick={() => window.location.href = '/dashboard'}
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-white"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
