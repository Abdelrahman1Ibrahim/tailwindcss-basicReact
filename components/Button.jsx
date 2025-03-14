import React from "react";

function Button({ content }) {
  return (
    <button className="block text-black font-semibold p-[15px] bg-red-400 hover:bg-red-500 transition-all duration-200 rounded-[10px] ">
      {content}
    </button>
  );
}

export default Button;
