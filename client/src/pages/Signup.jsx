import React from "react";
import { Logo,  Google } from '../assets/images';
import AIbot from '../components/AIbot';
import { Link } from "react-router-dom";

function Signup()   {
    return (
        <section className="flex h-screen gap-16 justify-center items-center">
            <div className="left-side sm:max-md:hidden bg-[url('./assets/images/bg.png')]">
                <AIbot />
            </div>


            <div className="w-1/2 right-side mr-10 mt-20">
                <img src={ Logo }/>
                <p className="text-2xl font-bold">Login to your account</p>
                <p>See what is going on with your health</p>

                <div className="my-4 ">
                    <div className="">
                        <button className="text-center w-full my-2 rounded-md border border-color: inherit py-2 px-3"><span className="flex justify-content-center items-center"><img src={Google} className="pr-2"/>Sign Up with Google</span></button>

                    </div>
                    <div className="text-center ">
                        <p>---- or Sign up with email ----</p>
                    </div>

                </div>

                <form>
                    <label for="name" className="font-semibold text-sm my-8">
                        Full Name<br/>
                        <input type="text" className="rounded-md w-full border border-color: inherit py-2 px-3 mb-8" placeholder="John Doe" name="name" id="name"/>
                    </label><br/>

                    <label for="email" className="font-semibold text-sm">
                        Email<br/>
                        <input type="email" className="rounded-md w-full border border-color: inherit py-2 px-3 mb-8" placeholder="johndoe@email.com" name="email"/>
                    </label><br/>

                    <label for="password" className="font-semibold text-sm">
                        Password<br/>
                        <input type="password" className="rounded-md w-full border border-color: inherit py-2 px-3 mb-8" placeholder="***********"/>
                    </label>

                </form>

                <div className="flex">
                    <div className="w-full">
                        <Link to="/Email">
                            <button className=" w-full justify-items-around rounded-md py-2 px-3 bg-[#0B63E5] text-white text-bold">Sign Up</button>
                        </Link>

                    </div>
                </div>

                <div >
                    <p className="my-10 text-center">Already have an acount?<Link to="/Login"> <span className="text-fuchsia-400">Login</span></Link></p>
                </div>
            </div>
        </section>
    )
}

export default Signup
  