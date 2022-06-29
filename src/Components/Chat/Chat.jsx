import React from 'react'
import "./Chat.css"
import { useEffect } from "react";
import { useState } from "react";

import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import MicIcon from "@mui/icons-material/Mic";

function Chat() {
     const [seed, setSeed] = useState("");
     useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));
     }, []);



     const sendMessage = (e)=>{
        e.preventDefault()
     }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
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
        <p className={`chat__message ${true && `chat__reciever`}`}>
          <span className="chat__name">VIvek Kumar</span>
          Hey Guys
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat