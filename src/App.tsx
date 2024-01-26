import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppContextHOC, { AppContext, AppContextType } from "./app-context";
import LoginDemo from "./modules/demo/login-form";
import { useContext, useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";
import NotFound from "./components/organisms/not-found";
import AppChatRoutes from "./cores/routes/chat-app";
import DashboardRoutes from "./cores/routes/dashboard";
import ProtectedRoute from "./hocs/ProtectedRoute";
import DashboardComponent from "./modules/dashboard";
import  { SocketContext, SocketContextType } from "./context/socket-context";

let count = 1;

function App() {
  console.log(" app render \n", count++);

  // useEffect(() => {
  //   if (socket?.current?.connected) {
  //     console.log(' socket connected \n', socket)
  //   }
  // }, [socket.current.connected]);

  const { socket, testText } = useContext<SocketContextType>(SocketContext);
  console.log("socket - id  \n", socket?.id, testText);

  // const checkUserToken = () => {
  //   if (typeof window !== "undefined") {
  //     const user = JSON.parse(localStorage.getItem("user-token"));
  //     if (user) {
  //       setIsconnected(true);
  //     } else {
  //       setIsconnected(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const token = localStorage.getItem("user-token")
  //   if (token) {
  //     console.log('token - ', token)
  //   }
  // }, [localStorage.getItem("user-token")]);

  // const Logout = () => {
  //   if (localStorage.getItem("user-token")) {
  //     localStorage.clear();
  //     setIsconnected(false);
  //   }
  // };

  return (
    <AppContextHOC>

        <BrowserRouter>
          {/* <Header Logout={Logout} user={isConnected} /> */}
          <Routes>
            <Route path="/demo/login" element={<LoginDemo />} />

            <Route
              path="/"
              element={
                <ProtectedRoute user={true}>
                  <DashboardComponent />
                </ProtectedRoute>
              }
            />

            {/* <Button />
            <Route
              path="/"
              element={
                <ProtectedRoute user={isConnected}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <ForceRedirect user={isConnected}>
                  <Signin />
                </ForceRedirect>
              }
            /> */}
            {/* <Route
            path="/signup"
            element={
              <ForceRedirect user={isConnected}>
                <Signup />
              </ForceRedirect>
            }
          /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <AppChatRoutes /> */}
          {/* <Footer /> */}
        </BrowserRouter>

    </AppContextHOC>
  );
}

export default App;
