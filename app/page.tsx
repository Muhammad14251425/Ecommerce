import Image from "next/image";
import Hero from "./components/Hero";
import Below from "./components/Below";
import MoreBelow from "./components/MoreBelow";

export default function Home() {
  return (
    <div>
      <Hero />
      <Below />
      <MoreBelow />
      {/* <div className="max-h-[300px] max-w-[600px] w-[300px] h-[300px] hover:bg-red-200 bg-red-100 hover:w-[600px] hover:[h-300px] transition-all duration-500 ease-in-out">

      </div> */}
      {/* <div className="relative">
        <div className="absolute w-[300px] h-[300px] bg-red-100 transition-all duration-500 ease-in-out"></div>
        <div className="w-[300px] h-[300px] hover:w-[600px] hover:h-[300px] bg-red-200 transition-all duration-500 ease-in-out"></div>
      </div> */}
      {/* <div className="w-[300px] h-[300px] bg-gradient-to-r from-red-100 to-red-100 hover:from-red-100 hover:to-red-200 hover:w-[600px] transition-all duration-500 ease-in-out"></div> */}
      {/* <div className="relative w-[300px] h-[300px] bg-red-100 hover:w-[600px] transition-all duration-500 ease-in-out">
  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-400 opacity-0 place-items-center hover:opacity-100 transition-all duration-500 ease-in-out"></div>
</div> */}
      {/* <div className=" relative group max-h-[300px] max-w-[600px] w-[300px] h-[300px] hover:bg-red-500 bg-red-100 hover:w-[600px] hover:[h-300px] transition-all duration-500 ease-in-out -z-20">
            <div className="relative max-h-[300px] max-w-[600px] w-[300px] h-[300px] bg-blue-100 hover:w-[600px] hover:[h-300px] transition-all duration-500 ease-in-out z-20">

            </div>
      </div> */}

    </div>
  );
}
