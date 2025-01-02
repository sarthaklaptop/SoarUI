"use client";
<<<<<<< HEAD
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import ThemeSwap from "../ThemeBtn";

export default function NavBar() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="navbar bg-base-100 mb-20 justify-around">
        <div className="navbar-start">

          <Link href="/" className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>

        <div className="navbar-end ">
          <ThemeSwap handleOnClick={changeTheme} />
=======
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeToggle } from "../theme-toggle";

export default function NavBar() {
  return (
    <>
      <div className="navbar mb-20 justify-around w-11/12 mx-auto dark:foreground">
        <div className="navbar-start">

          <Link href="/" className="text-4xl cherryBombOne shadow-2xl">
            <p className="">SoarUI</p>
          </Link>
        </div>

        <div className="navbar-end flex gap-4">
          <ThemeToggle/>
          <Link 
            href="https://github.com/sarthaklaptop/SoarUI"
            className="flex items-center border-2 px-2 py-1  rounded-xl justify-center dark:bg-white dark:text-black text-white bg-black"
          >
            <GitHubIcon />
            
            <span className="font-bold p-1 flex items-center justify-center">Github</span>
          </Link>
>>>>>>> e3a68ec (Updared Theme to ShadCN Next theme)
        </div>
      </div>
    </>
  );
}