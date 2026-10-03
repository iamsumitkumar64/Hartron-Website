import { Metadata } from "next";
import Navbar from "@/component/navbar/navbar";
import DirectorSection from "@/component/director-section/director-section";
import WhyChooseUs from "@/component/why-choose-us/why-choose-us";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | Director Vijender Singh Nara | Hartron Skill Centre Panipat",
  description:
    "Learn about Hartron Skill Centre Panipat and Director Vijender Singh Nara's mission to provide government recognized computer courses & IT company grade training.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Box className={styles.headerSection}>
          <Box className={styles.headerContainer}>
            <Typography className={styles.badge}>
              Institutional Excellence & History
            </Typography>
            <Typography variant="h1" className={styles.title}>
              About Hartron Skill Centre Panipat
            </Typography>
            <Typography className={styles.subTitle}>
              Directed by <strong>Vijender Singh Nara</strong>, our center is Panipat's premier computer education institution.
            </Typography>
          </Box>
        </Box>

        <DirectorSection />

        <Box className={styles.missionSection}>
          <Box className={styles.missionContainer}>
            <Typography variant="h3" className={styles.missionHeading}>
              Our Educational Mission
            </Typography>
            <Typography className={styles.missionText}>
              For over two decades, Hartron Skill Centre Panipat has stood as a beacon of technological empowerment. Under Director Vijender Singh Nara, we bridge the gap between traditional academic degrees and real-world employment.
            </Typography>
            <Typography className={styles.missionText}>
              We specialize in preparing candidates for Haryana Government competitive exams requiring certified typing speed tests (HSSC / HKRN / High Court Clerical) as well as modern IT Industry grade software careers in Web Development and Cybersecurity.
            </Typography>
          </Box>
        </Box>

        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
