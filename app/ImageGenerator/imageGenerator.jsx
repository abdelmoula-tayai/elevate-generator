import Image from "next/image";

export const ImageGenerator = ({ settings, image }) => {
  return (
    <div
      className="flex justify-center border w-3/4 py-5 mt-4 rounded-md"
      style={{ padding: settings.padding }}
    >
      {image !== null ? (
        <Image
          style={{
            boxShadow: `0 0 ${settings.shadow}px rgba(0,0,0,.${settings.shadow})`,
            borderRadius: settings.radius,
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
  );
};
