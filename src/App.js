import React, { useState } from "react";
// import Chatbot1 from "./ChatBot1";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./App.css";
import Chatbot from "./ChatBot";

const App = () => {
  // const [showChatbot, setShowChatbot] = useState(false);

  // const handleChatbotToggle = () => {
  //   setShowChatbot(!showChatbot);
  // };

  return (
    <>
      <NavBar />
      {/* <div>
        {showChatbot && <Chatbot />}
        <button className="chat-btn" onClick={handleChatbotToggle}></button>
      </div> */}
      {/* <BasicCard /> */}
      {/* <Card /> */}
      <Chatbot />
      <Footer />
    </>
  );
};

export default App;
