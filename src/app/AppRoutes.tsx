import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "../shared/config/routes";

const HomePage = lazy(() => import("../pages/HomePage/HomePage").then(module => ({ default: module.HomePage })));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage").then(module => ({ default: module.LoginPage })));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage").then(module => ({ default: module.RegisterPage })));
const ServerPage = lazy(() => import("../pages/ServerPage/ServerPage").then(module => ({ default: module.ServerPage })));
const PaymentPage = lazy(() => import("../pages/PaymentPage/PaymentPage").then(module => ({ default: module.PaymentPage })));
const StatisticsPage = lazy(() => import("../pages/StatisticsPage/StatisticsPage").then(module => ({ default: module.StatisticsPage })));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div style={{ padding: "5rem", textAlign: "center", color: "var(--gold-soft)", fontSize: "1.2rem", animation: "pulse 1.5s infinite" }}>Завантаження...</div>}>
      <Routes>
        <Route path={AppRoute.Home} element={<HomePage />} />
        <Route path={AppRoute.Server} element={<ServerPage />} />
        <Route path={AppRoute.Statistics} element={<StatisticsPage />} />
        <Route path={AppRoute.Payment} element={<PaymentPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Register} element={<RegisterPage />} />
        <Route path="*" element={<Navigate to={AppRoute.Home} replace />} />
      </Routes>
    </Suspense>
  );
};
