import Image from "next/image";

export default function Banner() {
	return (
    <div className="text-white">
      <div>
        <Image src={"/images/bannerbg.jpg"} 
          className="w-full h-full bg-cover" width="800" height="800" />
      </div>
      <div 
          className="md:absolute left-1/2 bottom-[4vh] md:-translate-x-[50%] w-full text-center bg-black md:bg-transparent" 
          >
        <h1>
          <span className="block text-4xl md:text-7xl">Arizona Hardcore</span>
          <span className="block text-2xl md:text-4xl">Since 2007</span>
        </h1>
      </div>
    </div>
	);
}
