"use client"
import React from "react";

import { useState } from "react";
import bg from '../../img/bg.jpg'
import styled from 'styled-components';




export default function ContactForm() {

  const StyledElement = styled.div`
  font-family: 'Play', 'Red Hat Display', sans-serif;
  /* Rest of your styling */
`;

  const [fullname, setFullname] = useState("");
  const [fullname1, setFull1name] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    
  <div className="text-white mb-[8rem]">
    <div className="max-w-[30rem] mx-auto rounded-xl text-center mt-[5rem]">
    <h1 className="text-5xl font-bold mb-[8rem]">Холбоо Барих</h1>

    

    </div>
    <div className=" max-w-[90rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-3xl lg:px-[15rem] lg:py-[4rem] md:px-[8rem] md:py-[4rem] sm:px-[3rem] sm:py-[4rem] px-[1rem] py-[4rem]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
        
        <h1 className="font-sans font-bold text-4xl  ">If you&apos;re ready to start, get in touch with us! 👇</h1>
        <p className="font-sans mb-[5rem]">We&apos;ll get in touch within 24hours.</p>

        
        

          <div className="flex gap-[2rem]">
          <input
            className="w-full text-black p-2 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="First Name"
          />
          <input
            className="w-full text-black p-2 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setFull1name(e.target.value)}
            value={fullname1}
            type="text"
            id="fullname1"
            placeholder="Last Name"
          />

          <input
            className="w-full text-black  p-2 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Email"
          />
          </div>
          
        </div>







        <div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full text-white placeholder-gray-200  h-[10rem] bg-white/10 backdrop-blur-xl   rounded-xl border border-none focus:border-indigo-500 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"

            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          className="bg-white text-black font-bold py-2 px-4 rounded-full cursor-pointer"
          type="submit"
        >
          Send
        </button>
      </form>

      <div className=" mt-4 p-2 rounded">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "bg-green-800 rounded-xl p-4" : "bg-red-600 rounded-xl p-4"
              } px-2 py-1`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}
