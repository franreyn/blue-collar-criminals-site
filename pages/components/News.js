import React from 'react';
import Image from "next/image";

const newsFeed = [
  {
    heading: 'This is a heading for a news entry',
    text: "Lorem ipsum dolor sit amet, nec decore democritum id, facilis adversarium quo ea. An inani salutandi usu, vel cu eirmod vocibus, mutat ubique abhorreant est id. Cum mutat labores senserit cu, mea ne mucius albucius. Id labore percipitur pri. Vis alterum noluisse an. Impetus oporteat molestiae ut nec, luptatum maluisset eam ea, in pro omnis vitae.",
    image: 'https://via.placeholder.com/800x800',
  },
  {
    heading: 'This is a heading for a news entry 2',
    text: "Lorem ipsum dolor sit amet, nec decore democritum id, facilis adversarium quo ea. An inani salutandi usu, vel cu eirmod vocibus, mutat ubique abhorreant est id. Cum mutat labores senserit cu, mea ne mucius albucius. Id labore percipitur pri. Vis alterum noluisse an. Impetus oporteat molestiae ut nec, luptatum maluisset eam ea, in pro omnis vitae.",
    image: 'https://via.placeholder.com/800x800',
  }
];

export default function News() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl pb-4">Latest news</h2>
        <div className="">
          {newsFeed.map((entry, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <div className="">
                <Image src={entry.image} height={500} width={500} />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl">{entry.heading}</h3>
                <p className="text-lg leading-snug">{entry.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
