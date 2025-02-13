"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Main() {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [currentHour, setCurrentHour] = useState<number>(25);
  const [currentMinute, setCurrentMinute] = useState<number>(61);
  const [currentSecond, setCurrentSecond] = useState<number>(61);

  const router = useRouter();

  const anniversaryDate = new Date(2022, 9, 10, 0, 19, 2);

  setInterval(() => {
    const currentDate = new Date();

    const diffTime = Math.abs(
      Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
      ) -
        Date.UTC(
          anniversaryDate.getFullYear(),
          anniversaryDate.getMonth(),
          anniversaryDate.getDate(),
        ),
    );

    setCurrentDay(Math.round(diffTime / (1000 * 60 * 60 * 24)));

    if (currentDate.getSeconds() - anniversaryDate.getSeconds() < 0) {
      if (currentDate.getMinutes() - anniversaryDate.getMinutes() - 1 < 0) {
        setCurrentHour(currentDate.getHours() - anniversaryDate.getHours() - 1);
        setCurrentMinute(
          60 + currentDate.getMinutes() - anniversaryDate.getMinutes() - 1,
        );
      } else {
        setCurrentHour(currentDate.getHours() - anniversaryDate.getHours());
        setCurrentMinute(
          currentDate.getMinutes() - anniversaryDate.getMinutes() - 1,
        );
      }
      setCurrentSecond(
        60 + currentDate.getSeconds() - anniversaryDate.getSeconds(),
      );
    } else {
      if (currentDate.getMinutes() - anniversaryDate.getMinutes() < 0) {
        setCurrentHour(currentDate.getHours() - anniversaryDate.getHours() - 1);
        setCurrentMinute(
          60 + currentDate.getMinutes() - anniversaryDate.getMinutes(),
        );
      } else {
        setCurrentHour(currentDate.getHours() - anniversaryDate.getHours());
        setCurrentMinute(
          currentDate.getMinutes() - anniversaryDate.getMinutes(),
        );
      }
      setCurrentSecond(currentDate.getSeconds() - anniversaryDate.getSeconds());
    }
  }, 1000);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-foreground">
      <h1 className="text-3xl font-bold text-gray-700">Мы вместе уже:</h1>
      <div className="flex items-center gap-3 my-10 px-5 text-5xl text-primary font-extrabold text-center">
        {currentDay || <Skeleton className="my-10 h-12 w-[50px] bg-primary" />}{" "}
        дней :{" "}
        {currentHour < 25 ? (
          currentHour
        ) : (
          <Skeleton className="my-10 h-12 w-[50px] bg-primary" />
        )}{" "}
        часов :{" "}
        {currentMinute < 61 ? (
          currentMinute
        ) : (
          <Skeleton className="my-10 h-12 w-[50px] bg-primary" />
        )}{" "}
        минут :{" "}
        {currentSecond < 61 ? (
          currentSecond
        ) : (
          <Skeleton className="my-10 h-12 w-[50px] bg-primary" />
        )}{" "}
        секунд
      </div>
      <h1 className="text-3xl px-5 font-bold text-gray-700">
        ...и счетчик увеличивается {"<3"}
      </h1>
      <Button className="mt-10" onClick={() => router.push("/categories")}>
        На следующую страницу <ArrowRight />
      </Button>
    </div>
  );
}