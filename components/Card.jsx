import React from "react";

function Card({ img, NumberVal, headerTitel, desc }) {
  return (
    <div className="flex gap-[20px]">
      <div>
        <img src={img} className="max-w-[100%] object-contain" />
      </div>
      <div className="flex flex-col gap-[5px]">
        <span className="text-orange-400 text-2xl">{NumberVal}</span>
        <span className="font-bold">{headerTitel}</span>
        <span className="text-gray-400 text-lg">{desc}</span>
      </div>
    </div>
  );
}

export default Card;
