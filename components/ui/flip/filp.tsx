import React from "react";
import { FlipWords } from "./flip-words";

export function FlipWordsDemo() {
  const words = ["гэрэлтүүлье.",'өөрчилье.', "бүтээе.", "зурцгаая.", "зохиоцгооё.", "урлая."];

  return (
    <div className="h-[40rem] flex justify-center items-center px-3">
      <div className="lg:text-7xl text-6xl mx-auto font-normal dark:text-neutral-300 text-neutral-700">
        Ирээдүйг хамтдаа <br />
        <FlipWords className="" words={words} /><br/>
      </div>
    </div>
  );
}
