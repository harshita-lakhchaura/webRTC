import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { AiFillCopy } from 'react-icons/ai'
import { FcEndCall } from 'react-icons/fc'
import { FiPhoneCall } from 'react-icons/fi'
import { SocketContext } from '../SocketContext'
import { useContext } from 'react'
import { useState } from 'react'

const Options = ({ children }) => {

  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('')

  return (
    <div className='bg-white'>
      <div className='flex items-center justify-center mt-10'>
        <div className='bg-white w-[30rem] px-10'>
          <form>
            <div className='text-2xl'>Account Info</div>
            <div className='flex flex-col'>
              <input type="text" name="name" autoComplete='off' className='border-b-2 border-b-black mt-10 outline-none' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              {console.log(me)}
              <CopyToClipboard text={me}>
                <button type="button" className='mt-2 flex items-center justify-center mb-6 mt-4 rounded-md mx-20 p-2 bg-blue-300	hover:bg-blue-400 shadow-xl'>
                  <AiFillCopy size={30} style={{marginRight:'0.5rem'}}/>
                  Copy ID
                </button>
              </CopyToClipboard>
            </div>
          </form>
        </div>
        <div className='bg-white w-[30rem] px-10'>
          <form>
            <div className='text-2xl'>Make a call</div>
            <div className='flex flex-col'>
              <input type="text" name="id" autoComplete='off' className='border-b-2 border-b-black mt-10  outline-none' placeholder='Id to call'  onChange={(e) => setIdToCall(e.target.value)} value={idToCall} />
              {callAccepted && !callEnded ?
                (
                  <button onClick={leaveCall} type='button' className='mt-2 flex items-center justify-center mb-6 mt-4 rounded-md mx-20 p-2 bg-blue-300	hover:bg-blue-400'>
                    <FcEndCall size={20}  style={{marginRight:'0.5rem'}}/>
                    End Call
                  </button>
                ) : (
                  <button onClick={() => callUser(idToCall)} type='button' className='mt-2 flex items-center justify-center mb-[1.85rem] mt-4 rounded-md mx-20 p-2 bg-blue-300	hover:bg-blue-400 shadow-xl'>
                    <FiPhoneCall size={20}  style={{marginRight:'0.5rem'}}/>
                    Call
                  </button>
                )}
            </div>
          </form>
        </div>
      </div>
      {children}
    </div>

  )
}

export default Options