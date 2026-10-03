import { Metadata } from "next";
import Navbar from "@/component/navbar/navbar";
import DirectorSection from "@/component/director-section/director-section";
import WhyChooseUs from "@/component/why-choose-us/why-choose-us";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "About Us | Director Vijender Singh Nara | Hartron Skill Centre SD College Panipat",
  description:
    "Learn about Hartron Skill Centre near SD College Panipat and Director Vijender Singh Nara's mission to provide government recognized computer courses & IT company grade training.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Box
          sx={{
            backgroundColor: "#eff6ff",
            padding: "64px 24px",
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
              Institutional Excellence & History
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: "2.75rem", fontWeight: 900, color: "#0f172a", mb: 2 }}
            >
              About Hartron Skill Centre • SD College Panipat
            </Typography>
            <Typography sx={{ fontSize: "1.15rem", color: "#334155", lineHeight: 1.6 }}>
              Directed by <strong>Vijender Singh Nara</strong>, our center is Panipat's premier computer education institution located right next to SD College campus.
            </Typography>
          </Box>
        </Box>

        <DirectorSection />

        <Box sx={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
          <Box sx={{ maxWidth: 1000, margin: "0 auto" }}>
            <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", mb: 3 }}>
              Our Educational Mission
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, mb: 3 }}>
              For over two decades, Hartron Skill Centre near SD College Panipat has stood as a beacon of technological empowerment. Under Director Vijender Singh Nara, we bridge the gap between traditional academic degrees and real-world employment.
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, mb: 3 }}>
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
