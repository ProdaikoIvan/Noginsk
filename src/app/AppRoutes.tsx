import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { ServerPage } from "../pages/ServerPage/ServerPage";
import { AppRoute } from "../shared/config/routes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<HomePage />} />
      <Route path={AppRoute.Server} element={<ServerPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Register} element={<RegisterPage />} />
      <Route path="*" element={<Navigate to={AppRoute.Home} replace />} />
    </Routes>
  );
};
