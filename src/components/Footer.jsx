import React from "react";
import { useTheme } from "../hooks/useTheme";

function Footer() {
  const { color } = useTheme();
  return (
    <footer
      className="text-center lg:text-left"
      style={{ backgroundColor: color }}
    >
      <div className="p-4 text-center text-white">
        © 2023 Copyright:{" "}
        <a
          className="font-bold"
          href="https://github.com/nodirbekorifjonov"
          target={"_blank"}
        >
          Nodirbek Orifjonov
        </a>
      </div>
    </footer>
  );
}

export default Footer;
