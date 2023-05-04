import back from "../assets/back.svg";

export default function Back({ handleClick }) {
  return (
    <button onClick={handleClick} className="flex gap-2 items-center">
      <img src={back} alt="" className="h-[20px] w-[20px]" /> back
    </button>
  );
}
