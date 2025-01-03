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
      await navigator.clipboard.writeText(componentSource);

      toast.success("Code copied to clipboard!");

      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch {
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
