import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/component/navbar/navbar";
import EnquiryForm from "@/component/enquiry-form/enquiry-form";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";

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
        <Box
          sx={{
            backgroundColor: "background.paper",
            padding: { xs: "36px 16px", md: "64px 24px" },
            textAlign: "center",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box sx={{ maxWidth: 900, margin: "0 auto" }}>
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 800,
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 1,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "1.85rem", sm: "2.25rem", md: "2.75rem" }, fontWeight: 900, color: "text.primary", mb: 2 }}
            >
              Contact Hartron Skill Centre • SD College Panipat
            </Typography>
            <Typography sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, color: "text.secondary", lineHeight: 1.6 }}>
              Have questions regarding course fees, batch schedules, or government typing speed tests? Visit our campus or submit your enquiry below.
            </Typography>
          </Box>
        </Box>

        <Box component="section" sx={{ padding: { xs: "32px 14px", sm: "64px 24px" }, backgroundColor: "background.default", overflow: "hidden", width: "100%", boxSizing: "border-box" }}>
          <Box
            sx={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
              gap: { xs: "24px", sm: "48px" },
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ minWidth: 0, width: "100%", boxSizing: "border-box" }}>
              <EnquiryForm />
            </Box>

            <Box
              sx={{
                minWidth: 0,
                backgroundColor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: { xs: "14px", sm: "20px" },
                padding: { xs: "20px 14px", md: "36px" },
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 900, color: "text.primary", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                Campus Contact Information
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                    INSTITUTE NAME
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: "text.primary" }}>
                    HARTRON Skill Centre (SD College Panipat Campus)
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                    DIRECTOR
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: "text.primary" }}>
                    Vijender Singh Nara
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                    ADDRESS & LOCATION
                  </Typography>
                  <Link href="https://maps.google.com/?q=Hartron+Skill+Centre+SD+College+Panipat" target="_blank" style={{ textDecoration: "none" }}>
                    <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 600, "&:hover": { color: "primary.main", textDecoration: "underline" } }}>
                      Opp. SD College Road / Near SD Sr. Sec. School, Panipat, Haryana - 132103
                    </Typography>
                  </Link>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                    HELPLINE PHONE NUMBERS
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 0.5 }}>
                    <a href="tel:+919034127171" style={{ textDecoration: "none" }}>
                      <Typography variant="body1" sx={{ color: "primary.main", fontWeight: 700, "&:hover": { textDecoration: "underline" } }}>
                        +91 90341-27171
                      </Typography>
                    </a>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                    OFFICE & LAB TIMINGS
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 600 }}>
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
