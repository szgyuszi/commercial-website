import { Routes, Route } from "react-router-dom";
import Header from "../../common/Header";
import LandingPage from "../../pages/landing/LandingPage";
import MainLayout from "../../pages/main/components/MainLayout";

function RoutesManager() {
  return (
    <Routes>
      <Route path="/get-started" element={<LandingPage />} />
      <Route path="/" element={<Header />}>
        <Route index element={<MainLayout />} />
        <Route path="/post/:id" element={<h1>PostById</h1>} />
        <Route path="/user/:id" element={<h1>UserById</h1>} />
        <Route path="*" element={<h1>No page</h1>} />
      </Route>
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/sign-up" element={<h1>Sign up</h1>} />
      <Route path="*" element={<h1>No page</h1>} />
    </Routes>
  );
}

export default RoutesManager;
