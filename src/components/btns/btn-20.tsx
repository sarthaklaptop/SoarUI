import { FaPlay, FaPause } from "react-icons/fa";

export default function ButtonDemo() {
  return (
    <div className="flex items-center justify-center rounded-full bg-gray-900">
      <label className="relative flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full cursor-pointer">
        {/* Checkbox Input */}
        <input
          type="checkbox"
          className="absolute h-0 w-0 opacity-0 peer"
        />
        {/* Play Icon */}
        <FaPlay className="absolute text-white text-3xl transition-transform duration-300 peer-checked:hidden scale-100 opacity-100" />
        {/* Pause Icon */}
        <FaPause className="absolute hidden text-white text-3xl transition-transform duration-300 peer-checked:block peer-checked:scale-100 peer-checked:opacity-100 scale-0 opacity-0" />
      </label>
    </div>
  );
}
