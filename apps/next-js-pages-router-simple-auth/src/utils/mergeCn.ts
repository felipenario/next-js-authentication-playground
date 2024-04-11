import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function mergeCn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
