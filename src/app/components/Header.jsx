import Image from "next/image";

const Header = () => {
  return (
    <header>
      <a href="">
        <Image src="/logo.svg" alt="Apple logo" width={40} height={40} />
      </a>
      <nav>
        <ul>
          <li>
            <a href="">Mac</a>
          </li>
          <li>
            <a href="">iPhone</a>
          </li>
          <li>
            <a href="">iPad</a>
          </li>
          <li>
            <a className="active" href="">
              iWatch
            </a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <a href="">
          <Image src="/search.svg" alt="Search icon" width={20} height={20} />{" "}
        </a>
        <a href="">
          <Image src="/shopping-bag.svg" alt="shopping-bag icon" width={20} height={20} />{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
