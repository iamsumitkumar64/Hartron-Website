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
    <Box className={styles.stickyHeaderWrapper}>
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
              size="small"
              className={styles.themeToggleBtnDesktop}
              aria-label="Toggle light/dark theme"
              title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
            >
              {mode === "dark" ? <LightModeIcon className={styles.darkIcon} /> : <DarkModeIcon className={styles.lightIcon} />}
            </IconButton>

            <Button
              variant="outlined"
              className={`${styles.callBtn} ${styles.callBtnHideMobile}`}
              startIcon={<PhoneIcon />}
              href="tel:+919034127171"
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
              className={styles.menuIconButton}
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
            className: styles.drawerPaper,
          },
        }}
      >
        <Box className={styles.drawerContainer} role="presentation">
          {/* Drawer Header */}
          <Box className={styles.drawerHeader}>
            <Box className={styles.drawerBrandBox}>
              <Box className={styles.drawerBadge}>H</Box>
              <Box>
                <Typography variant="h6" className={styles.drawerTitle}>
                  HARTRON
                </Typography>
                <Typography variant="caption" className={styles.drawerSubtitle}>
                  Panipat Campus
                </Typography>
              </Box>
            </Box>

            <Box className={styles.drawerActions}>
              {/* Theme Toggle Button Mobile Sidebar */}
              <IconButton onClick={toggleColorMode} color="inherit" size="small" aria-label="Toggle theme">
                {mode === "dark" ? <LightModeIcon className={styles.darkIcon} /> : <DarkModeIcon className={styles.lightIcon} />}
              </IconButton>
              <IconButton onClick={toggleDrawer(false)} className={styles.closeIconBtn}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Nav List */}
          <Box className={styles.drawerBody}>
            <List disablePadding>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <ListItem key={item.href} disablePadding className={styles.drawerListItem}>
                    <Link href={item.href} className={styles.drawerListLink} onClick={toggleDrawer(false)}>
                      <ListItemButton
                        selected={isActive}
                        className={`${styles.drawerItemButton} ${isActive ? styles.drawerItemButtonSelected : ""}`}
                      >
                        <ListItemText
                          primary={item.label}
                          slotProps={{
                            primary: {
                              className: isActive ? styles.drawerTextActive : styles.drawerText,
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
          <Box className={styles.drawerFooter}>
            <Link href="/contact" className={styles.drawerListLink} onClick={toggleDrawer(false)}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<SchoolIcon />}
                className={styles.drawerApplyBtn}
              >
                Apply / Enquiry Now
              </Button>
            </Link>

            <Typography variant="caption" className={styles.drawerFooterText}>
              Director Vijender Singh Nara • +91 90341-27171
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
