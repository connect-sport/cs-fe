"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:4000", {
      forceNew: true,
    });
    socketRef.current.emit("get-messages");
    socketRef.current.on("messages", (msgs) => {
      setMessages(msgs);
    });

    socketRef.current.on("connect", () => {
      console.log("Connected to socket server");
    });

    socketRef.current.on("message", (data: { text: string }) => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: data.text, sender: "me" },
      ]);
      setIsTyping(false);
    });

    socketRef.current.on("typing", (data: { isTyping: boolean }) => {
      setIsTyping(data.isTyping);
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!socketRef.current) return;

    socketRef.current.emit("typing", { isTyping: true });

    const timeout = setTimeout(() => {
      socketRef.current?.emit("typing", { isTyping: false });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [input]);

  function sendMessage() {
    if (!input.trim() || !socketRef.current) return;

    socketRef.current.emit("message", { text: input.trim(), sender: "me" });
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), sender: "me" },
    ]);
    setInput("");
    setIsTyping(false);
  }

  return (
    <div className="flex flex-col h-[600px] max-w-full sm:max-w-md mx-auto border rounded shadow-lg">
      <div className="p-4 bg-blue-600 text-white font-semibold text-lg rounded-t">
        Chat với Support
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-lg ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[70%] px-4 py-2 rounded-lg bg-gray-300 text-gray-800 italic">
              Đối phương đang gõ...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

export { ChatRoom };
