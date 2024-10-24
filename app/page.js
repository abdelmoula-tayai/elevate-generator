"use client";
import { useState } from "react";
import { ImageGenerator } from "./ImageGenerator/imageGenerator";
import { Menu } from "./Menu/menu";
import { renderPNG } from "./render-png";

export default function Home() {
  const [image, setImage] = useState(null);
  const [settings, setSettings] = useState({
    padding: 16,
    shadow: 10,
    radius: 16,
  });

  return (
    <div className="flex justify-center items-center flex-col">
      <Menu setImage={setImage} setSettings={setSettings} />
      <ImageGenerator settings={settings} image={image} />
      <button
        className="btn my-3"
        disabled={!image}
        onClick={async () => {
          const { blob } = await renderPNG({
            image,
            settings,
          });

          const url = URL.createObjectURL(blob);

          const a = document.createElement("a");
          a.href = url;
          a.download = image.name.replace(".png", "-elevate.png");
          a.click();
        }}
      >
        Download
      </button>
    </div>
  );
}
