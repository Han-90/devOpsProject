import React, { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  const sendMessage = async () => {
    const res = await fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    const data = await res.json();
    setMessages([...messages, data]);
    setInput("");
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl mb-4">Welcome to my simple DevOps Project</h1>
      <h1 className="text-xl mb-4">Messages</h1>
      <ul>
        {messages.map((m) => (
          <li key={m.id}>{m.text}</li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        className="border p-1 mt-2"
      />
      <button
        onClick={sendMessage}
        className="ml-2 bg-blue-500 text-white px-2 py-1"
      >
        Send
      </button>
    </div>
  );
}

export default App;
