import React from 'react';
import { SiYoutube, SiInstagram, SiFacebook } from "react-icons/si";
import Image from 'next/image';

const socialMedia = 
[
  {
    // Instagram
    href: "https://www.instagram.com/bluecollarcriminalsaz/?hl=en",
    color: "#FCAF45",
    icon: "SiInstagram"
  },    
  {
    // Facebook
    href: "https://www.facebook.com/BlueCollarCriminalsAZ/",
    color: "#4267B2",
    icon: "SiFacebook"
  },
  {
    // Youtube
    href: "https://www.youtube.com/channel/UCuTAm687FkwfbHwcrogLHfg",
    color: "#FF0000",
    icon: "SiYoutube"
  }  
]

const icons = {
  SiYoutube: SiYoutube,
  SiInstagram: SiInstagram,
  SiFacebook: SiFacebook
};

const imageFeed = [
  {
    url: "/images/social-feed/1.jpg"
  },
  {
    url: "/images/social-feed/2.jpg"
  },
  {
    url: "/images/social-feed/3.jpg"
  },
  {
    url: "/images/social-feed/4.jpg"
  },
  {
    url: "/images/social-feed/5.jpg"
  },  
  {
    url: "/images/social-feed/1.jpg"
  },
  {
    url: "/images/social-feed/2.jpg"
  },
  {
    url: "/images/social-feed/3.jpg"
  }
]

export default function Social() {
  return (
    <section className="bg-slate-100">
      <div>
        
        <h2 className="text-2xl font-bold">Follow us on Social Media!</h2>
        
        {/* Social media icons*/}
        <ul className={
            `flex flex-wrap justify-center items-center
           text-black max-w-4xl mx-auto py-4 gap-4 md:gap-2`}>
          {socialMedia.map((app, index) => (
            <a href={app.href} key={index} target="blank" rel="noopener noreferrer">
              <li 
                style={{ backgroundColor: app.color }} 
                className={`text-white p-2 transition-colors duration-200 rounded-lg`}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'black'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = app.color}>
                 {icons[app.icon] && React.createElement(icons[app.icon], {className: "text-6xl md:text-4xl mx-auto"})}
              </li>
            </a>
          ))}
        </ul>

        {/* Image gallery */}
        <div className={
          `grid grid-cols-2 md:grid-cols-4 py-4 gap-2`}>
          {imageFeed.map((image, index) => {
            return (
              <div key={index} className="">
                <Image src={image.url} width={800} height={800}/>
              </div>
            )
          })}
        </div>
       
      </div>
    </section>
  )
}
