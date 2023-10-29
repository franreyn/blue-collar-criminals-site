import React from 'react';
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-4xl pb-8">About us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div><Image src={"/images/banner.jpg"} width="800" height="800" /></div>
          <div>
            <h3 className="text-2xl font-bold">From Tucson, Arizona</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
