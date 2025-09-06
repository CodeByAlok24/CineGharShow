import React from 'react'

const Loading = () => {
  return (
<div className="flex justify-center items-center h-[80vh]">
  <div className="relative">
    <div className="h-16 w-16 rounded-full border-4 border-gray-800 animate-spin"></div>
    <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-primary animate-spin"></div>
  </div>
</div>

  )
}

export default Loading