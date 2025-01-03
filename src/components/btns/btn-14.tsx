import { Button } from "@/components/ui/button";
import { SlPrinter } from "react-icons/sl";

export default function ButtonDemo() {
  return (
    <Button className="font-semibold dark:border-[0.4px] dark:border-gray-400 hover:bg-gray-100 hover:text-black group">
      <SlPrinter />
      Print
      <span className="-me-1 ms-3 inline-flex h-5 items-center rounded border border-border px-1  text-[0.7rem] font-medium ">⌘+p</span>
    </Button>
  );
}
