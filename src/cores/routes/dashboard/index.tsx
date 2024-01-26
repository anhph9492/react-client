import ProtectedRoute from "@/hocs/ProtectedRoute";
import DashboardComponent from "@/modules/dashboard";
import { Route } from "react-router-dom";

const DashboardRoutes = (): React.ReactNode => {
  return (
    <Route
      path="/"
      element={
        <ProtectedRoute user={true}>
          <DashboardComponent />
        </ProtectedRoute>
      }
    />
  );
};

export default DashboardRoutes;
