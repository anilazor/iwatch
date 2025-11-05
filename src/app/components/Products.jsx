"use client";
import { useState } from "react";
import Image from "next/image";
import Options from "./Options";

const Products = () => {
  const [selectedImage, setSelectedImage] = useState("/navy.png");
  return (
    <div className="products-wrapper col-span-2 row-span-3 grid grid-cols-subgrid grid-rows-subgrid">
      <div className="display col-1">
        <Image
          src={selectedImage}
          alt="Picture of iWatch in the color 'navy'"
          width={500}
          height={500}
        />
      </div>
      <div className="colors col-3 row-1 h-20 w-5 self-center *:size-5 *:rounded-full *:hover:cursor-pointer *:active:outline-2">
        <div
          className={`selectedImage === "/navy.png" ? "navy active" : "navy"} onClick={() => setSelectedImage("/navy.png") my-4 bg-[#404354]`}
        ></div>
        <div
          className={`selectedImage === "/ocean.png" ? "ocean active" : "ocean" bg-[#ddf7ff]`}
          onClick={() => setSelectedImage("/ocean.png")}
        ></div>
        <div
          className={`selectedImage === "/mint.png" ? "mint active" : "mint" bg-[#58d7c4] focus:outline-2`}
          onClick={() => setSelectedImage("/mint.png")}
        ></div>
      </div>
      <Options setSelectedImage={setSelectedImage} />
    </div>
  );
};

export default Products;
