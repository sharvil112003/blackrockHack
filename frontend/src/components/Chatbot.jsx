import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import "../components/componentCSS/Chatbot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons"; // Import chat icon from Font Awesome

const genAI = new GoogleGenerativeAI("AIzaSyBr7GG4XfwXAwuMPmW06h9ZTi0DDERgoR4");

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = await response.text();

      setMessages([...newMessages, { sender: "bot", text }]);
    } catch (error) {
      console.error("Error generating bot response:", error);
    }
  };

  return (
    <div className="chatbot-container">
      <button
        onClick={toggleChatbot}
        className={`chatbot-icon ${isOpen ? "highlight" : ""}`}
      >
        <FontAwesomeIcon icon={faComment} />
      </button>
      <div
        className={`chatbot card position-fixed shadow ${isOpen ? "open" : "d-none"
          }`}
      >
        <div className="card-header bg-primary text-white">
          Chat with KrishiSathi
          <button
            onClick={toggleChatbot}
            className="btn-close float-end"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body" id="chat-widget-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <strong>{message.sender === "user" ? "You:" : "Bot:"}</strong>{" "}
              {message.sender === "bot" ? (
                <ReactMarkdown>{message.text}</ReactMarkdown>
              ) : (
                message.text
              )}
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button onClick={handleSend} className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
