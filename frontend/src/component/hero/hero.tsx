import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <Box className={styles.container}>
        {/* Left Column */}
        <Box className={styles.leftContent}>
          <Box className={styles.accreditationBadge}>
            <VerifiedUserIcon sx={{ fontSize: 18 }} />
            Official HARTRON Skill Centre • Director: Vijender Singh Nara
          </Box>

          <Typography variant="h1" className={styles.heroTitle}>
            Empowering Panipat Students with{" "}
            <span className={styles.heroHighlight}>Govt Computer Diplomas</span> & IT Industry Skills
          </Typography>

          <Typography className={styles.heroSubtitle}>
            Transform your career right next to SD College, Panipat. Specialized training in{" "}
            <strong>Government Typing Speed Tests (HSSC/HKRN)</strong>, <strong>Web Development</strong>,{" "}
            <strong>Cybersecurity</strong>, and <strong>DCA Computer Courses</strong> with 100% practical lab practice.
          </Typography>

          <Box className={styles.heroCtas}>
            <Link href="/courses" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                className={styles.primaryCta}
              >
                Explore All Courses
              </Button>
            </Link>

            <Link href="/courses/typing-speed" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                className={styles.secondaryCta}
                startIcon={<KeyboardIcon />}
              >
                Govt Typing Practice
              </Button>
            </Link>
          </Box>

          {/* Quick Metrics */}
          <Box className={styles.statsGrid}>
            <Box className={styles.statItem}>
              <Typography className={styles.statNumber}>25+ Yrs</Typography>
              <Typography className={styles.statLabel}>Trusted Excellence</Typography>
            </Box>
            <Box className={styles.statItem}>
              <Typography className={styles.statNumber}>15,000+</Typography>
              <Typography className={styles.statLabel}>Certified Alumni</Typography>
            </Box>
            <Box className={styles.statItem}>
              <Typography className={styles.statNumber}>100%</Typography>
              <Typography className={styles.statLabel}>Practical Computer Labs</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Column / Highlight Feature Box */}
        <Box className={styles.rightCard}>
          <Box className={styles.cardHeader}>
            <Box className={styles.directorAvatar}>VN</Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a" }}>
                Director's Vision
              </Typography>
              <Typography variant="body2" sx={{ color: "#2563eb", fontWeight: 700 }}>
                Vijender Singh Nara
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" sx={{ color: "#334155", fontStyle: "italic", lineHeight: 1.6 }}>
            "At Hartron Skill Centre SD College Panipat, our commitment is to equip every student with high-speed exam typing precision and high-demand IT software skills to guarantee career success."
          </Typography>

          <Box className={styles.cardFeatureList}>
            <Box className={styles.cardFeatureItem}>
              <span className={styles.checkDot}>✓</span>
              <Typography variant="body2" sx={{ fontWeight: 700, color: "#0f172a" }}>
                HSSC / HKRN / SSC Government Typing Test Software Drills
              </Typography>
            </Box>

            <Box className={styles.cardFeatureItem}>
              <span className={styles.checkDot}>✓</span>
              <Typography variant="body2" sx={{ fontWeight: 700, color: "#0f172a" }}>
                IT Company Industry Grade Web Development & Cybersecurity
              </Typography>
            </Box>

            <Box className={styles.cardFeatureItem}>
              <span className={styles.checkDot}>✓</span>
              <Typography variant="body2" sx={{ fontWeight: 700, color: "#0f172a" }}>
                Government Recognized DCA & Tally Prime Certificates
              </Typography>
            </Box>

            <Box className={styles.cardFeatureItem}>
              <span className={styles.checkDot}>✓</span>
              <Typography variant="body2" sx={{ fontWeight: 700, color: "#0f172a" }}>
                Prime Location: SD College Road, Panipat (Flexi Timings)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
