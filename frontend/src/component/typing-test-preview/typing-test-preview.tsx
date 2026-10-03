import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import VerifiedIcon from "@mui/icons-material/Verified";
import styles from "./typing-test-preview.module.css";

export default function TypingTestPreview() {
  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        {/* Left Column */}
        <Box className={styles.leftText}>
          <Box className={styles.badge}>
            <VerifiedIcon sx={{ fontSize: 18 }} />
            HSSC • HKRN • SSC • High Court Clerical Typing Exam Software
          </Box>

          <Typography variant="h2" className={styles.title}>
            Master Government Exam Typing Speed with 95%+ Accuracy
          </Typography>

          <Typography className={styles.description}>
            Our Panipat center provides dedicated high-speed typing software that exactly mirrors official government exam interfaces. Practice English and Hindi (Mangal/Kruti Dev) with instant WPM scoring and error diagnostic reports.
          </Typography>

          <Box className={styles.featuresGrid}>
            <Box className={styles.featureBox}>
              <Typography className={styles.featureTitle}>35+ WPM Target</Typography>
              <Typography className={styles.featureSub}>Guaranteed speed growth within weeks</Typography>
            </Box>

            <Box className={styles.featureBox}>
              <Typography className={styles.featureTitle}>Strict Exam Rules</Typography>
              <Typography className={styles.featureSub}>Backspace restrictions & time limits</Typography>
            </Box>

            <Box className={styles.featureBox}>
              <Typography className={styles.featureTitle}>Dual Fonts</Typography>
              <Typography className={styles.featureSub}>English & Hindi Mangal Inscript / Kruti</Typography>
            </Box>

            <Box className={styles.featureBox}>
              <Typography className={styles.featureTitle}>Official Certificate</Typography>
              <Typography className={styles.featureSub}>HARTRON speed test verification</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Link href="/typing-practice" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#1e40af",
                  fontWeight: 900,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": { backgroundColor: "#f8fafc" },
                }}
                startIcon={<KeyboardIcon />}
              >
                Start Free Interactive Demo
              </Button>
            </Link>

            <Link href="/courses/typing-speed" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.6)",
                  fontWeight: 700,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": { borderColor: "#ffffff", backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                View Course Syllabus
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Right Column (Software Interface Preview Card) */}
        <Box className={styles.softwareCard}>
          <Box className={styles.screenHeader}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#1e40af" }}>
              HARTRON Govt Exam Simulator
            </Typography>
            <Box className={styles.metricBadge}>Timer: 09:42 | Speed: 42 WPM</Box>
          </Box>

          <Typography variant="body2" sx={{ fontWeight: 700, color: "#475569" }}>
            Passage Preview (HSSC Clerical Pattern):
          </Typography>

          <Box className={styles.samplePassage}>
            The Haryana State Electronics Development Corporation Limited (HARTRON) provides state-of-the-art computer education across Haryana.{" "}
            <span className={styles.typedText}>
              Students at SD College Panipat campus under Director Vijender Singh Nara receive intensive typing drills.
            </span>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 700, color: "#16a34a" }}>
              ✓ Accuracy: 98.4% • Gross Speed: 44 WPM • Net Speed: 42 WPM
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
