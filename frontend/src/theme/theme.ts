import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1e40af", // Hartron Royal Blue
      light: "#3b82f6",
      dark: "#1e3a8a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2563eb", // Vibrant Blue
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
      default: "#ffffff",
      paper: "#f8fafc",
    },
    text: {
      primary: "#0f172a", // Dark Slate for high contrast readability
      secondary: "#334155", // Medium Slate
      disabled: "#94a3b8",
    },
    divider: "#e2e8f0",
  },
  typography: {
    fontFamily: "'Public Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
      fontWeight: 900,
      color: "#0f172a",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
      fontWeight: 900,
      color: "#0f172a",
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
      fontWeight: 800,
      color: "#0f172a",
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
      fontWeight: 800,
      color: "#0f172a",
      lineHeight: 1.35,
    },
    h5: {
      fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
      fontWeight: 700,
      color: "#1e40af",
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
      fontWeight: 700,
      color: "#0f172a",
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
      color: "#334155",
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: "0.9rem",
      fontWeight: 700,
      color: "#1e40af",
    },
    body1: {
      fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
      color: "#334155",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.85rem",
      color: "#475569",
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
          backgroundColor: "#ffffff",
          color: "#0f172a",
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
          backgroundColor: "#1e40af",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#1d4ed8",
          },
        },
        outlined: {
          borderColor: "#bfdbfe",
          color: "#1e40af",
          "&:hover": {
            borderColor: "#1e40af",
            backgroundColor: "#eff6ff",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 6px -1px rgba(15, 23, 42, 0.04), 0 2px 4px -2px rgba(15, 23, 42, 0.03)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 4px 6px -1px rgba(15, 23, 42, 0.03)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 800,
          borderRadius: "9999px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: "#cbd5e1",
            },
            "&:hover fieldset": {
              borderColor: "#2563eb",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1e40af",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#475569",
            fontWeight: 600,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          fontWeight: 700,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
