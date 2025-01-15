import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Logo,
  Dashboard,
  Chat,
  Gear,
  Bookmark,
  User,
  Document,
  Logout,
} from "../assets/images";
import NavContext from "../context/NavContext.jsx";

const SideBar = () => {
  const navigate = useNavigate();
  const { setSideBar, sideBar } = useContext(NavContext);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const sideBarLinks =
    "w-10 h-10 hover:bg-secondary hover:cursor-pointer p-2 rounded-full transition-all";

  // function to log user out
  const handleLogOut = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userDetails");

    const response = await fetch("http://localhost:5000/api/v1/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      navigate("/login");
      location.reload();
    }
  };

  return (
    <section
      className={`${
        sideBar ? "left-0" : "-left-1/2"
      } fixed flex justify-center w-[20%] md:left-0 md:w-[5%] h-screen bg-primary pt-3 pb-5 z-10 transition-all`}
    >
      <article className="flex flex-col justify-between">
        <span
          onClick={() => setSideBar(!sideBar)}
          className="md:hidden material-symbols-outlined text-white border rounded-[100%] p-2 hover:cursor-pointer"
        >
          close
        </span>

        <div>
          <img
            src={Logo}
            alt=""
            className="w-10 h-10 bg-white p-2 rounded-full"
          />
        </div>

        <div className="flex flex-col gap-5 mx-auto">
          <div className="relative">
            <span className="absolute bg-black text-white -top-1/4 right-0 p-1 px-2 rounded-[100%] text-[10px]">
              0
            </span>
            <img
              src={Dashboard}
              alt=""
              className="w-10 h-10 hover:bg-secondary hover:cursor-pointer p-2 rounded-full transition-all"
            />
          </div>
          <img src={Chat} alt="" className={sideBarLinks} />
          <img src={Gear} alt="" className={sideBarLinks} />
          <img src={Bookmark} alt="" className={sideBarLinks} />
          <img src={User} alt="" className={sideBarLinks} />
          <img src={Document} alt="" className={sideBarLinks} />
          <img
            onClick={handleLogOut}
            src={Logout}
            alt=""
            className={sideBarLinks}
            title="Logout"
          />
        </div>

        <div>
          <p className="clash-variable text-center text-xl rounded-[100%] p-3 bg-white uppercase font-[900]">
            {userDetails.name[0]}
          </p>
        </div>
      </article>
    </section>
  );
};

export default SideBar;
