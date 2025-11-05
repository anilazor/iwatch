import Image from "next/image";

const Header = () => {
  return (
    <header className="col-start-2 col-end-5 row-start-1 flex h-30 items-center justify-between">
      <a href="">
        <Image src="/logo.svg" alt="Apple logo" width={40} height={40} />
      </a>
      <nav>
        <ul className="flex w-xl justify-between">
          <li>
            <a href="">Mac</a>
          </li>
          <li>
            <a href="">iPhone</a>
          </li>
          <li>
            <p>
              {" "}
              <a href="">iPad</a>
            </p>
          </li>
          <li>
            <a className="" href="">
              iWatch
            </a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </nav>
      <div className="buttons flex justify-between">
        <a href="" className="">
          <Image
            src="/search.svg"
            alt="Search icon"
            width={20}
            height={20}
          />{" "}
        </a>
        <a href="">
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag icon"
            width={20}
            height={20}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
