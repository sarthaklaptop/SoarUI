"use client";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeToggle } from "../theme-toggle";

export default function NavBar() {
  return (
    <>
      <div className="navbar my-10 flex justify-between w-11/12 mx-auto dark:foreground">
        <div className="">

          <Link href="/" className="text-4xl cherryBombOne shadow-2xl">
            <p className="">SoarUI</p>
          </Link>
          
        </div>

        <div className="flex gap-4">
          <ThemeToggle/>
          <Link 
            href="https://github.com/sarthaklaptop/SoarUI"
            className="flex items-center border-2 px-2 py-1  rounded-xl justify-center dark:bg-white dark:text-black text-white bg-black"
          >
            <GitHubIcon />
            
            <span className="font-bold p-1 flex items-center justify-center">Github</span>
          </Link>
        </div>
      </div>
    </>
  );
}