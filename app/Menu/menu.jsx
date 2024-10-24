"use client";
import { useState } from "react";
import { Range } from "../Range/range";

export const Menu = ({ setImage, image }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();
      img.onload = () =>
        setImage({
          src: img.src,
        });
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-start flex-col bg-slate-800 w-3/4 px-10 py-6 mt-5 rounded-xl shadow-lg">
      <h1 className="font-bold text-2xl mb-5">Settings</h1>
      <p>File</p>
      <input
        className="file-input file-input-primary mb-5 mt-2"
        type="file"
        name="image"
        onChange={handleImageUpload}
      />
      <p>padding</p>
      <Range name={"padding"} />
      <p>shadow</p>
      <Range name={"shadow"} />
      <p>radius</p>
      <Range name={"radius"} />
    </div>
  );
};
