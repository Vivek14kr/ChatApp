import React from 'react'
import { Avatar } from "@mui/material";
import "./SidebarChat.css"
import { useEffect } from 'react';
import { useState } from 'react';
function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState("")
    useEffect(()=>{
    setSeed(Math.floor(Math.random()* 5000))
    },[])

    const createChat = ()=>{

    }
  return !addNewChat ?  (
    <div className='sidebarChat'>
       <Avatar src={`https://avatars.dicebear.com/
       api/human/${seed}.svg`}/>
       <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message...</p>
       </div>
    </div>
  ):(
    <div onClick={createChat} className="sidebarChat">
   <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat