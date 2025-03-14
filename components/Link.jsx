function Link({ linkName }) {
  return (
    <li className="list-none   ">
      <a className="text-lg p-[10px]  block cursor-pointer hover:bg-red-300 rounded-[10px] transition-all duration-200 ">
        {linkName}
      </a>
    </li>
  );
}

export default Link;
