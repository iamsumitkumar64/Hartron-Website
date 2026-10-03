import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/component/navbar/navbar";
import EnquiryForm from "@/component/enquiry-form/enquiry-form";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Hartron Skill Centre SD College Panipat | Director Vijender Singh Nara",
  description:
    "Contact Director Vijender Singh Nara & Hartron Skill Centre team near SD College Panipat for course details, batch timings, and government typing test practice.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <Box className={styles.headerSection}>
          <Box className={styles.headerContainer}>
            <Typography className={styles.badge}>
              Get In Touch
            </Typography>
            <Typography variant="h1" className={styles.title}>
              Contact Hartron Skill Centre • SD College Panipat
            </Typography>
            <Typography className={styles.subTitle}>
              Have questions regarding course fees, batch schedules, or government typing speed tests? Visit our campus or submit your enquiry below.
            </Typography>
          </Box>
        </Box>

        <Box component="section" className={styles.contactSection}>
          <Box className={styles.contactGrid}>
            <Box className={styles.formColumn}>
              <EnquiryForm />
            </Box>

            <Box className={styles.infoCard}>
              <Typography variant="h4" className={styles.cardTitle}>
                Campus Contact Information
              </Typography>

              <Box className={styles.infoItems}>
                <Box>
                  <Typography variant="subtitle2" className={styles.infoGroupTitle}>
                    INSTITUTE NAME
                  </Typography>
                  <Typography variant="body1" className={styles.infoGroupValue}>
                    HARTRON Skill Centre (SD College Panipat Campus)
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" className={styles.infoGroupTitle}>
                    DIRECTOR
                  </Typography>
                  <Typography variant="body1" className={styles.infoGroupValue}>
                    Vijender Singh Nara
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" className={styles.infoGroupTitle}>
                    ADDRESS & LOCATION
                  </Typography>
                  <Link href="https://maps.google.com/?q=Hartron+Skill+Centre+SD+College+Panipat" target="_blank" style={{ textDecoration: "none" }}>
                    <Typography variant="body1" className={styles.addressLinkText}>
                      Opp. SD College Road / Near SD Sr. Sec. School, Panipat, Haryana - 132103
                    </Typography>
                  </Link>
                </Box>

                <Box>
                  <Typography variant="subtitle2" className={styles.infoGroupTitle}>
                    HELPLINE PHONE NUMBERS
                  </Typography>
                  <Box className={styles.phoneList}>
                    <a href="tel:+919034127171" style={{ textDecoration: "none" }}>
                      <Typography variant="body1" className={styles.phoneLinkText}>
                        +91 90341-27171
                      </Typography>
                    </a>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle2" className={styles.infoGroupTitle}>
                    OFFICE & LAB TIMINGS
                  </Typography>
                  <Typography variant="body1" className={styles.timingsText}>
                    Monday - Saturday: 8:00 AM - 7:00 PM (Sunday Closed)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </>
  );
}
