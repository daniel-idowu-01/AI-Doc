import React from "react";
import { Logo,  Google } from '../assets/images';
import AIbot from '../components/AIbot';
import { Link } from "react-router-dom";

function Signup()   {
    return (
        <section className="flex gap-8 justify-items-center items-center">
            <div className="left-side bg-[url('./assets/images/bg.png')]">
                <AIbot />
            </div>


            <div className="w-1/2 right-side m-20">
                <img src={ Logo }/>
                <p className="text-2xl font-bold">Login to your account</p>
                <p>See what is going on with your health</p>

                <div className="my-8 ">
                    <div className="">
                        <button className="text-center w-full my-4 rounded-md border border-color: inherit py-2 px-3"><span className="flex justify-content-center items-center"><img src={Google} className="pr-2"/>Sign Up with Google</span></button>

                    </div>
                    <div className="text-center ">
                        <p>---- or Sign in with email ----</p>
                    </div>

                </div>

                <form>
                    <label for="email">
                        Email<br/>
                        <input type="email" className="rounded-md w-full border border-color: inherit py-2 px-3 mb-8" placeholder="johndoe@email.com" name="email"/>
                    </label><br/>

                    <label for="password">
                        Password<br/>
                        <input type="password" className="rounded-md w-full border border-color: inherit py-2 px-3 " placeholder="***********"/>
                    </label>

                    <div className="flex justify-between items-center font-medium text-slate-600 text-sm">
                        <div><input type="checkbox" checked /><span>Remember Me</span></div>
                        <p>Forgot password?</p>
                    </div>

                </form>

                <div className="flex mt-10">
                    <div className="w-full">
                        <Link to="/Home">
                            <button className="w-full justify-items-around rounded-md py-2 px-3 bg-[#0B63E5] text-white text-bold">Login</button>
                        </Link>
                    </div>
                    

                </div>

                <div >
                    <p className="mt-20 text-center">Not registered yet?<Link to="./Signup"> <span className="text-fuchsia-400">Create an account</span></Link></p>
                </div>
            </div>
        </section>
    )
}

export default Signup
  