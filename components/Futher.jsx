import img from "../assets/images/image-web-3-desktop.jpg";
import Button from "./Button";
function Futher() {
  return (
    <div className="grow">
      <div>
        <img
          src={img}
          alt="futher"
          className="max-w-[100%] object-contain"
        ></img>
      </div>
      <div className="pt-[20px] flex justify-center items-center gap-[20px] w-full">
        <h1 className="text-4xl font-bold text-center text-wrap items-start ">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex justify-center items-center gap-[20px] flex-col w-full">
          <p className="text-gray-400 text-lg text-center max-w-[500px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, purus sit amet volutpat semper, libero ex dignissim
            turpis, sit amet cursus libero nisl in libero.
          </p>
          <Button content="Read More" />
        </div>
      </div>
    </div>
  );
}

export default Futher;
