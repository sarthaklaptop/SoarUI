import { Button } from "@/components/ui/button";
import { IoMailOutline } from "react-icons/io5";

export default function ButtonDemo() {
  return (
    <Button className="font-semibold bg-gray-100 text-black group">
      <IoMailOutline />
      Mail
    </Button>
  );
}
