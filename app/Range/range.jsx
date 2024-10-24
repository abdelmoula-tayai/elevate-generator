export const Range = ({ name, value }) => {
  const [settings, setSettings] = useState({
    padding: 16,
    shadow: 10,
    radius: 16,
  });
  return (
    <input
      className="range range-primary w-full my-3"
      type="range"
      name={name}
      min={0}
      max={99}
      value={value}
      onChange={(e) => setSettings(value, Number(e.target.value))}
    />
  );
};
