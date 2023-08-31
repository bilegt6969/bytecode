"use client"
import { useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";



export default function ContactForm() {
  const [fullname, setFullname] = useState("");
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
  <div>
    <div className="max-w-[30rem] mx-auto rounded-xl text-center mt-[5rem]">
    <h1 className="text-3xl font-bold mb-4">Холбоо Барих</h1>
      <div className="flex">
    <div className="flex-col">
    <PhoneIcon className="w-10 mx-auto"/>
    <h1 className="text-white">Phone</h1>
    <h1 className="text-gray-500">(+976)90195589</h1>
    </div>
    <div className="">
    <EnvelopeIcon className="w-10 mx-auto"/>
    <h1 className="text-white">Mail</h1>
    <h1 className="text-gray-500">bilegt6969@gmail.com</h1>
    </div></div>
    

    </div>
    <div className="max-w-[30rem] bg-white mx-auto rounded-xl p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="fullname" className="text-gray-600 text-sm">
            Full Name
          </label>
          <input
            className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600 text-sm">
            Email
          </label>
          <input
            className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-gray-600 text-sm">
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full h-auto bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"

            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          className="bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          type="submit"
        >
          Send
        </button>
      </form>

      <div className="bg-red-500 mt-4 p-2 rounded">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
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
