import React, { useRef, useState, useEffect } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';
import Navbar from './components/Navbar/Navbar';
import { companyinfo } from './components/companyinfo';
import Home from './components/Home/Home';
import Ds from './components/DRstages/Ds';
import Pd from './components/PredictDR/Pd';
import C from './components/Caretips/C';
import A from './components/AboutUs/A';

import Chatbot from './components//Chatbot'; 
const App = () => {
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: 'model', text: companyinfo },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== 'Thinking...'),
        { role: 'model', text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || 'Something went wrong!');
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [chatHistory]
);


  

  return (
    <div className="bg-orange-600 text-white min-h-screen">
     
      <div className="z-50 relative">
        <Navbar />
      </div>

      
      <div id="h" className="scroll-mt-16 md:scroll-mt-24">
        <Home />
      </div>
      <div id="d" className="scroll-mt-14 md:scroll-mt-24">
        <Ds />
      </div>
      <div id="p" className="scroll-mt-14 md:scroll-mt-24">
        <Pd />
      </div>
      <div id="c" className="scroll-mt-14 md:scroll-mt-24">
        <C />
      </div>
      <div id="a" className="scroll-mt-14 md:scroll-mt-24">
        <A />
      </div>

      
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
        className="fixed bottom-[30px] right-[35px] border-none h-[50px] w-[50px] flex items-center justify-center cursor-pointer rounded-full bg-orange-600 text-white z-40"
      >
        {showChatbot ? '💬' : '💬'}
      </button>

      
      {showChatbot && (
  <div
    className="fixed inset-0 sm:inset-auto sm:bottom-[90px] sm:right-[35px] sm:w-[340px] sm:h-[400px] bg-white text-black rounded-none sm:rounded-[15px] shadow-2xl z-50 flex flex-col overflow-hidden"
  >
    {/* Chat Header */}
    <div className="flex items-center justify-between px-5 py-3 bg-orange-600 text-white">
      <div className="flex items-center gap-2">
        <ChatbotIcon />
        <h2 className="font-bold">Chatbot</h2>
      </div>
      <button
        onClick={() => setShowChatbot(false)}
        className="text-2xl font-bold hover:text-orange-200"
      >
        ✕
      </button>
    </div>

    {/* Chat Body */}
    <div
      ref={chatBodyRef}
      className="flex-1 flex flex-col gap-4 overflow-y-auto overscroll-contain px-4 py-3 bg-gray-50"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div className="flex items-start gap-2">
        <ChatbotIcon />
        <p className="bg-orange-100 text-black px-4 py-2 rounded-xl rounded-bl-none max-w-[75%]">
          hi, hello good morning
        </p>
      </div>

      {chatHistory.map((chat, index) => (
        <ChatMessage key={index} chat={chat} />
      ))}
    </div>

    {/* Chat Footer */}
    <div className="p-3 border-t">
      <ChatForm
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        generateBotResponse={generateBotResponse}
      />
    </div>
  </div>
)}

          
    </div>
  );
};

export default App;

