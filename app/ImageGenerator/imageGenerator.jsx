import Image from "next/image";

export const ImageGenerator = ({ settings, image }) => {
  return (
    <>
      <div style={{ padding: settings.padding, display: "flex" }}>
        {image !== null ? (
          <Image
            style={{
              boxShadow: `0 0 ${settings.shadow}px rgba(0,0,0,.${settings.shadow})`,
              borderRadius: settings.radius,
              display: "flex",
            }}
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
          />
        ) : (
          <p>Upload an image first.</p>
        )}
      </div>
    </>
  );
};
