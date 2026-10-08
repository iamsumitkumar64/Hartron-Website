import Link from "next/link";
import { Box, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styles from "./director-section.module.css";

export default function DirectorSection() {
  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        {/* Profile Card */}
        <Box className={styles.profileCard}>
          <Box className={styles.profileAvatar}>VN</Box>
          <Typography className={styles.name}>Vijender Singh Nara</Typography>
          <Typography className={styles.title}>Manager & Head of Institute</Typography>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Box className={styles.locationBadge}>
              <span>🏢 Hartron Skill Centre</span>
              <span>📍 Near SD College Panipat</span>
            </Box>
          </Link>
          <Typography variant="body2" className={styles.bioText}>
            Dedicated to empowering Haryana's youth with official government computer certifications & IT company grade software skills.
          </Typography>
        </Box>

        {/* Leadership Vision Content */}
        <Box className={styles.rightContent}>
          <Typography className={styles.subHeading}>Manager's Desk</Typography>
          <Typography variant="h2">
            Building Skilled Leaders for Government & IT Corporate Careers
          </Typography>

          <Box className={styles.quoteBox}>
            <FormatQuoteIcon className={styles.quoteIcon} />
            "Our objective at Hartron Skill Centre Panipat is to build unwavering confidence in every student. Whether you are aiming for a Haryana Govt clerk typing exam or looking to break into full stack web development and cybersecurity, we ensure 100% practical lab practice and individual guidance."
          </Box>

          <Typography variant="body1" className={styles.bodyText}>
            Under the leadership of Manager <strong>Vijender Singh Nara</strong>, our center has trained thousands of successful students who are currently serving in Haryana State Government departments, courts, banks, and top IT firms across India.
          </Typography>

          <Box className={styles.pillsGrid}>
            <Box className={styles.pill}>✓ 25+ Years Institutional Leadership</Box>
            <Box className={styles.pill}>✓ Govt Certified Faculty</Box>
            <Box className={styles.pill}>✓ Specialized Typing Speed Lab</Box>
            <Box className={styles.pill}>✓ SD College Road Panipat Location</Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
