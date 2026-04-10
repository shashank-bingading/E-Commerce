import { setCredentials } from "../store/authSlice";
import API from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userInfo = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      try {
        if (!name || !email || !password) {
          alert("Please fill in all fields");
          return;
        } else if (password.length < 6) {
          alert("Password must be at least 6 characters");
          return;
        }
        const response = await API.post("/auth/register", {
          name,
          email,
          password,
        });
        if (response) {
          dispatch(setCredentials(response.data));
        }
      } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
      }
    }
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
};
export default RegisterScreen;
