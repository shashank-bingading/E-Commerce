import { useDispatch,useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useState } from "react";

const LoginScreen = () => {
    const dispatch = useDispatch();
    const {loading,error} = useSelector(state=>state.auth);
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email,password}));
    };

    return (
        <div>
            <h1>Login</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange = {(e)=>setemail(e.target.value)}
                        />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange = {(e)=>setpassword(e.target.value)}
                        />
                </div>
                <button type="submit" disabled={loading}>Login</button>
                </form>

        </div>
    );
}

export default LoginScreen;
