export default function ButtonDemo() {
    return (
      <button className="group relative font-bold overflow-hidden border border-gray-800 bg-white px-5 py-4 text-sm text-gray-800">
        <span className="relative z-10 transition-colors duration-600 ease-[cubic-bezier(0.48,0,0.12,1)] group-hover:text-white">
          Hover This
        </span>

        <span className="absolute inset-0 -bottom-[50%] bg-black transition-transform duration-700 ease-[cubic-bezier(0.48,0,0.12,1)] origin-bottom group-hover:scale-y-[2] group-hover:skew-y-[9.3deg] group-hover:origin-bottom-center scale-y-0 skew-y-[9.3deg] z-[5]" />
      </button>
    );
  }
  