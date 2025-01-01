"use client";
import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme?: string;
  changeTheme?: (nextTheme?: string) => void;
}
export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Ensure that code only runs on the client side
    if (typeof window !== "undefined") {
      // Get the theme from localStorage if available
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        // Fallback to "light" if no theme is saved
        setTheme("light");
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    // Ensure that the theme is saved to localStorage when it changes
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const changeTheme = (event?: any) => {
    const nextTheme: string | null = event?.target?.value || null;
    if (nextTheme) {
      setTheme(nextTheme);
    } else {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
