import Link from "next/link";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../common/button";
import styles from "./course-card.module.css";

export interface CourseCardProps {
  slug: string;
  title: string;
  type: "IT_INDUSTRY" | "GOVT_BASIC";
  short_description: string;
  duration: string;
  highlights: string[];
}

export default function CourseCard({
  slug,
  title,
  type,
  short_description,
  duration,
  highlights,
}: CourseCardProps) {
  const isItGrade = type === "IT_INDUSTRY";

  return (
    <Box className={styles.card}>
      <Box>
        {/* Header with Badge and Title */}
        <Box className={styles.cardHeader}>
          <span
            className={`${styles.topBadge} ${
              isItGrade ? styles.itBadge : styles.govtBadge
            }`}
          >
            {isItGrade ? "IT Company Grade" : "Govt Recognized"}
          </span>

          <Typography variant="h3" sx={{ wordBreak: "break-word", mb: 1 }}>
            {title}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ color: "#475569", mb: 2 }}>
          {short_description}
        </Typography>

        <Box className={styles.durationBox}>
          <AccessTimeIcon sx={{ fontSize: 18 }} />
          <span>{duration}</span>
        </Box>

        {/* Highlights */}
        <Box className={styles.highlightsList}>
          {highlights?.slice(0, 4).map((highlight, index) => (
            <Box key={index} className={styles.highlightItem}>
              <CheckCircleOutlinedIcon className={styles.checkIcon} />
              <span>{highlight}</span>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer Actions */}
      <Box className={styles.footerActions}>
        <Link href={`/contact?course=${slug}`} style={{ textDecoration: "none", flex: 1 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 1.2 }}
          >
            Enquire Now
          </Button>
        </Link>

        <Link href={`/courses/${slug}`} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{ py: 1.2, borderColor: "divider", color: "text.primary" }}
          >
            Syllabus
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
