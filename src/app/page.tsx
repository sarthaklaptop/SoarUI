"use client";

import { motion } from "framer-motion";
import { CiLocationArrow1 } from "react-icons/ci";


export default function Home() {
  return (
    <div className="flex w-6/12 mx-auto flex-col">
      <div className="py-14 flex gap-4 flex-col items-center justify-center">
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.95,
            // y: 100,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.95,
          }}
          className="text-5xl font-bold leading-10"
        >
          Build Modern UIs Faster with Tailwind CSS & Next.js
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.5, // Delays the subtitle animation slightly
          }}
          className="font-bold text-gray-400 dark:text-gray-500 text-lg leading-7"
        >
          RapidUI offers a collection of sleek, responsive, and ready-to-use
          components. Copy, paste, and customize with ease—no setup required.
          Perfect for developers seeking speed, simplicity, and elegance.{" "}
          <span className="underline dark:text-gray-500 hover:underline-offset-4 decoration-cyan-400 text-gray-300">
            Free and open-source!
          </span>
        </motion.p>
      </div>

      <div className="flex flex-col gap-4">
        <motion.p
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.5, // Delays the subtitle animation slightly
          }}
          className="font-bold text-lg text-start"
        >
          Components
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            // y: 100,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.95,
            delay: 1.3
          }}
          className="flex flex-col"
        >
          <div className="cursor-pointer w-full border-2 border-gray-800 rounded-lg flex items-center justify-between p-4 hover:bg-slate-900 transition-all duration-150 hover:scale-105">
            <p className="font-bold text-lg">Buttons</p>
            <CiLocationArrow1 className="hover:scale-125 transition-all hover:duration-150 text-2xl"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
