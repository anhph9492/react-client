import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../../hocs/ProtectedRoute";
import Profile from "../../../modules/auth/profile";

const AppChatRoutes = () => {
  const isConnected = true;
  return (
    <>
    <Route
      path="/app-chat"
      element={
        <ProtectedRoute user={isConnected}>
          <Profile />
        </ProtectedRoute>
      }
    />
    </>
  );
};

export default AppChatRoutes;
