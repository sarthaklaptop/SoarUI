import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button className="font-semibold hover:bg-gray-100 hover:text-black group">
        Cancel
      </Button>
      <Button className="bg-black text-white font-semibold dark:bg-white dark:text-black">
        Submit
      </Button>
    </div>
  );
}
