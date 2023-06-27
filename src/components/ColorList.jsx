import { useTheme } from "../hooks/useTheme";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";

const colors = [
  "#2563EB",
  "#F90716",
  "#00AD7C",
  "#FF008E",
  "#252525",
  "orangered",
];

function ColorList() {
  const { changeColor, changeMode, mode } = useTheme();

  const handleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-6 mb-8 flex items-center justify-between">
      <div>
        <WiMoonAltWaningCrescent1
          onClick={handleMode}
          className="w-[35px] h-[35px] cursor-pointer dark:text-white"
        />
      </div>

      <div className="flex gap-2">
        {colors.map((newColor) => {
          return (
            <span
              key={newColor}
              onClick={() => changeColor(newColor)}
              className="inline-block w-[35px] h-[35px] rounded-full cursor-pointer"
              style={{ backgroundColor: newColor }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ColorList;
