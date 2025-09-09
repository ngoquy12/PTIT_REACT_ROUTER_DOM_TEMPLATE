// src/pages/LoginPage.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (userName === "userName") {
      navigate("/admin/dashboard")
    }
  }
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="login-container">
          <h2>Đăng nhập trang Quản trị</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" id="username" defaultValue="admin" />
            </div>
            <button type="submit">Đăng nhập</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
