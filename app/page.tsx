"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [tip, setTip] = useState<string>("");
  const [password, setPassword] = useState<number[]>([]);
  const [handler, setHandler] = useState<boolean>(false);

  const router = useRouter();

  const handlePasswordChange = (number: number) => {
    if (password.length < 4) {
      setPassword([...password, number]);
    } else {
    }
  };

  useEffect(() => {
    if (password.length === 4) {
      setTip(
        password.join("") === "1010"
          ? "ЙЕЕЕЕЕЕЕЕ"
          : "Неправильный пароль. Подсказка: годовщина",
      );
      setHandler(true);
      if (password.join("") === "1010") {
        setTimeout(() => router.replace("/search"), 550);
      } else {
        setTimeout(() => setPassword([]), 350);
      }
    }
  }, [password, router]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-primary-foreground">
      <div className="absolute z-10 flex flex-col gap-3 items-center">
        <h1 className="text-2xl font-bold text-white">Введи пароль</h1>
        <p
          className={cn(
            "text-xl font-medium translate-y-4 transition-all duration-150 ease-in-out",
            handler && "translate-y-0",
            password.join("") === "1010" ? "text-green-500" : "text-red-600",
          )}
        >
          {tip}
        </p>
        <div className="flex gap-5 mb-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-5 w-5 rounded-full border-2 transition-all duration-150 ease-in-out",
                i + 1 <= password.length && "bg-white",
                password.length === 4 &&
                  password.join("") !== "1010" &&
                  "animate-bounce",
              )}
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => handlePasswordChange(i + 1)}
              variant="ghost"
              size="icon"
              className="border-2 text-white text-lg rounded-full"
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handlePasswordChange(0)}
            className="col-start-2 border-2 text-white text-lg rounded-full"
          >
            0
          </Button>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="./foreground.jpg"
        className="blur brightness-50 absolute h-full w-full object-cover"
        alt={"photo"}
      />
    </div>
  );
}
