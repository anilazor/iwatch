"use client";
import { useState } from "react";
const Colors = () => {
  const [selectedImage, setSelectedImage] = useState("/navy.png");
  return (
    <div className="colors">
      <div className="navy" onClick={() => setSelectedImage("/navy.png")}></div>
      <div className="ocean" onClick={() => setSelectedImage("/ocean.png")}></div>
      <div className="mint" onClick={() => setSelectedImage("/mint.png")}></div>
    </div>
  );
};

export default Colors;
