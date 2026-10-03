import { Metadata } from "next";
import Navbar from "@/component/navbar/navbar";
import DirectorSection from "@/component/director-section/director-section";
import WhyChooseUs from "@/component/why-choose-us/why-choose-us";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "About Us | Director Vijender Singh Nara | Hartron Skill Centre Panipat",
  description:
    "Learn about Hartron Skill Centre Panipat and Director Vijender Singh Nara's mission to provide government recognized computer courses & IT company grade training.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Box
          sx={{
            backgroundColor: "background.paper",
            padding: { xs: "24px 14px", sm: "48px 20px" },
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
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 1,
              }}
            >
              Institutional Excellence & History
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "1.45rem", sm: "2.1rem", md: "2.75rem" }, fontWeight: 900, color: "text.primary", mb: 2, wordBreak: "break-word" }}
            >
              About Hartron Skill Centre Panipat
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem" }, color: "text.secondary", lineHeight: 1.6 }}>
              Directed by <strong>Vijender Singh Nara</strong>, our center is Panipat's premier computer education institution.
            </Typography>
          </Box>
        </Box>

        <DirectorSection />

        <Box sx={{ padding: { xs: "32px 14px", sm: "64px 24px" }, backgroundColor: "background.default" }}>
          <Box sx={{ maxWidth: 1000, margin: "0 auto" }}>
            <Typography variant="h3" sx={{ fontWeight: 900, color: "text.primary", mb: 3, fontSize: { xs: "1.25rem", sm: "1.75rem" } }}>
              Our Educational Mission
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1.05rem" }, color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              For over two decades, Hartron Skill Centre Panipat has stood as a beacon of technological empowerment. Under Director Vijender Singh Nara, we bridge the gap between traditional academic degrees and real-world employment.
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1.05rem" }, color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
              We specialize in preparing candidates for Haryana Government competitive exams requiring certified typing speed tests (HSSC / HKRN / High Court Clerical) as well as modern IT Industry grade software careers in Web Development and Cybersecurity.
            </Typography>
          </Box>
        </Box>

        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
