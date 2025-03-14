import { useState } from "react";
import Card from "./Card";

import Futher from "./Futher";
import New from "./New";
import gamingGrowth from "../assets/images/image-gaming-growth.jpg";
import retroPcs from "../assets/images/image-retro-pcs.jpg";
import topLaptops from "../assets/images/image-top-laptops.jpg";

function Home() {
  const [cardData, setData] = useState([
    {
      url: gamingGrowth,
      NumberVal: "01",
      headerTitel: "Gaming Growth",
      desc: "The gaming industry is growing rapidly, with more people than ever playing games."
    },
    {
      url: retroPcs,
      NumberVal: "02",
      headerTitel: "Retro PCs",
      desc: "We take a look at the history of personal computers, and how they changed the world."
    },
    {
      url: topLaptops,
      NumberVal: "03",
      headerTitel: "Prototype",
      desc: "From the Apple II to the latest smartphones, we break down the history of personal computing."
    }
  ]);
  return (
    <>
      <section>
        <div className="container mx-auto p-[30px] flex flex-col md:flex-row gap-[30px]">
          <Futher />
          <New />
        </div>
      </section>
      <div className="container mx-auto p-[30px] flex flex-col md:flex-row gap-[20px]">
        {cardData.map((card) => (
          <Card
            key={card.NumberVal}
            img={card.url}
            NumberVal={card.NumberVal}
            headerTitel={card.headerTitel}
            desc={card.desc}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
