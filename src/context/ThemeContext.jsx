import { useReducer, createContext } from "react";

export const ThemeContext = createContext();

const changeContextValue = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeContextValue, {
    color: "#2563EB",
    mode: "light",
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider };
