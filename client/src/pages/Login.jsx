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
      console.log(formData)

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
        console.log(data);
        if (data.accessToken) {
            navigate('/home')
        }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } 
  }

    return (
<<<<<<< HEAD
        <section className="flex h-screen gap-16 justify-center items-center">
            <div className="left-side sm:max-md:hidden bg-[url('./assets/images/bg.png')]">
=======
        <section className="clash-variable flex gap-8 justify-items-center items-center overflow-y-hidden">
            <article className="hidden sm:block left-side bg-[url('./assets/images/bg.png')] ">
>>>>>>> 791f5b192b33043a82bac89b65010a07214867aa
                <AIbot />
            </article>


<<<<<<< HEAD
            <div className="w-1/2 right-side mr-10 mt-20">
                <img src={ Logo }/>
                <p className="text-2xl font-bold">Login to your account</p>
                <p>See what is going on with your health</p>
=======
            <article className="w-full sm:w-[30%] right-side m-10 sm:m-20">
                <div className="flex flex-col gap-5">
                    <img src={Logo} className="w-8" />
                    <div>
                        <p className="text-2xl font-bold">Login to your account</p>
                        <p>See what is going on with your health</p>
                    </div>
                </div>
>>>>>>> 791f5b192b33043a82bac89b65010a07214867aa

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

<<<<<<< HEAD
                <form>
                    <label for="email" className="font-semibold text-sm">
                        Email<br/>
                        <input type="email" className="rounded-md w-full border border-color: inherit py-2 px-3 mb-8" placeholder="johndoe@email.com" name="email"/>
                    </label><br/>

                    <label for="password" className="font-semibold text-sm">
                        Password<br/>
                        <input type="password" className="rounded-md w-full border border-color: inherit py-2 px-3 " placeholder="***********"/>
                    </label>

                    <div className="flex justify-between items-center font-medium text-slate-600 text-sm">
                        <div><input type="checkbox" checked /><span>Remember Me</span></div>
=======
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
>>>>>>> 791f5b192b33043a82bac89b65010a07214867aa
                        <p>Forgot password?</p>
                    </div>

                    <div className="flex mt-5">
                        <button
                            type="submit"
                            className="w-full justify-items-around rounded-md py-2 px-3 bg-[#0B63E5] text-white text-bold">
                            Login
                        </button>
                    </div>
                </form>

<<<<<<< HEAD
                <div className="flex mt-10">
                    <div className="w-full">
                        <Link to="/Home">
                            <button className="w-full justify-items-around rounded-md py-2 px-3 bg-[#0B63E5] text-white text-bold">Login</button>
                        </Link>
                    </div>
                    
=======
>>>>>>> 791f5b192b33043a82bac89b65010a07214867aa

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
<<<<<<< HEAD

                <div >
                    <p className="my-10 text-center">Not registered yet?<Link to="./Signup"> <span className="text-fuchsia-400">Create an account</span></Link></p>
                </div>
            </div>
=======
            </article>
>>>>>>> 791f5b192b33043a82bac89b65010a07214867aa
        </section>
    )
}

export default Login
  