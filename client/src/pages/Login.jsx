import { useContext, useState } from "react";
import { assets } from "../assets/assests"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

  const [isCreatedAccount, setIsCreatedAccount] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const {backendUrl, setIsLoggedIn, getUserData} = useContext(AppContext);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      if (isCreatedAccount) {
        //register Api
       const response = await axios.post(`${backendUrl}/register`, {name, email, password});
       if (response.status === 201) {
        navigate("/");
        toast.success("Account created successfully!");
       }else {
        toast.error("Email already exists, please try another one.");
       }

      }else{
        //login api
        const response = await axios.post(`${backendUrl}/login`, {email, password});
        if (response.status === 200) {
          setIsLoggedIn(true);
          getUserData();
          navigate("/");
          toast.success("Login successful!");
        }else {
          toast.error("Invalid email or password, please try again.");
        }
      }
    }catch (error) {
      toast.error(error.response.data.message );
    }finally {
      setLoading(false);
    }
  }
  return (
    <div
      className="position-relative min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(90deg, #6a5af9, #8268f9)",
        border: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "24px",
            textDecoration: "none",
            gap: 2
          }}
        >
          <img src={assets.logo_home} alt="Logo" height={32} width={32} />
          <span className="fw-bold fs-4 text-light ">Authify</span>
        </Link>
      </div>
      <div className="card p-4 " style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">
          {isCreatedAccount ? "Create Account" : "Login"}
        </h2>
        <form onSubmit={onSubmitHandler}>
          {isCreatedAccount && (
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter fullName"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Id
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="***********"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <Link to="/reset-password" className="text-decoration-none">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Loading..." : isCreatedAccount ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-0">
            {isCreatedAccount
              ? (<>
                  Already have an account?{" "}
                 <span
                     onClick={() => setIsCreatedAccount(false)} className="text-decoration-underline"style={{cursor: "pointer"}}>
                      Login here
                 </span>
                 </>) :(
                         <>
                           Don't have an account ? {" "}
                           <span
                              onClick={() => setIsCreatedAccount(true)}  className="text-decoration-underline"style={{cursor: "pointer"}}>
                             Sign Up here
                           </span>
                </>)
            }
              
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login
