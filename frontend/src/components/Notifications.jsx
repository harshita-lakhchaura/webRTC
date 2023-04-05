import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'

const Notifications = () => {

  const {answerCall, call, callAccepted}=useContext(SocketContext)

  return (
    <div>
      {console.log(call)}
      {call.isReceivingCall && !callAccepted && (
        <div className='flex justify-center text-2xl mt-4'>
          {console.log('notify')}
          <h1>{call.name} is calling...</h1>
          <button onClick={answerCall} className='mt-2 flex items-center justify-center mb-6 rounded-md -mt-4 ml-4 p-2 bg-blue-300	hover:bg-blue-400 shadow-xl'>Answer</button>
        </div>
      )}
    </div>
  )
}

export default Notifications