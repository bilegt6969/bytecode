"use client";
import Image from 'next/image';
import React from "react";
import { WobbleCard } from "./wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="max-w-[30rem] mx-auto  lg:max-w-[70rem] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 mx-auto h-full bg-red- min-h-[100px] lg:min-h-[400px] min-h-[100px] w-[21rem] lg:w-auto"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Web Development
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Веб хөгжүүлэлтийн үндсэн хэл болох HTML, CSS, JavaScript хэлний хичээлүүд.
          </p>
        </div>
        <Image
          src="/ss.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl hidden sm:block"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 mx-auto min-h-[100px] bg-blue-800 min-h-[100px] w-[21rem] lg:w-auto">
        <h2 className="max-w-80 text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Бусад програмчлалын хэлүүд.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Python, C++, C# хэл сурах нь маш хэрэгтэй, мөн эдгээр хэл тус бүр өвөрмөц давуу тал ба хэрэглээг бидэнд санал болгодог.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:w-full lg:col-span-2 bg-purple-700 min-h-[100px] w-[21rem] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            IELTS ба SAT-ийн шалгалтууд
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            АНУ-д их дээд сургуульд элсэгчдын элсэлтийн ерөнхий шалгалт болох SAT мөн IELTS гэх шалгалтуудад бэлдхэд хэрэг болох олон төрлийн MOCK тест, ба номнуудыг санал болгож байна.
          </p>
        </div>
        <Image
          src="/332.png"
          width={600}
          height={600}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-[-2rem] object-contain rounded-2xl hidden sm:block"
        />
      </WobbleCard>
    </div>
  );
}
