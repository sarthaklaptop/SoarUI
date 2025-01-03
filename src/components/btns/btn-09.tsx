import { Button } from "@/components/ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ButtonDemo() {
  return (
    <Button className="bg-black text-white font-semibold dark:bg-white dark:text-black group">
      <FaArrowLeftLong className="ml-2 transform transition-transform group-hover:-translate-x-1" />
      Button{" "}
    </Button>
  );
}
