"use client";

import Link from "next/link";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer/footer";
import { Box, Button, Typography, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ backgroundColor: "#f8fafc", minHeight: "70vh", display: "flex", alignItems: "center", py: 8 }}>
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 4,
              p: { xs: 3, sm: 6 },
              textAlign: "center",
              boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", sm: "6rem" },
                fontWeight: 900,
                color: "#1e40af",
                lineHeight: 1,
                mb: 1,
              }}
            >
              404
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#0f172a",
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Page Not Found
            </Typography>

            <Typography
              sx={{
                color: "#475569",
                maxWidth: 540,
                mx: "auto",
                mb: 4,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.6,
              }}
            >
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  startIcon={<HomeIcon />}
                  sx={{
                    backgroundColor: "#1e40af",
                    color: "#ffffff",
                    fontWeight: 900,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2.5,
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#1d4ed8" },
                  }}
                >
                  Back to Home Page
                </Button>
              </Link>

              <Link href="/courses" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  sx={{
                    color: "#0f172a",
                    borderColor: "#cbd5e1",
                    fontWeight: 800,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2.5,
                    fontSize: "1rem",
                    "&:hover": { borderColor: "#1e40af", backgroundColor: "#f8fafc" },
                  }}
                >
                  View All Courses
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
