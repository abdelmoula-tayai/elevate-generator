export const Range = ({ name, value, setSettings }) => {
  const handleChange = (e) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: Number(e.target.value),
    }));
  };

  return (
    <input
      className="range range-primary w-full my-3"
      type="range"
      name={name}
      min={0}
      max={99}
      value={value}
      onChange={handleChange}
    />
  );
};
