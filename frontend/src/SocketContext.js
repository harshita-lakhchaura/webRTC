import React, { useState, createContext, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'
import { TodayRounded } from '@material-ui/icons';

const SocketContext = createContext();

const socket = io('http://localhost:5000')

const ContextProvider = ({ children }) => {

    const[stream,setStream]=useState(null);
    const[me, setMe]=useState('');
    const[call,setCall]=useState({});
    const[callAccepted, setCallAccepted]=useState(false);
    const[callEnded, setCallEnded]=useState(false)

    const video=useRef();

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true, audio:true})
        .then((currentStream)=>{
            setStream(currentStream);
            video.current.srcObject = currentStream;
        })

        socket.on('me',(id)=> setMe(id))
        socket.on('calluser',({ from, name:callerName, signal})=>{
            setCall({isReceived:true, from, name:callerName, signal})
        })
    },[])

    const answerCall = () => {

    }

    const callUser = () => {

    }

    const leaveCall = () => {

    }
}