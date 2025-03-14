import { useState } from "react";
import Logo from "./Logo";
import Link from "./Link";

function Header() {
  const [link, setLink] = useState([
    "Home",
    "New",
    "Popular",
    "Trending",
    "Categories"
  ]);

  return (
    <div className="w-full">
      <div className="container mx-auto p-[30px]  flex justify-between items-center flex-col gap-[20px] md:flex-row">
        <Logo />
        <nav>
          <ul className="flex justify-center items-center gap-[10px] flex-wrap">
            {link.map((linkName) => (
              <Link key={linkName} linkName={linkName} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
