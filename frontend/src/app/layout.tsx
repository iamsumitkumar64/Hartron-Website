import './globals.css';

import { StyledEngineProvider } from "@mui/material";
import NextAppDirEmotionCacheProvider from "@/theme/emotion-cache";
import AppThemeProvider from "@/theme/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextAppDirEmotionCacheProvider options={{ key: "css", prepend: true }}>
          <StyledEngineProvider injectFirst>
            <AppThemeProvider>
              {children}
            </AppThemeProvider>
          </StyledEngineProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
