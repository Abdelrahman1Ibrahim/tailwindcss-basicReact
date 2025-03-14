import { useState } from "react";
function New() {
  const [newData, setData] = useState([
    {
      titel: "Hydrogen VS Electric Cars",
      desc: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
      titel: "The Downsides of AI Artistry",
      desc: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
      titel: "Is VC Funding Drying Up?",
      desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
  ]);
  return (
    <div className=" bg-[#332d34] p-[30px] rounded-[10px]">
      <span className="text-yellow-500 text-3xl font-bold block">New</span>
      {[
        newData.map((data) => {
          return (
            <div
              className="pt-[15px] border-b border-b-gray-400 "
              key={data.titel}
            >
              <p className="text-white font-bold text-2xl mb-10">
                {data.titel}
              </p>
              <p className="text-gray-400 text-lg pb-[10px]">{data.desc}</p>
            </div>
          );
        })
      ]}
    </div>
  );
}

export default New;
