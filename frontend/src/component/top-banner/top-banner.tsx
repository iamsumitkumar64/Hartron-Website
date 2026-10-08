import Link from "next/link";
import { Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import CampaignIcon from "@mui/icons-material/Campaign";
import styles from "./top-banner.module.css";

export default function TopBanner() {
  const announcementText =
    "🎯 Admissions Open 2025-26 Batch • Hartron Skill Centre Panipat • Manager: Vijender Singh Nara • Govt Recognized DCA & Typing Certification • IT Industry Grade Web Dev & Cybersecurity • Call +91 90341-27171 for Batch Timings & Fee Details";

  return (
    <Box className={styles.banner}>
      <Box className={styles.container}>
        <Box className={styles.announcementWrapper}>
          <span className={styles.badge}>
            <CampaignIcon className={styles.campaignIcon} />
            Updates
          </span>

          <Box className={styles.marqueeContainer}>
            <Box className={styles.marqueeTrack}>
              <Typography component="span" className={styles.text}>
                <VerifiedIcon className={styles.verifiedIcon} />
                {announcementText}
              </Typography>
              <Typography component="span" className={styles.text}>
                <VerifiedIcon className={styles.verifiedIcon} />
                {announcementText}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={styles.contacts}>
          <a href="tel:+919034127171" className={styles.contactLink}>
            <LocalPhoneIcon className={styles.contactIcon} />
            <span>Call: +91 90341-27171</span>
          </a>
          <Link href="/contact" className={styles.contactLink}>
            <LocationOnIcon className={styles.contactIcon} />
            <span>Near SD College Road, Panipat</span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
