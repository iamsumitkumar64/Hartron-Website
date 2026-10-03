import Link from "next/link";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer/footer";
import { Box, Typography, Container } from "@mui/material";
import Button from "@/component/common/button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Box component="main" className={styles.main}>
        <Container maxWidth="md">
          <Box className={styles.card}>
            <Typography variant="h1" className={styles.statusCode}>
              404
            </Typography>

            <Typography variant="h4" className={styles.title}>
              Page Not Found
            </Typography>

            <Typography className={styles.description}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>

            <Box className={styles.actions}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  startIcon={<HomeIcon />}
                  className={styles.homeBtn}
                >
                  Back to Home Page
                </Button>
              </Link>

              <Link href="/courses" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  className={styles.coursesBtn}
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
