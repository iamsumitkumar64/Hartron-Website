import Link from "next/link";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer/footer";
import { Box, Typography, Container } from "@mui/material";
import Button from "@/component/common/button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ backgroundColor: "background.default", minHeight: "70vh", display: "flex", alignItems: "center", py: 8 }}>
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 4,
              p: { xs: 3, sm: 6 },
              textAlign: "center",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", sm: "6rem" },
                fontWeight: 900,
                color: "primary.main",
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
                color: "text.primary",
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Page Not Found
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
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
                    backgroundColor: "primary.main",
                    color: "var(--text-on-dark)",
                    fontWeight: 900,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2.5,
                    fontSize: "1rem",
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
                    color: "text.primary",
                    borderColor: "divider",
                    fontWeight: 800,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2.5,
                    fontSize: "1rem",
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
