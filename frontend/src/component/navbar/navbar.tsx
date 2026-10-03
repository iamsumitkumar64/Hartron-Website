"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TopBanner from "../top-banner/top-banner";
import Button from "../common/button";
import { useColorMode } from "@/theme/theme-provider";
import styles from "./navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Typing Practice", href: "/typing-practice" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();

  const toggleDrawer = (open: boolean) => () => {
    setMobileOpen(open);
  };

  return (
    <Box sx={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}>
      <TopBanner />
      <header className={styles.header}>
        <Box className={styles.container}>
          {/* Logo Brand */}
          <Link href="/" className={styles.logoBox}>
            <Box className={styles.logoBadge}>H</Box>
            <Box className={styles.logoTextContainer}>
              <Typography component="span" className={styles.brandTitle}>
                HARTRON
              </Typography>
              <Typography component="span" className={styles.brandSubtitle}>
                Skill Centre • Panipat
              </Typography>
            </Box>
          </Link>

          {/* Nav Links Desktop */}
          <nav className={styles.navLinks}>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Box */}
          <Box className={styles.ctaBox}>
            {/* Theme Toggle Button Desktop */}
            <IconButton
              onClick={toggleColorMode}
              color="inherit"
              sx={{ display: { xs: "none", md: "inline-flex" }, border: "1px solid", borderColor: "var(--border-color)", p: 1 }}
              aria-label="Toggle light/dark theme"
              title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
            >
              {mode === "dark" ? <LightModeIcon sx={{ color: "#fbbf24" }} /> : <DarkModeIcon sx={{ color: "var(--primary-main)" }} />}
            </IconButton>

            <Button
              variant="outlined"
              className={styles.callBtn}
              startIcon={<PhoneIcon />}
              href="tel:+919034127171"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              Contact
            </Button>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                className={styles.enrollBtn}
                startIcon={<SchoolIcon />}
              >
                Enroll Now
              </Button>
            </Link>

            <IconButton
              sx={{ display: { md: "none" }, color: "var(--primary-main)", ml: 0.5 }}
              onClick={toggleDrawer(true)}
              aria-label="open drawer"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "85vw", sm: 320 },
              maxWidth: 320,
              borderRadius: 0,
              backgroundColor: "background.paper",
              backgroundImage: "none",
              color: "text.primary",
              boxShadow: "var(--shadow-lg)",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", p: 0 }} role="presentation">
          {/* Drawer Header */}
          <Box
            sx={{
              p: 2.5,
              backgroundColor: "background.paper",
              borderBottom: "1px solid",
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  color: "var(--text-on-dark)",
                  width: 34,
                  height: 34,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                }}
              >
                H
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 900, fontSize: "1rem", lineHeight: 1.2 }}>
                  HARTRON
                </Typography>
                <Typography variant="caption" sx={{ color: "primary.main", fontSize: "0.725rem", fontWeight: 700 }}>
                  Panipat Campus
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Theme Toggle Button Mobile Sidebar */}
              <IconButton onClick={toggleColorMode} color="inherit" size="small" aria-label="Toggle theme">
                {mode === "dark" ? <LightModeIcon sx={{ color: "#fbbf24" }} /> : <DarkModeIcon sx={{ color: "primary.main" }} />}
              </IconButton>
              <IconButton onClick={toggleDrawer(false)} sx={{ color: "text.secondary" }}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Nav List */}
          <Box sx={{ flex: 1, p: 2, overflowY: "auto", backgroundColor: "background.default" }}>
            <List disablePadding>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <ListItem key={item.href} disablePadding sx={{ mb: 1 }}>
                    <Link href={item.href} style={{ textDecoration: "none", width: "100%" }} onClick={toggleDrawer(false)}>
                      <ListItemButton
                        selected={isActive}
                        sx={{
                          borderRadius: "10px",
                          py: 1.2,
                          px: 2,
                          transition: "all 0.2s",
                          "&.Mui-selected": {
                            backgroundColor: "var(--primary-bg)",
                            color: "primary.main",
                            borderLeft: "4px solid",
                            borderColor: "primary.main",
                            "& .MuiTypography-root": {
                              fontWeight: 800,
                              color: "primary.main",
                            },
                          },
                          "&:hover": {
                            backgroundColor: "background.paper",
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          slotProps={{
                            primary: {
                              sx: {
                                fontWeight: isActive ? 800 : 700,
                                fontSize: "0.95rem",
                                color: isActive ? "primary.main" : "text.primary",
                              },
                            },
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* Drawer Footer CTA */}
          <Box sx={{ p: 2.5, borderTop: "1px solid", borderColor: "divider", backgroundColor: "background.paper" }}>
            <Link href="/contact" style={{ textDecoration: "none", width: "100%" }} onClick={toggleDrawer(false)}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<SchoolIcon />}
                sx={{
                  backgroundColor: "primary.main",
                  color: "#ffffff",
                  fontWeight: 800,
                  py: 1.4,
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                Apply / Enquiry Now
              </Button>
            </Link>

            <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 1.5, color: "text.secondary", fontWeight: 600 }}>
              Director Vijender Singh Nara • +91 90341-27171
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
