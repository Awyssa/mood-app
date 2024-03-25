import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  const href = userId ? "/journal" : "/new-user";

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="flex gap-4 flex-col w-full max-w-[600px]">
        <h1 className="text-6xl">Mood journal</h1>
        <p className="text-white/60">AI powered journal app, track your mood</p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
