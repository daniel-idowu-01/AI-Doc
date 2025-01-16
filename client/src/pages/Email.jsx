import React from "react";
import { Logo } from "../assets/images";
import { Link } from "react-router-dom";

function Email() {
  return (
    <section className="flex flex-col h-screen justify-center items-center gap-8 bg-[url('./assets/images/wavybg.svg')]">
      <div>
        <img src={Logo} />
      </div>
      <div>
        <p className="text-4xl font-bold">Email address has been confirmed</p>
      </div>
      {/* Login button */}
      <div>
        <Link to="/Login">
          <button className="bg-[#0B63E5] text-white mt-6 py-2 px-40 rounded">
            Continue
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Email;
