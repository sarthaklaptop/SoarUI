'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { FiCopy } from "react-icons/fi";

type CopyButtonProps = {
  componentSource: string;
};

export default function CopyButton({ componentSource }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Copy the component source code to the clipboard
      await navigator.clipboard.writeText(componentSource);

      // Show toast notification
      toast.success("Code copied to clipboard!");

      // Trigger animation
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000); // Reset animation after 1 second
    } catch (error) {
      toast.error("Failed to copy!");
    }
  };

  return (
    <div className="absolute right-2 top-2 transition-opacity">
      <Toaster />
      <Button
        onClick={handleCopy}
        className={`transition-transform ${
          isCopied ? "scale-105" : "scale-100"
        }`}
      >
        <FiCopy/>
      </Button>
    </div>
  );
}
