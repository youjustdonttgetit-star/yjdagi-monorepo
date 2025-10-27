import React, { useState } from "react";
import { askAI } from "../api/ai";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const reply = await askAI(input);
    setMessages((prev) => [...prev, { role: "ai", text: reply }]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-2xl mb-4 font-semibold">Y.J.D.G.I. — AI Chat</h1>
      <div className="w-full max-w-md p-4 bg-gray-900 rounded-xl shadow-lg">
        <div className="h-64 overflow-y-auto mb-4 border border-gray-700 rounded p-2">
          {messages.map((msg, idx) => (
            <p key={idx} className={msg.role === "user" ? "text-blue-400" : "text-green-400"}>
              <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.text}
            </p>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 p-2 rounded bg-gray-800 text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />
          <button
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
