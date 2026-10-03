import './globals.css';

import { StyledEngineProvider } from "@mui/material";
import AppThemeProvider from "@/theme/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StyledEngineProvider injectFirst>
          <AppThemeProvider>
            {children}
          </AppThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
