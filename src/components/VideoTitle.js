import React from 'react'


const VideoTitle = ({title, overview}) => {
    
  return (
    <div className='w-screen aspect-video pt-{20%}   text-white bg-gradient-to-r from-black pt-36 px-24 absolute'>
      
      <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
      <div className='my-4 md:my-0'>
        <button className='bg-white text-black py-1 md:py-4 px-3 md:px-16 text-xl rounded-md  hover:bg-opacity-70'>▶ Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-16 m-2 text-xl rounded-md bg-opacity-50 hover:bg-opacity-70'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
