export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">ApexPrep</h1>
      <p className="text-xl text-gray-400">AI-Powered Interview Assistant</p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
          Start Interview
        </button>
        <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
          Login
        </button>
      </div>
    </main>
  );
}