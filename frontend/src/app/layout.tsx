import './globals.css';

import { StyledEngineProvider } from "@mui/material";
import StoreProvideLayout from '@/layout/store/provider';
import SnackBarLayout from '@/layout/snackbar/snackbar';
import AppThemeProvider from "@/theme/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          <AppThemeProvider>
            <StoreProvideLayout>
              <SnackBarLayout>
                {children}
              </SnackBarLayout>
            </StoreProvideLayout>
          </AppThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
