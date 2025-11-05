"use client";

import Image from "next/image";

const Options = ({ setSelectedImage }) => {
  return (
    <div className="col-1 row-3 flex h-[90px] items-start justify-around">
      <a onClick={() => setSelectedImage("/navy.png")}>
        <Image
          src="/navy.png"
          alt="Picture of iWatch in the color 'navy'"
          width={80}
          height={80}
        />
      </a>
      <a onClick={() => setSelectedImage("/ocean.png")}>
        <Image
          src="/ocean.png"
          alt="Picture of iWatch in the color 'ocean'"
          width={80}
          height={80}
        />
      </a>
      <a onClick={() => setSelectedImage("/mint.png")}>
        <Image
          src="/mint.png"
          alt="Picture of iWatch in the color 'mint'"
          width={80}
          height={80}
        />
      </a>
    </div>
  );
};

export default Options;
