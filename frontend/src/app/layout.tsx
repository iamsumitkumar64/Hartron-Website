import './globals.css';

import NextAppDirEmotionCacheProvider from "@/theme/emotion-cache";
import AppThemeProvider from "@/theme/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextAppDirEmotionCacheProvider options={{ key: "mui", prepend: true }}>
          <AppThemeProvider>
            {children}
          </AppThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
