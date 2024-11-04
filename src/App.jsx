import React, { useRef } from "react";

const App = () => {
  const ref = useRef([]);

  const handleChange = (e, idx) => {
    const { value } = e.target;
    if (value.length === 1 && idx < ref.current.length - 1) {
      ref.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !e.target.value && idx > 0) {
      ref.current[idx - 1].focus();
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-7">
      {Array(4)
        .fill(null)
        .map((_, idx) => (
          <input
            key={idx}
            ref={(el) => (ref.current[idx] = el)}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            type="text"
            maxLength={1}
            className="p-2 w-8 border border-gray-500 text-center"
          />
        ))}
    </div>
  );
};

export default App;
