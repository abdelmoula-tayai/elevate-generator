export const ImageGenerator = ({ settings, image }) => {
  return (
    <div
      style={{
        padding: settings.padding,
        display: "flex",
        maxWidth: 400,
        boxSizing: "border-box",
      }}
    >
      {image !== null ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          style={{
            boxShadow: `0 0 ${settings.shadow}px rgba(0,0,0,.${settings.shadow})`,
            borderRadius: settings.radius,
            display: "flex",
          }}
          src={image.src}
          alt=""
          width={image.width}
        />
      ) : (
        <p>Upload an image first.</p>
      )}
    </div>
  );
};
