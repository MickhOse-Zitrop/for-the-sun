"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ImagesPage() {
  const phrases: string[] = [
    "Самая недавняя",
    "Самая детская",
    "Самая холодная",
    "Самая щекастая",
    "Самая паровая",
    "Самая смешная",
    "Самая радостная",
    "Самая сонная",
    "Самая вечерняя",
    "Самая загадочная",
    "Самая счастливая",
    "Самая загоревшая",
    "Самая золотая",
    "Самая улыбчивая",
    "Самая довольная",
    "Самая милая",
    "Самая любвеобильная",
    "Самая целующая",
    "Самая ночная",
    "Самая уставшая",
    "Самая летняя",
    "Самая согревающая",
    "Самая светлая",
    "Самая мягкая",
    "Самая игривая",
    "Самая прекрасная",
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-foreground gap-4">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {phrases.map((e, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  {index == 0 && (
                    <CardHeader>
                      <CardTitle>Листай)</CardTitle>
                    </CardHeader>
                  )}
                  <CardContent className="flex aspect-square items-center relative justify-center p-3 select-none">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/for-the-sun/${index}.jpg`}
                      alt="Фото"
                      className="h-full w-full rounded object-cover"
                    />
                  </CardContent>
                  <CardFooter>
                    <p className="flex gap-2 font-extrabold italic text-gray-700">
                      {e}
                      <Heart className="text-primary" />
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
          {/*<CarouselItem>*/}
          {/*  <div className="p-1">*/}
          {/*    <Card>*/}
          {/*      <CardContent className="flex aspect-square items-center relative justify-center p-3 select-none">*/}
          {/*        <Button>Смотреть все сразу</Button>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*  </div>*/}
          {/*</CarouselItem>*/}
        </CarouselContent>
      </Carousel>
      <Button onClick={() => router.back()}>
        <ArrowLeft />
        На предыдущую страницу
      </Button>
    </div>
  );
}
