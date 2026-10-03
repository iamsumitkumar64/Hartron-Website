import Link from "next/link";
import { Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import CampaignIcon from "@mui/icons-material/Campaign";
import styles from "./top-banner.module.css";

export default function TopBanner() {
  const announcementText =
    "🎯 Admissions Open 2025-26 Batch • Hartron Skill Centre SD College Panipat • Director: Vijender Singh Nara • Govt Recognized DCA & Typing Certification • IT Industry Grade Web Dev & Cybersecurity • Call +91 90341-27171 for Batch Timings & Fee Details";

  return (
    <Box className={styles.banner}>
      <Box className={styles.container}>
        <Box className={styles.announcementWrapper}>
          <Box className={styles.updatesPill}>
            <span className={styles.badge}>
              <CampaignIcon sx={{ fontSize: 14, mr: 0.5, verticalAlign: "middle" }} />
              Updates
            </span>

            <Box className={styles.marqueeTrack}>
              <Typography component="span" className={styles.text}>
                <VerifiedIcon sx={{ fontSize: 14, verticalAlign: "middle", mr: 0.5, color: "#93c5fd" }} />
                {announcementText}
              </Typography>
              <Typography component="span" className={styles.text}>
                <VerifiedIcon sx={{ fontSize: 14, verticalAlign: "middle", mr: 0.5, color: "#93c5fd" }} />
                {announcementText}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={styles.contacts}>
          <a href="tel:+919034127171" className={styles.contactLink}>
            <LocalPhoneIcon sx={{ fontSize: 14 }} />
            <span>Call: +91 90341-27171</span>
          </a>
          <Link href="/contact" className={styles.contactLink}>
            <LocationOnIcon sx={{ fontSize: 14 }} />
            <span>Near SD College Road, Panipat</span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
