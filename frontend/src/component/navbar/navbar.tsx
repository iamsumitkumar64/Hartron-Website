"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import TopBanner from "../top-banner/top-banner";
import Button from "../common/button";
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
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "85vw", sm: 320 },
              maxWidth: 320,
              borderRadius: 0, // Sharp square edges for drawer container
              backgroundColor: "#ffffff",
              boxShadow: "-8px 0 30px rgba(15, 23, 42, 0.15)",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", p: 0 }} role="presentation">
          {/* Drawer Header */}
          <Box
            sx={{
              p: 2.5,
              backgroundColor: "#ffffff",
              borderBottom: "1px solid #e2e8f0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  backgroundColor: "#1e40af",
                  color: "#ffffff",
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
                <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 900, fontSize: "1rem", lineHeight: 1.2 }}>
                  HARTRON
                </Typography>
                <Typography variant="caption" sx={{ color: "#2563eb", fontSize: "0.725rem", fontWeight: 700 }}>
                  SD College Panipat
                </Typography>
              </Box>
            </Box>

            <IconButton onClick={toggleDrawer(false)} sx={{ color: "#64748b" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Nav List */}
          <Box sx={{ flex: 1, p: 2, overflowY: "auto" }}>
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
                            backgroundColor: "#eff6ff",
                            color: "#1e40af",
                            borderLeft: "4px solid #1e40af",
                            "& .MuiTypography-root": {
                              fontWeight: 800,
                              color: "#1e40af",
                            },
                          },
                          "&:hover": {
                            backgroundColor: "#f8fafc",
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
                                color: isActive ? "#1e40af" : "#334155",
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
          <Box sx={{ p: 2.5, borderTop: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
            <Link href="/contact" style={{ textDecoration: "none", width: "100%" }} onClick={toggleDrawer(false)}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<SchoolIcon />}
                sx={{
                  backgroundColor: "#1e40af",
                  fontWeight: 800,
                  py: 1.4,
                  borderRadius: "10px", // Keeps border-radius on buttons!
                  fontSize: "0.95rem",
                  boxShadow: "0 4px 12px rgba(30, 64, 175, 0.25)",
                }}
              >
                Apply / Enquiry Now
              </Button>
            </Link>

            <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 1.5, color: "#64748b", fontWeight: 600 }}>
              Director Vijender Singh Nara • +91 90341-27171
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
