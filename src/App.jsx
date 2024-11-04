import React, { useState } from "react";

const App = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, idx) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    
    if (value.length === 1 && idx < otp.length - 1) {
      document.getElementById(`otp-input-${idx + 1}`).focus();
    }
    
    
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      document.getElementById(`otp-input-${idx - 1}`).focus();
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-7">
      {otp.map((_, idx) => (
        <input
          key={idx}
          id={`otp-input-${idx}`}
          value={otp[idx]}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          type="text"
          maxLength={1}
          className="p-2 w-8 border border-gray-500"
        />
      ))}
    </div>
  );
};

export default App;