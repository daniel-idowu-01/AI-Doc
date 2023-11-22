import React from "react";
import { Logo,  Google } from '../assets/images';
import AIbot from '../components/AIbot';
import { Link } from "react-router-dom";

function Signup()   {
    return (
        <section className="clash-variable flex gap-8 justify-items-center items-center overflow-y-hidden">
            <article className="left-side bg-[url('./assets/images/bg.png')] ">
                <AIbot />
            </article>


            <article className="w-[30%] right-side m-20">
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
                                Sign Up with Google
                            </span>
                        </button>

                    </div>
                    <div className="text-center ">
                        <p className="opacity-50">
                            --------- or Sign in with email ---------
                        </p>
                    </div>

                </div>

                <form>
                    <label for="email">
                        Email<br/>
                        <input type="email" className="outline-none rounded-md w-full border border-color: inherit py-2 px-3 mb-8" placeholder="johndoe@email.com" name="email"/>
                    </label><br/>

                    <label for="password">
                        Password<br/>
                        <input type="password" className="outline-none rounded-md w-full border border-color: inherit py-2 px-3 " placeholder="***********"/>
                    </label>

                    <div className="flex justify-between items-center text-slate-600 text-sm mt-2">
                        <div>
                            <input type="checkbox" checked /><span className="ml-1">Remember Me</span>
                        </div>
                        <p>Forgot password?</p>
                    </div>

                </form>

                <div className="flex mt-5">
                    <button className=" w-full justify-items-around rounded-md py-2 px-3 bg-[#0B63E5] text-white text-bold">
                        Login
                    </button>

                </div>

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

export default Signup
  