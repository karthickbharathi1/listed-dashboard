
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../Config";
import { useState } from "react";
import GoogleIcon from "../assets/GoogleIcon";
import AppleIcon from "../assets/AppleIcon";

function Login({ handelUser }) {


  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  async function handelSubmit(e) {
    setLoading(true);

    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      handelUser(res);
      Navigate("/");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex w-full min-h-screen'>
       <div className='h-screen basis-1/3  bg-black flex justify-center items-center'>
            <h1 className='md:text-4xl lg:text-7xl text-white  font-bold '>Board.</h1>
        </div>
      <div className='basis-2/3 flex justify-center items-center bg-[#F5F5F5]  '>
        <div className='min-w-min lg:w-4/12 mx-4 w-2/3 '>
            <h3 className='text-2xl md:text-4xl font-bold'>Sign In</h3>
            <p className='text-base font-normal '>Sign Up to your account</p>
            <div className="flex gap-x-6 justify-center [&>*]:text-secondary  [&>*]:text-xs my-4">
              
              <button className='bg-white p-1 rounded-[10px] flex items-center' >
                <GoogleIcon />
                Sign in with Google
                </button>
               <button className='bg-white p-1 rounded-[10px] flex items-center'>
                <AppleIcon />
                Sign in with Apple</button>

            </div>

        <form className="w-full py-8 bg-white flex flex-col p-8  rounded-[20px] [&>*]:text-base" onSubmit={handelSubmit}>
            <div className="auth-from-input">
              <p className="label">Email Address</p>
              <input className="w-full rounded-lg my-1 bg-[#F5F5F5] outline-none" type="email" />
            </div>
            <div className="auth-from-input">
              <p className="label">Password</p>
              <input className="w-full rounded-lg my-1 bg-[#F5F5F5] outline-none" type="password" />
            </div>

            <div className="password-reset">
              <p className='text-[#346BD4] my-2'>
                <a href="google.com">Forgot password?</a>
              </p>
            </div>
            <button className=' w-full py-1 rounded-lg bg-black text-white my-2' >
              {loading ? "Please Wait..." : "Sign In"}
            </button>
          </form>

        
          
          <p className="text-center">
            <span className="text-[#858585]">Don't have an account?</span> <Link to="/register">Register Now!</Link>
          </p>
          {error && <p className="auth-error">{error.message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;