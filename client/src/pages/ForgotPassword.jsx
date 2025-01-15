import React, { useState } from "react";
import { Logo } from "../assets/images";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
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
        "http://localhost:5000/api/v1/auth/register",
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
      console.log(data);
      if (data.user.id) {
        navigate("/login");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <section className="flex flex-col h-screen justify-center items-center gap-8 bg-[url('./assets/images/wavybg.svg')]">
      <div>
        <img src={Logo} />
      </div>
      <div>
        <p className="text-4xl font-bold">
          Enter Your Email To Get Verification Link
        </p>
      </div>
      {/* Login button */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleChange}
          className="rounded-md outline-none w-full border border-color: inherit py-2 px-3 mb-8"
          placeholder="johndoe@email.com"
          name="email"
        />
        <div>
          <Link to="/Login">
            <button className="bg-[#0B63E5] text-white mt-6 py-2 px-40 rounded">
              Continue
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
