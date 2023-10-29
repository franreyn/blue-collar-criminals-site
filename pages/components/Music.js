import React from 'react'

export default function Music() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-16">
        <h2 className="text-4xl pb-8">Listen Now</h2>
        <iframe 
          style={{borderRadius: "0px"}} 
          src="https://open.spotify.com/embed/artist/4sl5RIBEpUL6Q1F14fJIuN?utm_source=generator" 
          width="100%" 
          height="600" 
          frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>

    </div>
  )
}
