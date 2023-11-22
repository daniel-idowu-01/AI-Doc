import React from "react";
import { Logo,  Google } from '../assets/images';
import AIbot from '../components/AIbot';
import { Link } from "react-router-dom";

function Signup()   {
    return (
        <section className="clash-variable flex gap-8 justify-items-center items-center">
            <div className="left-side bg-[url('./assets/images/bg.png')] ">
                <AIbot />
            </div>


            <div className="w-[30%] right-side m-20">
                <div className="flex flex-col gap-5">
                    <img src={Logo} className="w-8" />
                    <div>
                        <p className="text-2xl font-bold">Create an account</p>
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
                    <label for="name" className="my-8">
                        Full Name<br/>
                        <input
                            type="text"
                            className="rounded-md outline-none w-full border border-color: inherit py-2 px-3 mb-8"
                            placeholder="John Doe" name="name" id="name"
                        />
                    </label><br/>

                    <label for="email">
                        Email<br/>
                        <input
                            type="email"
                            className="rounded-md outline-none w-full border border-color: inherit py-2 px-3 mb-8"
                            placeholder="johndoe@email.com" name="email"
                        />
                    </label><br/>

                    <label for="password">
                        Password<br/>
                        <input
                            type="password"
                            className="rounded-md outline-none w-full border border-color: inherit py-2 px-3"
                            placeholder="***********"
                        />
                    </label>

                </form>

                <div className="flex mt-5">
                    <button
                        className=" w-full justify-items-around rounded-md py-2 px-3 bg-[#0B63E5] text-white text-bold">
                        Sign Up
                    </button>

                </div>

                <div >
                    <p className="mt-5 text-center">
                        Already have an account?
                        <Link to="/login">
                            <span className="text-fuchsia-400 ml-1 underline">
                                Login
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Signup
  