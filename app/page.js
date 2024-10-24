"use client";
import { useState } from "react";
import { ImageGenerator } from "./ImageGenerator/imageGenerator";
import { Menu } from "./Menu/menu";

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
    </div>
  );
}
