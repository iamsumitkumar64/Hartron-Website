import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";

export const getAppTheme = (mode: "light" | "dark"): Theme => {
  const isDark = mode === "dark";

  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? "#3b82f6" : "#1e40af", // Hartron Royal Blue
        light: "#60a5fa",
        dark: "#1e3a8a",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#2563eb",
        light: "#60a5fa",
        dark: "#1d4ed8",
        contrastText: "#ffffff",
      },
      success: {
        main: "#16a34a",
        light: "#4ade80",
        dark: "#15803d",
        contrastText: "#ffffff",
      },
      warning: {
        main: "#d97706",
        light: "#fbbf24",
        dark: "#b45309",
        contrastText: "#ffffff",
      },
      error: {
        main: "#dc2626",
        light: "#f87171",
        dark: "#b91c1c",
        contrastText: "#ffffff",
      },
      background: {
        default: isDark ? "#0f172a" : "#ffffff",
        paper: isDark ? "#1e293b" : "#f8fafc",
      },
      text: {
        primary: isDark ? "#f8fafc" : "#0f172a",
        secondary: isDark ? "#94a3b8" : "#334155",
        disabled: "#64748b",
      },
      divider: isDark ? "#334155" : "#e2e8f0",
    },
    typography: {
      fontFamily: "'Public Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      h1: {
        fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
        fontWeight: 900,
        color: isDark ? "#f8fafc" : "#0f172a",
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
        fontWeight: 900,
        color: isDark ? "#f8fafc" : "#0f172a",
        lineHeight: 1.25,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
        fontWeight: 800,
        color: isDark ? "#f8fafc" : "#0f172a",
        lineHeight: 1.3,
      },
      h4: {
        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
        fontWeight: 800,
        color: isDark ? "#f8fafc" : "#0f172a",
        lineHeight: 1.35,
      },
      h5: {
        fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
        fontWeight: 700,
        color: isDark ? "#60a5fa" : "#1e40af",
        lineHeight: 1.4,
      },
      h6: {
        fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
        fontWeight: 700,
        color: isDark ? "#f8fafc" : "#0f172a",
        lineHeight: 1.4,
      },
      subtitle1: {
        fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
        color: isDark ? "#cbd5e1" : "#334155",
        lineHeight: 1.6,
      },
      subtitle2: {
        fontSize: "0.9rem",
        fontWeight: 700,
        color: isDark ? "#60a5fa" : "#1e40af",
      },
      body1: {
        fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
        color: isDark ? "#cbd5e1" : "#334155",
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.85rem",
        color: isDark ? "#94a3b8" : "#475569",
        lineHeight: 1.55,
      },
      button: {
        fontWeight: 800,
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDark ? "#0f172a" : "#ffffff",
            color: isDark ? "#f8fafc" : "#0f172a",
            overflowX: "hidden",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
            fontWeight: 800,
            textTransform: "none",
            padding: "10px 20px",
            boxShadow: "none",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(30, 64, 175, 0.12)",
            },
          },
          contained: {
            backgroundColor: isDark ? "#2563eb" : "#1e40af",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: isDark ? "#1d4ed8" : "#1d4ed8",
            },
          },
          outlined: {
            borderColor: isDark ? "#475569" : "#cbd5e1",
            color: isDark ? "#60a5fa" : "#1e40af",
            "&:hover": {
              borderColor: isDark ? "#60a5fa" : "#1e40af",
              backgroundColor: isDark ? "rgba(96, 165, 250, 0.1)" : "#eff6ff",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "14px",
            boxShadow: isDark
              ? "0 4px 20px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(15, 23, 42, 0.05)",
            border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
            boxShadow: isDark
              ? "0 6px 24px rgba(0,0,0,0.5)"
              : "0 6px 24px rgba(15, 23, 42, 0.06)",
            border: isDark ? "1px solid #334155" : "1px solid #f1f5f9",
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: isDark ? "#0f172a" : "#ffffff",
              "& fieldset": {
                borderColor: isDark ? "#475569" : "#cbd5e1",
              },
              "&:hover fieldset": {
                borderColor: isDark ? "#60a5fa" : "#1e40af",
              },
              "&.Mui-focused fieldset": {
                borderColor: isDark ? "#60a5fa" : "#1e40af",
              },
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            fontWeight: 700,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};

const defaultTheme = getAppTheme("light");
export default defaultTheme;
