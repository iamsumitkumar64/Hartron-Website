import Link from "next/link";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Box className={styles.container}>
        {/* Brand Column */}
        <Box className={styles.brandCol}>
          <Box>
            <Typography className={styles.logoTitle}>HARTRON SKILL CENTRE</Typography>
            <Typography className={styles.subTitle}>SD College Panipat Campus</Typography>
          </Box>
          <Typography className={styles.description}>
            Authorized government computer training center near SD College Panipat. Under the leadership of Director Vijender Singh Nara, we specialize in government typing speed exams, IT industry web development, cybersecurity, and DCA courses.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography className={styles.colTitle}>Quick Links</Typography>
          <Box className={styles.linksList}>
            <Link href="/" className={styles.footerLink}>
              Home
            </Link>
            <Link href="/about" className={styles.footerLink}>
              About Director & Center
            </Link>
            <Link href="/courses" className={styles.footerLink}>
              All Courses Directory
            </Link>
            <Link href="/typing-practice" className={styles.footerLink}>
              Interactive Typing Demo
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              Admission Enquiry
            </Link>
          </Box>
        </Box>

        {/* Course Directories */}
        <Box>
          <Typography className={styles.colTitle}>Courses Offered</Typography>
          <Box className={styles.linksList}>
            <Link href="/courses/web-development" className={styles.footerLink}>
              Web Development (IT Industry)
            </Link>
            <Link href="/courses/cybersecurity" className={styles.footerLink}>
              Cybersecurity (IT Industry)
            </Link>
            <Link href="/courses/typing-speed" className={styles.footerLink}>
              Govt Typing Speed Test (HSSC/HKRN)
            </Link>
            <Link href="/courses/basic-computer" className={styles.footerLink}>
              Basic Computer & DCA Diploma
            </Link>
          </Box>
        </Box>

        {/* Contact Info */}
        <Box>
          <Typography className={styles.colTitle}>Contact & Location</Typography>
          <Box className={styles.contactInfo}>
            <Box className={styles.infoItem}>
              <LocationOnIcon sx={{ color: "#60a5fa", fontSize: 20 }} />
              <Link href="/contact" className={styles.footerLink} style={{ color: "inherit", margin: 0 }}>
                Opp. SD College Road / Near SD Sr. Sec. School, Panipat, Haryana - 132103
              </Link>
            </Box>
            <Box className={styles.infoItem}>
              <PhoneIcon sx={{ color: "#60a5fa", fontSize: 20 }} />
              <a href="tel:+919034127171" className={styles.footerLink} style={{ color: "inherit", margin: 0 }}>
                Director Vijender Singh Nara: +91 90341-27171
              </a>
            </Box>
            <Box className={styles.infoItem}>
              <EmailIcon sx={{ color: "#60a5fa", fontSize: 20 }} />
              <a href="mailto:info@hartronpanipat.com" className={styles.footerLink} style={{ color: "inherit", margin: 0 }}>
                info@hartronpanipat.com
              </a>
            </Box>
            <Box className={styles.infoItem}>
              <AccessTimeIcon sx={{ color: "#60a5fa", fontSize: 20 }} />
              <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Box className={styles.bottomBar}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Hartron Skill Centre SD College Panipat. Director: Vijender Singh Nara. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Developed by Xubble AI
        </Typography>
      </Box>
    </footer>
  );
}
