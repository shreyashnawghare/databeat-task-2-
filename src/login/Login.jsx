import React, { useContext, useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css"
import { AuthContext } from "../AuthContext";
function Login() {
  
  const [values, setValues] = useState({ email: "", password: "" });
 
   const state = useContext(AuthContext);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const validateForm= () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email and Password is required.", {
        theme: "dark",
      });
      return false;
    } else if (password === ""){
      toast.error("Email and Password is required.", {
        theme: "dark",
      });
      return false;
    } 
    return true;
  };
  const handleSubmit =  (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { email, password } = values;
      state.login(email, password);

    }

  };

  return (
    <div className="login">
      <div className="loginwrapper">
      <p className="logo">TASK 2 </p>
        <form  className="form" onSubmit={(e) => handleSubmit(e)}>
          
         
            <input className="input"
            type="email"
            placeholder="task2@gmail.com"
            name="email"
            onChange={handleChange}
          />
            <input className="input"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          
          <button type="submit">SIGN IN</button>
         
        </form>
        
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
