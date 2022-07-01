import React from 'react'
import { Avatar } from "@mui/material";
import "./SidebarChat.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { Link} from "react-router-dom";
import db from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
function SidebarChat({ id, name, addNewChat}) {

  const [messages, setMessages] = useState("")
  useEffect(()=>{
  if (id){
    db.collection("rooms").doc(id).collection("messages")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot)=>setMessages(snapshot.docs.map((doc)=>doc.data())))
  }
  }, [id])

   const { room, setRoom } = useAuth();
    const [seed, setSeed] = useState("")
    useEffect(()=>{
    setSeed(Math.floor(Math.random()* 5000))
    },[])

    const createChat = ()=>{
   const roomName = prompt("Please enter name for chat room");

   if (roomName){
      db.collection("rooms").add({
        name:roomName
      })
   }
    }

    const handleClick = ()=>{
     setRoom("yup")
    }
  return !addNewChat ? (
    <Link
      to={`/rooms/${id}`}
      onClick={() => {
        handleClick();
      }}
    >
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
      <hr />
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2 style={{ cursor: "pointer" }}> Click here to Add new Chat Room</h2>
    </div>
  );
}

export default SidebarChat