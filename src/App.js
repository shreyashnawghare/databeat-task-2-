import React, {useContext} from "react";
import { AuthContext } from "./AuthContext";
import Home from "./home/Home";
import Login from "./login/Login";
function App() {
  const {state}=useContext(AuthContext);
  return (
    <div >
      {state.isLoggedIn ?<Home/>:   <Login/>}
 
    </div>
  );
}

export default App;
