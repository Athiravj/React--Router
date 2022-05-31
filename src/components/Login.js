import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/profile";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div className="login-content">
      <label>
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <br></br>
      <button onClick={handleLogin} required>
        Login
      </button>
    </div>
  );
};
