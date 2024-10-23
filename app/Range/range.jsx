export const Range = ({ name }) => {
  return (
    <input
      className="range range-primary w-full my-3"
      type="range"
      name={name}
      min={0}
      max={99}
    />
  );
};
