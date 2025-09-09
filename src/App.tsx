import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import CourseDetail from "./pages/CourseDetail";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";
import CourceManager from "./pages/CourceManager";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/cources/:courceId" element={<CourseDetail/>}/>

      {/* Nested Route */}
      <Route path="/admin" element={<AdminPage/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="cource-manager" element={<CourceManager/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
