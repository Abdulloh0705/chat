import { useState } from "react";
import "../header/header.scss";
import Message from "../message/Message";

const Header = () => {
  const [messages, setMessages] = useState([]);
  
  return (
    <div className="header">
      <div className="container">
        <Message userName="Alex" img="boys.png" messages={messages} setMessages={setMessages}/>
        <Message  userName="Vika" img="grils.png" messages={messages} setMessages={setMessages}/>
      </div>
    </div>
  );
};

export default Header;
