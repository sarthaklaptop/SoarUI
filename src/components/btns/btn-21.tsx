import { IoHomeOutline } from "react-icons/io5";
import { IoTerminalOutline } from "react-icons/io5";
import { RiTwitterLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";


export default function ButtonDemo() {
    const reactions = [
      { emoji: <IoHomeOutline/>},
      { emoji: <IoTerminalOutline/>},
      { emoji: <RiTwitterLine/>},
      { emoji: <IoLogoGithub/>},
    ];
  
    return (
      <div className="flex justify-start items-center gap-2 p-2 text-2xl rounded-full bg-slate-900 shadow-xl z-10 hover:scale-x-105 transition-all duration-300">
        {reactions.map((reaction, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center cursor-pointer p-2 px-3 text-white rounded-full bg-slate-900 hover:scale-125 hover:-translate-y-5 transition-all duration-300"
          >
            {reaction.emoji}
          </div>
        ))}
      </div>
    );
  }
  