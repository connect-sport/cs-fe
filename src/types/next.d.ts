import type { Server as HTTPServer } from "http";
import type { Socket } from "net";
import { NextApiResponse } from "next";
import type { Server as IOServer } from "socket.io";

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: HTTPServer & {
      io: IOServer;
    };
  };
};
