'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ButtonDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className={`font-semibold text-white flex items-center bg-black dark:bg-white dark:text-black ${
        isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? <AiOutlineLoading3Quarters className="animate-spin mr-2" /> : "Button"}
    </Button>
  );
}
