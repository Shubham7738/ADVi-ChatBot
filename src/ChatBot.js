import React, { useState } from "react";

import "./Chatbot.css";

// import axios from "axios"; // Import Axios

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [chatMessages, setChatMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleUserMessage = (message) => {
    const userMessage = {
      message,

      type: "user",
    };

    setChatMessages((prevMessages) => [...prevMessages, userMessage]);

    // Make Axios POST request to an API endpoint to get bot's response

    // axios

    //   .post("YOUR_API_ENDPOINT", { message })

    //   .then((response) => {
    //     const botMessage = {
    //       message: response.data,

    //       type: "bot",
    //     };

    //     setChatMessages((prevMessages) => [...prevMessages, botMessage]);
    //   })

    //   .catch((error) => {
    //     console.error("Error fetching bot response:", error);
    //   });
  };

  return (
    // <div className={`chatbot-container${isOpen ? " open" : ""}`}>
    //   {!isOpen && (
    //     <div className="chatbot-icon" onClick={toggleChatbot}>
    //       <img
    //         src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png"
    //         alt="ChatBot Icon"
    //       />
    //     </div>
    //   )}
    <div className="outer-div">
      <div className="chatbot-container">
        {/* {isOpen
       && 
       ( */}
        <div className="chatbot-window">
          <div className="chat-header">
            <div className="avatar">
              <img
                src="https://askadvi.org/wp-content/uploads/2022/09/ADVi-logo-resize-for-ADVI-website-front-page.png"
                alt="ChatBot Avatar"
              />
            </div>

            {/* <span className="bot-name">ChatBot</span> */}

            {/* <button className="close-btn" onClick={toggleChatbot}>
              Close
            </button> */}
          </div>

          <div className="chat-messages">
            {chatMessages.map((chat, index) => (
              <div
                key={index}
                className={`message-container ${
                  chat.type === "user" ? "user-message" : "bot-message"
                }`}
              >
                <p>{chat.message}</p>
              </div>
            ))}
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Type your message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUserMessage(e.target.value);

                  e.target.value = "";
                }
              }}
            />

            <button
              className="send-btn"
              onClick={() =>
                handleUserMessage(document.querySelector("input").value)
              }
            >
              Send
            </button>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default ChatBot;
