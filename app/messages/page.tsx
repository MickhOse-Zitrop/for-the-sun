"use client";

import { ArrowLeft, Mail } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function MessagesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex gap-8 flex-col items-center justify-center bg-primary-foreground">
      <Drawer>
        <DrawerTrigger asChild>
          <Mail className="cursor-pointer text-gray-700" size={120} />
        </DrawerTrigger>
        <DrawerContent>
          <div className="my-5 mx-auto w-full max-w-sm bg-primary-foreground rounded-xl">
            <DrawerHeader>
              <DrawerTitle>Любовь моя..</DrawerTitle>
              <DrawerDescription>
                Эта валентинка для тебя. Мне хочется сказать тебе о том, как
                сильно я тебя люблю, и то, что ничто и никто не может это
                исправить. Какие бы трудности или ссоры не происходили, я всегда
                буду любить тебя так же сильно, как в тот день, когда признался
                тебе в этом. Ты самая невероятная, самая милая, самая нежная,
                самая добрая, самая любящая и самая любимая. Таких
                &quot;самая&quot; можно сказать еще тысячи и миллионы раз, и
                даже если все их сказать, ты будешь намного лучше этих слов. Я
                очень скучаю по тебе, родная, и каждый день думаю о том, как
                приеду, крепко обниму и поцелую. Ты самое прекрасное, что было,
                будет и есть в моей жизни. Я тебя люблю, мышка моя ❤
              </DrawerDescription>
            </DrawerHeader>
          </div>
        </DrawerContent>
      </Drawer>
      <Button onClick={() => router.back()}>
        <ArrowLeft /> На предыдущую страницу
      </Button>
    </div>
  );
}