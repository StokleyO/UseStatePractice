import "./styles.css";

import React, { useRef, useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const emailRef = useRef();
  const firstRef = useRef();
  const lastRef = useRef();

  return (
    <div>
      <h1>Form</h1>
      <label htmlFor="email">Your email address</label>
      <br />
      <input type="text" name="email" ref={emailRef} />
      <br />

      <label htmlFor="first-name">Your firstname : </label>
      <br />
      <input type="text" name="first-name" ref={firstRef} />
      <br />

      <label htmlFor="last-name">Your last name : </label>
      <br />
      <input type="text" name="last-name" ref={lastRef} />

      <br />
      <br />

      <button
        onClick={function () {
          setEmail(emailRef.current.value);
          setFirstName(firstRef.current.value);
          setLastName(lastRef.current.value);
        }}
      >
        Submit the form
      </button>
      <br />
      <br />

      <div>
        Your email adress is : {email} <br />
        Your first name : {firstName} <br />
        Your last name : {lastName}
      </div>
    </div>
  );
}
