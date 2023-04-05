import React from 'react'
import { makeStyles } from '@material-ui/core'
import { SocketContext } from '../SocketContext'
import { useContext } from 'react'

const VideoPlayer = () => {

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)

  return (
    <div className='flex items-center justify-center mt-10'>
      {
        stream &&
        (<div className='h-[30rem] w-[35rem] bg-white mr-10'>
          <div className='text-2xl font-bold px-6 py-6'>{name || 'Name'}</div>
          <video playsInline muted ref={myVideo} autoPlay className='w-[30rem] ml-10'></video>
        </div>)
      }
      {
        callAccepted && !callEnded &&
      (<div className='h-[30rem] w-[45rem] bg-white mr-10'>
        <div className='text-2xl font-bold px-6 py-6'>{call.name || 'Name'}</div>
        <video playsInline muted ref={userVideo} autoPlay className='w-[550px]'></video>
      </div>)
      }
    </div>
  )
}

export default VideoPlayer