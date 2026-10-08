import { Box, Typography } from "@mui/material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SpeedIcon from "@mui/icons-material/Speed";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import styles from "./why-choose-us.module.css";

const FEATURES = [
  {
    icon: <DesktopWindowsIcon fontSize="large" />,
    title: "100% Practical Computer Labs",
    text: "1:1 computer workstation allocation with high-speed internet and updated development/office tools for maximum hands-on practice.",
  },
  {
    icon: <CardMembershipIcon fontSize="large" />,
    title: "Govt Recognized Certification",
    text: "Official HARTRON certification valid across all Haryana Govt departments, HSSC, HKRN, Central Govt, and corporate companies.",
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Govt Exam Typing Software",
    text: "Specialized speed & accuracy typing software engineered specifically for HSSC / High Court clerk typing test preparation.",
  },
  {
    icon: <SupervisorAccountIcon fontSize="large" />,
    title: "Manager Vijender Singh Nara's Guidance",
    text: "Direct leadership & mentorship from Manager Vijender Singh Nara ensuring individual attention and structured learning progression.",
  },
  {
    icon: <WorkIcon fontSize="large" />,
    title: "Job Placement Support",
    text: "Resume building, mock interviews, and career placement assistance for IT web development, cybersecurity, and office clerical roles.",
  },
  {
    icon: <PlaceIcon fontSize="large" />,
    title: "Prime Location (Near SD College)",
    text: "Situated right on SD College Road, Panipat with morning, afternoon, and evening flexible batch schedules for students.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Box className={styles.header}>
          <Typography className={styles.subHeading}>Why Choose Us</Typography>
          <Typography variant="h2">
            Panipat's Premier Government & IT Computer Skill Center
          </Typography>
        </Box>

        <Box className={styles.grid}>
          {FEATURES.map((feature, idx) => (
            <Box key={idx} className={styles.card}>
              <Box className={styles.iconBox}>{feature.icon}</Box>
              <Typography variant="h4" className={styles.cardTitle}>
                {feature.title}
              </Typography>
              <Typography variant="body2" className={styles.cardText}>
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
}
