"use client";
import { useState } from "react";
import Image from "next/image";
import Options from "./Options";

const Products = () => {
  const [selectedImage, setSelectedImage] = useState("/navy.png");
  return (
    <div className="products-wrapper">
      <div className="display">
        <Image src={selectedImage} alt="Picture of iWatch in the color 'navy" width={500} height={500} />
      </div>
      <div className="colors">
        <div className={selectedImage === "/navy.png" ? "navy active" : "navy"} onClick={() => setSelectedImage("/navy.png")}></div>
        <div className={selectedImage === "/ocean.png" ? "ocean active" : "ocean"} onClick={() => setSelectedImage("/ocean.png")}></div>
        <div className={selectedImage === "/mint.png" ? "mint active" : "mint"} onClick={() => setSelectedImage("/mint.png")}></div>
      </div>
      <Options setSelectedImage={setSelectedImage} />
    </div>
  );
};

export default Products;
