import { useState } from "react";

const Input = ({ className, placeholder }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    console.log(e.key, "pppp");
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`flex   rounded-md border border-input bg-background px-3  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
