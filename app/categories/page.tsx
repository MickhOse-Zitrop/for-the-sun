"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Images, MessageSquare, Music } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Categories() {
  const arrayOfIcons = [
    <MessageSquare className="text-white" key="messages" size={30} />,
    <Images className="text-white" key="images" size={30} />,
    <Music className="text-white" key="music" size={30} />,
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <h1 className="text-3xl text-white font-bold mt-10">Это наше</h1>
      <div className="flex gap-36 m-14 p-14 flex-col md:flex-row">
        {arrayOfIcons.map((e, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center cursor-pointer"
            onClick={() => router.push(`/` + e.key)}
          >
            <Heart
              className="absolute text-white blur-sm lg:blur-md mt-2 hover:blur-sm transition-all duration-500"
              size={140}
            />
            {e}
          </div>
        ))}
      </div>
      <div className="flex gap-20 mb-10">
        <Button onClick={() => router.back()} variant="outline">
          <ArrowLeft />
          Предыдущая страница
        </Button>
      </div>
    </div>
  );
}