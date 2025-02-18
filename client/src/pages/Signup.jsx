import React, { useState } from "react";
import { Logo, Google } from "../assets/images";
import AIbot from "../components/AIbot";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // to update user inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/v1/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success === false) {
        setIsLoading(false);
        setError(data.message);
      }
      setIsLoading(false);
      if (data.user.id) {
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <section className="flex gap-8 justify-center items-center min-h-screen">
      <div className="hidden md:block left-side bg-[url('./assets/images/bg.png')] ">
        <AIbot />
      </div>

      <div className="w-full md:w-[30%] right-side m-10 md:m-20">
        <div className="flex flex-col gap-5">
          {/* <img src={Logo} className="w-8" /> */}
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
            <p className="flex justify-center items-center">
              <hr className="w-full" />
              <p className="w-full opacity-50">or sign up with email</p>
              <hr className="w-full" />
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="my-8">
            Full Name
          </label>
          <br />
          <input
            type="text"
            onChange={handleChange}
            className="rounded-md outline-none w-full border border-color: inherit py-2 px-3 mb-8"
            placeholder="John Doe"
            name="name"
            id="name"
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            onChange={handleChange}
            className="rounded-md outline-none w-full border border-color: inherit py-2 px-3 mb-8"
            placeholder="johndoe@email.com"
            name="email"
          />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            className="rounded-md outline-none w-full border border-color: inherit py-2 px-3"
            placeholder="***********"
            name="password"
          />

          <div className="flex mt-5">
            <button
              type="submit"
              className=" w-full justify-items-around rounded-md py-2 px-3 bg-[#0B63E5] text-white text-bold"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>

        <div>
          <p className="mt-5 text-center">
            Already have an account?
            <Link to="/">
              <span className="text-[#0B63E5] ml-1 underline">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
