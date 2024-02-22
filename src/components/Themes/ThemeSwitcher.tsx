"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

type Props = {
  text?: string;
};

export default function ThemeSwitcher({ text }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        <FontAwesomeIcon
          icon={theme === "dark" ? faSun : faMoon}
          className="text-lg"
        />
        &nbsp;&nbsp;{text}
      </button>
    </div>
  );
}
