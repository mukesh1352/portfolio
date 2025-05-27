"use client";
import { useRouter } from 'next/navigation';

export default function Heading() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <h1 className="text-5xl font-semibold mb-6 tracking-tight animate-fade-in">
        Welcome to My Portfolio
      </h1>

      <button
        onClick={() => router.push('/main')}
        className="px-6 py-2 rounded-full bg-gradient-to-r from-red-400 to-pink-500 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Go to Main
      </button>
    </div>
  );
}