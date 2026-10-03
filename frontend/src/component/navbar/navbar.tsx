"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import TopBanner from "../top-banner/top-banner";
import styles from "./navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setMobileOpen(open);
  };

  return (
    <>
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
                Skill Centre • SD College Panipat
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
            <Button
              variant="outlined"
              className={styles.callBtn}
              startIcon={<PhoneIcon />}
              href="tel:+919812000000"
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
              sx={{ display: { md: "none" }, color: "#1e40af", ml: 1 }}
              onClick={toggleDrawer(true)}
              aria-label="open drawer"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </header>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280, p: 2 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#1e40af" }}>
              HARTRON Panipat
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {NAV_ITEMS.map((item) => (
              <ListItem key={item.href} disablePadding sx={{ mb: 1 }}>
                <Link href={item.href} style={{ textDecoration: "none", width: "100%" }} onClick={toggleDrawer(false)}>
                  <ListItemButton
                    selected={pathname === item.href}
                    sx={{
                      borderRadius: 2,
                      "&.Mui-selected": {
                        backgroundColor: "#eff6ff",
                        color: "#1e40af",
                        fontWeight: 800,
                      },
                    }}
                  >
                    <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 700 } } }} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Link href="/contact" style={{ textDecoration: "none", width: "100%" }} onClick={toggleDrawer(false)}>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#1e40af", fontWeight: 700, py: 1.2 }}
              >
                Apply / Enquiry Now
              </Button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
