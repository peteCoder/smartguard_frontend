import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const navItems = [
    {
        id: 1,
        linkName: "Home",
        path: "/"
    },
    {
        id: 2,
        linkName: "About",
        path: "/about"
    },
    {
        id: 3,
        linkName: "Checker Tool",
        path: "/checker-tool"
    },
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
