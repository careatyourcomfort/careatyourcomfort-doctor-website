"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type BlogImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function BlogImage({ src, alt, className, priority }: BlogImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-linear-to-br from-teal-600 to-cyan-600",
          className
        )}
      >
        <BookOpen className="size-10 text-white/90" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={700}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}