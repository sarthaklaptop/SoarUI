"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2 ">
      {theme === "dark" ? (
        <button
          type="button"
          className="inline-flex items-center gap-x-2 py-2 px-3 bg-gray-800 rounded-full text-sm text-white hover:bg-gray-700 focus:outline-none font-bold"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-5 w-5" />
          Light Mode
        </button>
      ) : (
        <button
          type="button"
          className="inline-flex items-center gap-x-2 py-2 px-3 bg-gray-200 rounded-full text-sm text-gray-800 hover:bg-gray-300 focus:outline-none font-bold"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-5 w-5" />
          Dark Mode
        </button>
      )}
    </div>
  );
}
