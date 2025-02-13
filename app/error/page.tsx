"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";

export default function ErrorPage() {
  function Query() {
    let query = useSearchParams().get("query");

    if (!query?.includes("?")) {
      query = `${query}?`;
    }

    return query;
  }

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center bg-primary-foreground">
      <h1 className="text-3xl">
        Хмм...
        <Suspense>
          <Query />
        </Suspense>
      </h1>
      <h1 className="text-2xl">Я обязательно отвечу на этот вопрос лично)</h1>
      <Button onClick={() => router.back()}>
        <ArrowLeft /> К поиску
      </Button>
    </div>
  );
}