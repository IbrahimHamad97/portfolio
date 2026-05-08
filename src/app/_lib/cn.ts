import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind-friendly className composer.
 *
 * Why this exists:
 * - `clsx` handles conditional classes ergonomically.
 * - `tailwind-merge` resolves conflicts like "px-4 px-6" to the last one.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

