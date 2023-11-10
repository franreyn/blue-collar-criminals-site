import Image from "next/image";

export default function Banner() {
	return (
    <div className="text-white">
      <div>
        <Image src={"/images/bannerbg2.jpg"} 
          className="w-full h-full bg-cover" width="800" height="800" />
      </div>
      <div 
          className="xl:absolute xl:left-1/2 xl:bottom-[4vh] xl:-translate-x-[50%] xl:bg-transparent w-full text-center bg-black" 
          >
        <h1>
          <span className="block text-4xl md:text-7xl">Arizona Hardcore</span>
          <span className="block text-2xl md:text-4xl">Since 2007</span>
        </h1>
      </div>
    </div>
	);
}
