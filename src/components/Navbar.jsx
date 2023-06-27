import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <div className="mb-8" style={{ background: color }}>
      <div className="max-w-screen-lg mx-auto px-6 flex items-center justify-between py-6">
        <Link
          to="/"
          className="text-white text-4xl font-bold hover:text-amber-200 transition"
        >
          <h1>NFCooking</h1>
        </Link>

        <Link
          to="/create"
          className="text-white text-lg border-2 rounded px-5 py-2 border-white hover:bg-white hover:text-black transition"
        >
          Create
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
