import Image from "next/image";
import { Tweet } from "./Tweet";
import { TWEETS } from "../shared/data/tweets.data";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <div className="space-y-3 mb-8">
          <h1 className="text-3xl font-bold mb-6">Home</h1>
          {TWEETS.map((tweet, index) => (
            <Tweet key={index} tweet={tweet} />
          ))}
        </div>
      </div>
    </div>
  );
}
