import { createContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  setAndStoreTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  setAndStoreTheme: () => {},
});

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children }: props) => {
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? storedTheme : "light";
    } catch (error) {
      return "light";
    }
  });

  const setAndStoreTheme = (value: any) => {
    try {
      setTheme(value);
      localStorage.setItem("theme", value);
    } catch (error) {}
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, setAndStoreTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
