import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>
 
      
      <div className="relative mt-6 w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden bg-black">
        <BlurCircle top="-100px" left="-100px" />
        <iframe
          width="100%"
          height="100%"
          src={currentTrailer.url.replace("youtu.be/", "www.youtube.com/embed/")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>

      
      <div className="group grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 transition cursor-pointer"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full 
              object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 h-8 md:w-12 md:h-12
               text-white transform -translate-x-1/2 
               -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection
