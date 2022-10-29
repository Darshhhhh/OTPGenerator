import React, { useRef, useState } from "react";
import "../src/App.css";
function App() {
  //OTP storing the Final OTP👇
  const [OTP, setOTP] = useState("");
  //UseRef Hook to Pass the value of length of OTP👇
  const Limit = useRef(null);
  //This Onclick funtion Generating Random OTP for You👇
  const NewOtp = () => {
    if (
      Limit.current.value === null ||
      Limit.current.value === undefined ||
      Limit.current.value === ""
    ) {
      alert("Please Enter Length of OTP first");
    } else {
      let digits = "0123456789";
      let OTP = "";
      for (let i = 0; i < Limit.current.value; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return setOTP(OTP);
    }
  };
  return (
    <>
      <div className="mainbox">
        <div className="App">
          <h3>OTP generator</h3>
          {/* <br /> */}
          {/* User Defined OTP length👇  */}
          <input
            type={"number"}
            ref={Limit}
            className="InputBox"
            placeholder="Enter OTP Length"
          />
          <br />
          <br />
          <button onClick={NewOtp} className="btn">
            Click
          </button>
          <br />
          <hr />
          <h2>{OTP}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
