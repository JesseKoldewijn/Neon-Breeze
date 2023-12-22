import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * The `cn` function is a TypeScript function that merges multiple class values into a single string.
 * @param {ClassValue[]} inputs - The `inputs` parameter is a rest parameter that allows you to pass in
 * multiple arguments of type `ClassValue`. The `ClassValue` type can be any valid CSS class name or an
 * object that maps class names to boolean values.
 * @returns The `cn` function is returning the result of merging the class names passed as arguments
 * using the `clsx` function and then merging the result with the Tailwind CSS classes using the
 * `twMerge` function.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
