"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

  const [loading, setLoading] = useState("idle");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file.type !== "image/png") {
      alert("We only accept png files");
      event.target.value = "";
      return;
    }

    reader.onloadend = () => {
      const img = new Image();
      img.onload = () =>
        setImage({
          src: img.src,
          width: img.width,
          height: img.height,
          name: file.name,
        });
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  const handleDownload = async (isCopying) => {
    setLoading(isCopying ? "copying" : "downloading");

    const { blob } = await renderPNG({
      image,
      settings,
    });
    const url = URL.createObjectURL(blob);

    if (isCopying) {
      if (navigator.clipboard && navigator.clipboard.write) {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              ["image/png"]: blob,
            }),
          ]);
        } catch (err) {
          alert("Failed to copy image to clipboard.");
        }
      } else {
        alert("Copying to clipboard is not supported on this device.");
      }
    } else {
      const a = document.createElement("a");
      a.href = url;
      a.download = image.name.replace(".png", "-elevate.png");
      a.click();
    }

    setLoading("idle");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Menu
        setImage={setImage}
        setSettings={setSettings}
        handleImageUpload={handleImageUpload}
      />
      <div className="flex justify-center border w-3/4  mt-4 rounded-md max-w-lg">
        <ImageGenerator settings={settings} image={image} />
      </div>

      <button
        className="btn btn-primary my-3"
        disabled={!image || loading === "downloading"}
        onClick={() => {
          handleDownload(false);
        }}
      >
        Download
        {loading === "downloading" ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : null}
      </button>

      <button
        className="btn btn-active my-3"
        disabled={!image || loading === "copying"}
        onClick={() => {
          handleDownload(true);
        }}
      >
        copy
        {loading === "copying" ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : null}
      </button>
      <SpeedInsights />
    </div>
  );
}
