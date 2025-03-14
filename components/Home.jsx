import { useState } from "react";
import Card from "./Card";

import Futher from "./Futher";
import New from "./New";

function Home() {
  const [cardData, setData] = useState([
    {
      url: "../src/assets/images/image-gaming-growth.jpg",
      NumberVal: "01",
      headerTitel: "Gaming Growth",
      desc: "The gaming industry is growing rapidly, with more people than ever playing games."
    },
    {
      url: "../src/assets/images/image-retro-pcs.jpg",
      NumberVal: "02",
      headerTitel: "Retro PCs",
      desc: "We take a look at the history of personal computers, and how they changed the world."
    },
    {
      url: "../src/assets/images/image-top-laptops.jpg",
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
