import React from 'react'
import "./Chat.css"
import { useEffect } from "react";
import { useState } from "react";
import firebase from "firebase/app";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import "firebase/firestore";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import db from "../../firebase";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Chat() {

  const {currentUser} = useAuth()
  const {roomId} = useParams();

  const [roomName, setRoomName]= useState("")
  const [input, setInput] = useState("")
     const [seed, setSeed] = useState("");

     const [messages, setMessages] = useState([])

     useEffect(()=>{
   if (roomId){
    db.collection("rooms").doc(roomId).onSnapshot(snapshot =>(
      setRoomName(snapshot.data().name)))

      db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot=>(
        setMessages(snapshot.docs.map(doc => doc.data()))
      ))
   }
     }, [roomId])
     useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));
     }, []);



     const sendMessage = (e)=>{
        e.preventDefault()
db.collection("rooms").doc(roomId).collection(
  "messages").add({
    message:input,
    name: currentUser.displayName,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  })
        setInput("")
     }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
         
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message 
          ${message.name === currentUser.displayName && `chat__reciever`}`}>
            <span className="chat__name">{message.name}r</span>
           {message.message}
            <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat