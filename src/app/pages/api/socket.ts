import { Server } from "socket.io";
import type { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types/next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (!res.socket.server.io) {
    console.log("🔌 New Socket.IO server...");
    const io = new Server(res.socket.server, {
      path: "/api/socketio",
      addTrailingSlash: false,
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("🟢 A client connected");

      socket.on("message", (msg: string) => {
        console.log("📩 Received message:", msg);
        socket.broadcast.emit("message", msg);
      });

      socket.on("disconnect", () => {
        console.log("🔴 Client disconnected");
      });
    });
  }
  res.end();
}
