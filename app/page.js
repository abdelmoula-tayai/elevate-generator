"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu } from "./Menu/menu";

export default function Home() {
  const [image, setImage] = useState(null);
  console.log(image);
  return (
    <div className="flex justify-center items-center flex-col">
      <Menu setImage={setImage} />
      <div className="flex justify-center border w-3/4 py-5 mt-4 rounded-md">
        {image !== null ? (
          <Image src={image.src} alt="" width={250} height={650} />
        ) : (
          <p>Upload an image first.</p>
        )}
      </div>
    </div>
  );
}
