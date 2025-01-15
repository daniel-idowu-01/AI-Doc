import React, { useState, useContext } from "react";
import { CurvedArrow } from "../assets/images";
import NavContext from "../context/NavContext.jsx";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

const SearchInput = () => {
  const navigate = useNavigate();
  const { query, setQuery, botResponse, setBotResponse } =
    useContext(NavContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem("accessToken"));

  // to update user inputs
  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  // to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(query),
      });

      const data = await response.json();
      if (response.status !== 200) {
        setBotResponse("Sorry! The chatbot is currently unavailiable.");
      } else {
        setBotResponse(data.chat[data.chat.length - 1].content);
      }
      if (data.success === false) {
        setIsLoading(false);
        setError(data.message);
      }
      setIsLoading(false);
      navigate("/chat");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  if (isLoading) {
    setBotResponse("AI is typing...");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 md:bottom-10 left-0 md:left-auto w-full md:w-1/2 flex justify-between items-center bg-[#E1F2FF] p-6 md:rounded-[32px] md:mx-0"
    >
      <input
        type="text"
        onChange={handleChange}
        placeholder="Send your message to AI Doc..."
        className="w-full md:w-[90%] outline-none bg-transparent"
        name="query"
      />

      <button className="absolute bg-[#93ED93] rounded-[100%] w-10 h-10 p-2 right-5 hover:opacity-80">
        {isLoading ? (
          <SyncLoader color={"#93ED93"} loading={isLoading} size={10} />
        ) : (
          <img src={CurvedArrow} alt="" className="" type="submit" />
        )}
      </button>
    </form>
  );
};

export default SearchInput;
