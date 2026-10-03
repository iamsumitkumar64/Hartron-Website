import { Metadata } from "next";
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
            backgroundColor: "#eff6ff",
            padding: { xs: "36px 16px", md: "64px 24px" },
            textAlign: "center",
            borderBottom: "1px solid #bfdbfe",
          }}
        >
          <Box sx={{ maxWidth: 900, margin: "0 auto" }}>
            <Typography
              sx={{
                color: "#2563eb",
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
              sx={{ fontSize: { xs: "1.85rem", sm: "2.25rem", md: "2.75rem" }, fontWeight: 900, color: "#0f172a", mb: 2 }}
            >
              Contact Hartron Skill Centre • SD College Panipat
            </Typography>
            <Typography sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, color: "#334155", lineHeight: 1.6 }}>
              Have questions regarding course fees, batch schedules, or government typing speed tests? Visit our campus or submit your enquiry below.
            </Typography>
          </Box>
        </Box>

        <section style={{ padding: "48px 16px", backgroundColor: "#ffffff" }}>
          <Box
            sx={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
              gap: { xs: "32px", md: "48px" },
            }}
          >
            <EnquiryForm />

            <Box
              sx={{
                backgroundColor: "#f8fafc",
                border: "1px solid #bfdbfe",
                borderRadius: "20px",
                padding: { xs: "20px 16px", md: "36px" },
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                Campus Contact Information
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#1e40af" }}>
                    INSTITUTE NAME
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: "#0f172a" }}>
                    HARTRON Skill Centre (SD College Panipat Campus)
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#1e40af" }}>
                    DIRECTOR
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: "#0f172a" }}>
                    Vijender Singh Nara
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#1e40af" }}>
                    ADDRESS & LOCATION
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#334155", fontWeight: 600 }}>
                    Opp. SD College Road / Near SD Sr. Sec. School, Panipat, Haryana - 132103
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#1e40af" }}>
                    HELPLINE PHONE NUMBERS
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#334155", fontWeight: 700 }}>
                    +91 98120-XXXXX / +91 98120-YYYYY
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#1e40af" }}>
                    OFFICE & LAB TIMINGS
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#334155", fontWeight: 600 }}>
                    Monday - Saturday: 8:00 AM - 7:00 PM (Sunday Closed)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      </main>

      <Footer />
    </>
  );
}
