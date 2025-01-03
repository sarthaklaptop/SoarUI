import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ButtonDemo() {
  return (
    <Button disabled className="font-semibold bg-gray-100 text-black flex items-center">
      <AiOutlineLoading3Quarters className="animate-spin mr-2" />
      Button
    </Button>
  );
}
