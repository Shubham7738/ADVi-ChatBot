import React, { useState } from "react";
// import axios from "axios";
import "./ChatBot1.css";

const ChatBot1 = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    // Send user input to the Flask backend
    try {
      // const response = await axios.post("/api/chatbot", { message: inputText });
      // const botResponse = response.data.message;
      // // Add user and bot messages to the chat
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   { text: inputText, sender: "user" },
      //   { text: botResponse, sender: "bot" },
      // ]);
      // // Clear the input field
      // setInputText("");
    } catch (error) {
      console.error("Error sending message to the backend:", error);
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.sender === "user" ? "user-message" : "bot-message"
            }`}
          >
            {message.sender === "user" ? "You: " : "Bot: "}
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <input
          className="message-input"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Ask a question..."
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot1;
