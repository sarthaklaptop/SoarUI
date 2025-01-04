import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function ButtonDemo() {
  return (
    <Button
      className="rounded-md flex items-center border border-slate-300 py-2 px-4 text-center transition-all shadow-sm hover:shadow-lg text-slate-800 dark:text-slate-200 hover:text-white hover:bg-gray-800 font-semibold hover:border-gray-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:text-white active:bg-slate-800 disabled:opacity-50"
      type="button"
    >
      <FcGoogle />
      Continue with Google
    </Button>
  );
}
