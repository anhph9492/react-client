import React from "react";
import { Socket, io } from "socket.io-client";

export type SocketContextType = {
  socket: Socket | undefined;
  testText: string
};

const init: SocketContextType = {
  socket: io("http://localhost:5050"),
  testText: 'ok'
};

export const SocketContext = React.createContext(init);

// const SocketContextHOC = ({ children }: { children: React.ReactNode }) => {
//   console.log("SocketContextHOC render \n");
//   const [socket, setSocket] = React.useState<Socket>();
//   const socketRef = React.useRef<Socket>();
//   const socketRefCurrent = (socketRef.current = io("http://localhost:5050"));
//   socketRefCurrent.on("connect", () => {
//     console.log('socket connected - ', socketRefCurrent.id);
//     // setSocket(socketRefCurrent)
//   });
//   return (
//     <SocketContext.Provider value={{ socket }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export default SocketContextHOC;
