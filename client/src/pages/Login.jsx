import React, { useState } from "react";
import { Logo,  Google } from '../assets/images';
import AIbot from '../components/AIbot';
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    // to update user inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // to submit form data
  const handleSubmit = async (e) => {
      e.preventDefault();

    try {
      setIsLoading(true)
      const response = await fetch('https://ai-doc-7h0i.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if(data.success === false ) {
        setIsLoading(false);
        setError(data.message);
      }
        setIsLoading(false);
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
        localStorage.setItem('userDetails', JSON.stringify(data.user))
        if (data.accessToken) {
            navigate('/home')
        }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } 
    }
    
    const handleForgotPassword = async () => {
        const response = await fetch('https://ai-doc-7h0i.onrender.com/api/v1/auth/forgot-password', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData.email)
      });
    }

    return (
        <section className="clash-variable flex gap-8 justify-items-center items-center overflow-y-hidden">
            <article className="hidden sm:block left-side bg-[url('./assets/images/bg.png')] ">
                <AIbot />
            </article>


            <article className="w-full sm:w-[30%] right-side m-10 sm:m-20">
                <div className="flex flex-col gap-5">
                    <img src={Logo} className="w-8" />
                    <div>
                        <p className="text-2xl font-bold">Login to your account</p>
                        <p>See what is going on with your health</p>
                    </div>
                </div>

                <div className="my-2">
                    <div className="">
                        <button className="text-center w-full my-4 rounded-md border border-color: inherit py-2 px-3">
                            <span className="flex justify-content-center items-center">
                                <img src={Google} className="pr-2" />
                                Sign In with Google
                            </span>
                        </button>

                    </div>
                    <div className="text-center ">
                        <p className="opacity-50">
                            --------- or Sign in with email ---------
                        </p>
                    </div>

                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email
                    </label><br />
                    <input type="email"
                        onChange={handleChange}
                        className="outline-none rounded-md w-full border border-color: inherit py-2 px-3 mb-8" placeholder="johndoe@email.com" name="email"
                    />
                    <br/>

                    <label htmlFor="password">
                        Password
                    </label><br />
                    <input type="password"
                        onChange={handleChange}
                        className="outline-none rounded-md w-full border border-color: inherit py-2 px-3 " placeholder="***********"
                        name="password"
                    />

                    <div className="flex justify-between items-center text-slate-600 text-sm mt-2">
                        <div>
                            <input type="checkbox" checked readOnly /><span className="ml-1">Remember Me</span>
                        </div>
                        <p
                            onClick={handleForgotPassword}
                            className="hover:underline hover:cursor-pointer"
                        >
                            Forgot password?
                        </p>
                    </div>

                    <div className="flex mt-5">
                        <button
                            type="submit"
                            className="w-full justify-items-around rounded-md py-2 px-3 bg-[#0B63E5] text-white text-bold">
                            {isLoading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                </form>


                <div>
                    <p className="mt-5 text-center">
                        Not registered yet?
                        <Link to="/">
                            <span className="text-fuchsia-400 hover:underline ml-1">
                                Create an account
                            </span>
                        </Link>
                    </p>
                </div>
            </article>
        </section>
    )
}

export default Login
  