import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const {currentUser, loginWithGoogle} = UserAuth();
  console.log(currentUser);
  const handlerLogin  = async () =>  {
    try {
        await loginWithGoogle();
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=> {
    if(currentUser){
    navigate("/chat")
    };
    console.log(currentUser);
  },[currentUser]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋</h1>
          <p className="py-6">
          Join the conversation, meet new people, and make connections in on shared room 
          </p>
          <button onClick={handlerLogin} className="btn "> login with google </button>
        </div>
      </div>
    </div>
  ); 
};

export default Login;
