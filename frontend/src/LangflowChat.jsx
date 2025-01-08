import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi"; // Heroicons
import { MdSend } from "react-icons/md"; // Material Design icons
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './langflow.css'
import asset  from "./assets/bot2.avif"

export default function LangflowChat() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const scrollRef = useRef(null); // Reference for the scroll anchor

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to the bottom
    }
  }, [conversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setConversation((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://findcoder-server.onrender.com", { message });
      const botResponse = {
        role: "bot",
        content: response.data || "",
      };
      setConversation((prev) => [...prev, botResponse]);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderMarkdown = (content) => {
    return (
      <ReactMarkdown
        className="prose prose-invert custom-markdown-table"
        children={content}
        remarkPlugins={[remarkGfm]}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="px-5 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg flex items-center"
            >
              <HiArrowLeft className="h-4 w-4 mr-2 "  />
              Back to Home
            </button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 min-h-[90vh] max-h-[90vh] flex flex-col">
          <div className="flex-1 mb-6 bg-gray-900 rounded-lg p-4 overflow-y-scroll custom-scrollbar">
            {conversation.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                Enter your query below to start analyzing
              </div>
            ) : (
              <div className="space-y-4">
                {conversation.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex ${entry.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] p-4 rounded-lg ${
                        entry.role === "user"
                          ? "bg-blue-700 text-white"
                          : "bg-gray-800 text-gray-300"
                      }`}
                    >
                      <div className="flex gap-2 items-center">
                        {entry.role === "bot" && (
                          <img
                            src={asset} // Replace with your bot logo image path
                            alt="Bot Logo"
                            className="h-8 w-8 object-cover bg-green-500 rounded-2xl" // Customize size as needed
                          />
                        )}
                        {entry.role === "user" ? "You:" : ""}
                      </div>
                      {renderMarkdown(entry.content)}
                    </div>
                  </div>
                ))}
                {loading && (
  <div className="flex justify-start">
    <div className="bg-gray-800 p-4 rounded-lg text-gray-400 flex items-center gap-4">
      <img
        src="bot.png"
        alt="Bot Logo"
        className="h-8 w-8 object-contain bg-transparent rounded-2xl"
      />
      <div className="space-y-2">
        <div className="h-3 w-24 bg-gray-600 rounded animate-pulse"></div>
        <div className="h-3 w-16 bg-gray-600 rounded animate-pulse"></div>
        <div className="h-3 w-20 bg-gray-600 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
)}

                <div ref={scrollRef}></div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your analysis query..."
              className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500"
              } text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center`}
            >
              <MdSend className="h-5 w-5 mr-2" />
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </form>
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </div>
      </main>
    </div>
  );
}
