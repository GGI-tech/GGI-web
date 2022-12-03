import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);


  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      setButtonText("Sending");

      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: email,
          name: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
      }
      setFullname("")
      setEmail("")
      setSubject("")
      setMessage("")
      toast.success("Form submitted")

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-8 bg-white dark:bg-blue-500"
    >
      <h1 className="text-2xl font-extrabold dark:text-gray-50">
        Send a message
      </h1>

      <label
        htmlFor="fullname"
        className="text-gray-500  mt-8 dark:text-gray-50"
      >
        Full name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        name="fullname"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-gray-500"
      />


      <label
        htmlFor="email"
        className="text-gray-500  mt-8 dark:text-gray-50"
      >
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-gray-500"
      />


      <label
        htmlFor="subject"
        className="text-gray-500  mt-4 dark:text-gray-50"
      >
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-gray-500"
      />

      <label
        htmlFor="message"
        className="text-gray-500  mt-2 dark:text-gray-50"
      >
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-gray-500"
      ></textarea>

      <div className="flex flex-row items-center justify-start">
        <button
          onClick={handleSubmit}
          type="submit"
          className="px-10 mt-3 py-1 bg-[#18126d] text-gray-50  rounded-full text-lg flex flex-row items-center"
        >
          Submit

        </button>
        <ToastContainer position="top-center" autoClose={3000} />

      </div>
    </form>
  )
}