import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ButtonDemo() {
  return (
    <Button className="font-semibold hover:bg-gray-100 hover:text-black group">
      Button{" "}
      <FaArrowRightLong className="ml-2 transform transition-transform group-hover:translate-x-1" />
    </Button>
  );
}
