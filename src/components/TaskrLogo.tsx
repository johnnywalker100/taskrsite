import Image from "next/image";
import { cn } from "@/lib/utils";

type TaskrLogoProps = {
  className?: string;
};

export function TaskrLogo({ className = "w-8 h-8" }: TaskrLogoProps) {
  return (
    <Image
      src="/ChatGPT_Image_Dec_4__2025__12_21_24_AM-removebg-preview.png"
      alt="taskr logo"
      width={200}
      height={200}
      className={cn("rounded-xl", className)}
      priority
    />
  );
}
