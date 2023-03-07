import React, { useState, useEffect } from "react";
let warning;
let emailwarning;

export default function Contact() {
  let click = (e) => {
    e.preventDefault();
  };
  let validateEmail = (value) => {
    if (/^\w+(([.-])?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)) {
      emailwarning.classList.add('hidden');
    } else {
      emailwarning.classList.remove('hidden')
    }
  }
  let [count, setCount] = useState(0);
  useEffect(() => {
    warning = document.getElementById("warning");
    emailwarning = document.getElementById("emailwarning");
  }, []);
  useEffect(() => {
    if (count !== 0) {
      warning.classList.add("hidden");
    }
  }, [count]);

  return (
    <div className=" mt-10 pl-20 leading-10">
      <h1 className="text-3xl text-center text-zinc-300">Get In Touch</h1>
      <p>I am currently looking for new opportunities</p>
      <p>my inbox is always open.</p>
      <p>
        Whether you have a question or just want to say hi, I will try my best
        to get back to you!
      </p>
      <div className=" text-3xl text-center mt-8 text-zinc-300">Say Hello</div>
      <form className="flex flex-col max-w-md" onSubmit={(e) => click(e)}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          className="form-input text-black"
          required
        ></input>
        <label>Email:</label>
        <input
          type="email"
          className="form-input text-black"
          required
          placeholder="john@example.com"
          onBlur={(e) => {
            validateEmail(e.target.value)
          }}
        ></input>
        <label>Comment:</label>
        <textarea
          className="mt-1 block text-black"
          rows="3"
          required
          onChange={(e) => {
            setCount(e.target.value.length);
          }}
          onBlur={() => {
            if (count === 0) {
              warning.classList.remove("hidden");
            }
          }}
        ></textarea>
        <p className="hidden" id="emailwarning">This is an invalid email address</p>
        <p className="hidden" id="warning">
          This is an invalid comment
        </p>
        <input
          type="submit"
          value="submit"
          className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded w-24 "
        ></input>
      </form>
    </div>
  );
}
