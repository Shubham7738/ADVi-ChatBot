import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./card.css";
import "./ChatBot1.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
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
    <div className="card-container">
      <Card
        xl={{ minWidth: 275, border: "1px solid #ccc", borderRadius: "8px" }}
      >
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
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
        </CardContent>
      </Card>
    </div>
  );
}
