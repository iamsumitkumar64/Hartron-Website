"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { getAppTheme } from "./theme";

type ThemeMode = "light" | "dark";

interface ColorModeContextType {
  mode: ThemeMode;
  toggleColorMode: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  setMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setModeState] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("hartron_theme_mode") as ThemeMode | null;
    if (savedMode === "light" || savedMode === "dark") {
      setModeState(savedMode);
    } else {
      setModeState(prefersDarkMode ? "dark" : "light");
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setModeState((prevMode) => {
          const nextMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("hartron_theme_mode", nextMode);
          return nextMode;
        });
      },
      setMode: (newMode: ThemeMode) => {
        setModeState(newMode);
        localStorage.setItem("hartron_theme_mode", newMode);
      },
    }),
    [mode]
  );

  const activeTheme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
