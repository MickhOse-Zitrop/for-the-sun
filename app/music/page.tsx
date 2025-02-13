"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function MusicPage() {
  const router = useRouter();
  const song = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("") : undefined,
  );
  const [icon] = useState<string>("-1");
  let playing: boolean;

  const data = [
    { title: "Счастье", subtitle: "Нервы" },
    { title: "В этом городе", subtitle: "The Limba" },
    { title: "Она тебя любит", subtitle: "SLAVA MARLOW, The Limba, Элджей" },
    { title: "Секрет", subtitle: "The Limba" },
    { title: "Седатив", subtitle: "VICE-SET, MONTY-PUFF" },
    {
      title: "we fell in love in october",
      subtitle: "girl in red",
      png: "png",
    },
    { title: "Kiss", subtitle: "Lil Peep", png: "png" },
    { title: "worlds away", subtitle: "Lil Peep", png: "png" },
    { title: "Калым", subtitle: "Мурат Тхагалегов" },
    { title: "uf-af", subtitle: "LOLIWZ" },
    { title: "А чё чё", subtitle: "Бьянка" },
    { title: "Стерва", subtitle: "Ваня Дмитриенко" },
  ];

  function handlePlay(i: number) {
    if (song.current?.id !== i.toString()) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      song.current.src = `/audio/music-${i}.mp3`;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      song.current.id = i.toString();
      song.current?.play().then();
      playing = true;
    } else {
      if (!playing) {
        song.current.play().then();
        playing = true;
      } else {
        song.current.pause();
        playing = false;
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1
        className="mb-4 font-bold text-lg text-gray-700 text-center"
        onClick={() =>
          toast("Чтобы послушать песенку", {
            description: "нажми на картинку",
            action: {
              label: "Хоросо",
              onClick: () => toast("Умничка)"),
            },
          })
        }
      >
        Песни, которые напоминают мне о тебе <br />
        (тыкни сюда)
      </h1>
      <ScrollArea className="h-[500px]">
        {data.length
          ? data.map((e, i) => (
              <div
                key={i}
                className="p-2 mb-2 flex gap-4 h-16 w-64 rounded-xl bg-primary-foreground"
              >
                <div
                  className="relative flex items-center justify-center w-11 group cursor-pointer"
                  onClick={() => {
                    handlePlay(i + 1);
                  }}
                >
                  <Avatar
                    className={cn(
                      "h-11 w-11 rounded-xl transition-all duration-300",
                      icon === (i + 1).toString() && "opacity-40",
                    )}
                  >
                    <AvatarImage
                      className="object-cover"
                      src={`/for-the-sun/music-${i + 1}.${e.png ?? "jpg"}`}
                      alt="image"
                    />
                    <AvatarFallback>
                      <Skeleton className="h-11 w-11 rounded-xl bg-primary" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold whitespace-nowrap w-40 overflow-ellipsis overflow-hidden text-gray-700">
                    {e.title}
                  </p>
                  <p className="text-sm whitespace-nowrap w-40 overflow-ellipsis overflow-hidden text-gray-700">
                    {e.subtitle}
                  </p>
                </div>
              </div>
            ))
          : Array.from({ length: 6 }).map((_, i) => (
              <Skeleton
                key={i}
                className="p-2 mb-2 flex gap-4 h-16 w-64 rounded-xl bg-primary-foreground"
              >
                <Skeleton className="h-11 w-11 rounded-xl bg-primary" />
                <div className="flex flex-col gap-1 mt-2">
                  <Skeleton className="h-3 w-28 rounded-xl bg-primary" />
                  <Skeleton className="h-3 w-20 rounded-xl bg-primary" />
                </div>
              </Skeleton>
            ))}
      </ScrollArea>
      <Button
        className="mt-4"
        onClick={() => {
          router.back();
          song.current?.pause();
        }}
      >
        <ArrowLeft /> На предыдущую страницу
      </Button>
    </div>
  );
}
