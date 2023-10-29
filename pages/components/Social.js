import React from 'react';
import { SiYoutube, SiInstagram, SiFacebook } from "react-icons/si";

export default function Social() {
  return (
    <div className="bg-slate-300">
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-2xl font-bold">Follow us on Social Media!</h2>
        <ul className={
          `flex flex-wrap justify-center items-center
          text-black max-w-4xl mx-auto py-4 gap-8`
        }>
          <li className="bg-zinc-400 p-4">
            <SiYoutube className="text-6xl mx-auto text-white" />
          </li>
          <li className="bg-zinc-400 p-4">
            <SiInstagram className="text-6xl mx-auto text-white" />
          </li>
          <li className="bg-zinc-400 p-4">
            <SiFacebook className="text-6xl mx-auto text-white" />
          </li>
        </ul>
       
      </div>
    </div>
  )
}
