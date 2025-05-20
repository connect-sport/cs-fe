"use client";

import { HomePage } from "@/components/pages/HomePage";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket = io("http://localhost:5001");

    socket.on("connect", () => {
      console.log("✅ Connected to server");
    });

    socket.on("message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", input);
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <MainTemplate>
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="bg-gray-200 p-2 rounded">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border rounded p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter message"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
      <HomePage />
    </MainTemplate>
  );
}
// This is a simple chat application using Socket.IO and Next.js.
// It connects to a Socket.IO server, listens for incoming messages, and allows users to send messages.
// The messages are displayed in a list, and the user can type a message and send it using the button.
// The application uses React hooks to manage state and side effects.
// The socket connection is established when the component mounts and cleaned up when it unmounts.
// The messages are stored in a state variable and updated whenever a new message is received or sent.
// The input field is controlled by a state variable, and its value is cleared after sending a message.
// The application uses Tailwind CSS for styling, but you can replace it with your preferred styling method.
// Make sure to run a Socket.IO server on port 4000 for this code to work.
// You can use the following code to create a simple Socket.IO server:
