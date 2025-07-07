import type { ITweet } from "@/app/shared/types/tweet.interface";
import Link from "next/link";

interface Props {
  tweet: ITweet;
}

export function Tweet({ tweet }: Props) {
  return (
    <div className="border border-white/10 rounded-xl p-4 bg-black text-white shadow-md">
      <div className="flex items-center gap-3 mb-2">
        — {tweet.author}
        {/* <Link href={`/profile/${tweet.author}`} className='font-semibold'> */}
      </div>
      <p>{tweet.text}</p>
    </div>
  );
}
