export const ImageGenerator = ({ settings, image }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: settings.padding,
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
        />
      ) : (
        <p>Upload an image first.</p>
      )}
    </div>
  );
};
