import React from 'react'


const VideoTitle = ({title, overview}) => {
    
  return (
    <div className='w-screen aspect-video pt-{20%}   text-white bg-gradient-to-r from-black pt-36 px-24 absolute'>
      
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div className='my-4'>
        <button className='bg-white text-black p-4 px-16 text-xl rounded-md  hover:bg-opacity-70'>▶ Play</button>
        <button className='bg-gray-500 text-white p-4 px-16 m-2 text-xl rounded-md bg-opacity-50 hover:bg-opacity-70'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
