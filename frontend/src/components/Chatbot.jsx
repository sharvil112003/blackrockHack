import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBr7GG4XfwXAwuMPmW06h9ZTi0DDERgoR4");

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(input);
    const response = await result.response;
    const text = await response.text();

    setMessages([...newMessages, { sender: 'bot', text }]);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h2>Chatbot</h2>
          <button onClick={toggleChatbot} className="close-button">X</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input 
            type="text" 
            value={input} 
            onChange={handleInputChange} 
            placeholder="Type a message..." 
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
      
    </div>
  );
};

export default Chatbot;
