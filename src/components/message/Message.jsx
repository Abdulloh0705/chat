import { useState } from "react";
import { IoSend } from "react-icons/io5";

const Message = ({ userName, img, messages, setMessages }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, userName }]);
      setMessage("");
    }
  };

  const header_item_text = [{ id: 1, ism: "", Alextext: "" }];
  const header_item_text2 = [{ id: 2, ism: "", Vikatext: "" }];
  
  

  return (
    <div className="header__main-box">
      <div className="all">
        <div className="img">
          <img src={img} alt="User" className="boys_img" />
        </div>
        <div className="esse">
          <h2 className="title">{userName}</h2>
          <p className="online">Онлайн</p>
        </div>
      </div>

      {/* Xabarlarni ko'rsatish */}
      <div className="messages-container">
        {messages.map((msg, index) => (
            <div key={index} className="message-item1">
              <p className={`item_text  ${msg.userName == userName ? "messaAbdullo" : ""}`}>{msg.text}</p>
            </div>
        ))}
      </div>

      {/* Header elementlarni ko‘rsatish */}
      <header>
        {header_item_text.map((item) => (
          <div key={item.id}>
            <h4>{item.ism}</h4>
            <p>{item.Alextext}</p>
          </div>
        ))}
      </header>
      <header>
        {header_item_text2.map((item) => (
          <div key={item.id}>
            <h4>{item.ism}</h4>
            <p>{item.Vikatext}</p>
          </div>
        ))}
      </header>

      {/* Xabar yuborish */}
      <div className="input-container">
        <div className="input-box">
          <label>
            <input
              type="text"
              placeholder="xabar yozing"
              value={message}
              onChange={handleInputChange}
            />
          </label>
          <button className="add_btn" onClick={handleSendMessage}>
            <div className="send">
              <IoSend />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
