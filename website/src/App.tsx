import React, { useState } from "react";
import { askAI } from "./lib/api";

export default function Chat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    try {
      const reply = await askAI(input);
      setResponse(reply);
    } catch (error) {
      setResponse("Error contacting AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">YJDGI AI</h1>
      <textarea
        className="border rounded p-2 w-full max-w-md"
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      {response && (
        <div className="mt-4 border p-4 rounded max-w-md bg-gray-50">
          <strong>AI:</strong> {response}
        </div>
      )}
    </div>
  );
}
