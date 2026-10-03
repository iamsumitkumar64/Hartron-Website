import { Metadata } from "next";
import Navbar from "@/component/navbar/navbar";
import CourseCard from "@/component/course-card/course-card";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "All Computer Courses | Hartron Skill Centre SD College Panipat | Director Vijender Singh Nara",
  description:
    "Explore Web Development, Cybersecurity, Government Typing Speed Test, and DCA Basic Computer Courses offered by Hartron Skill Centre SD College Panipat under Director Vijender Singh Nara.",
};

const COURSES_DATA = [
  {
    slug: "web-development",
    title: "Web Development (Full Stack)",
    type: "IT_INDUSTRY" as const,
    short_description:
      "Industry-grade Full Stack Web Development course covering HTML5, CSS3, JavaScript ES6+, React, Next.js, Node.js & Databases.",
    duration: "6 Months (100% Practical Labs)",
    highlights: [
      "Frontend Mastery: HTML5, CSS3, JavaScript, React & Next.js",
      "Backend & Databases: Node.js, Express, REST APIs, PostgreSQL / MongoDB",
      "Version Control & Deployment: Git, GitHub, Vercel & Docker",
      "Live Capstone Projects & Placement Support",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Network Defense",
    type: "IT_INDUSTRY" as const,
    short_description:
      "IT Industry grade Cybersecurity & Networking program focusing on Network Defense, Ethical Hacking basics, System Auditing & Threat Analysis.",
    duration: "6 Months (Lab Hands-on)",
    highlights: [
      "Computer Networking & TCP/IP Protocol Analysis",
      "Linux Operating System Administration & Shell Scripting",
      "Vulnerability Assessment & Penetration Tools (Wireshark, Nmap)",
      "Web Application Security & OWASP Top 10 Mitigation",
    ],
  },
  {
    slug: "typing-speed",
    title: "Government Job Typing Speed & Accuracy Training",
    type: "GOVT_BASIC" as const,
    short_description:
      "Specialized English & Hindi high-speed typing course designed for HSSC, HKRN, SSC, Court Clerical & Haryana Govt recruitment exams.",
    duration: "2 to 3 Months (Daily Lab Practice)",
    highlights: [
      "Dual Typing Tracks: English & Hindi (Kruti Dev / Mangal Font)",
      "Simulated Government Exam Typing Environment (HSSC, HKRN)",
      "Real-time WPM, Net Speed, & Gross Accuracy Calculations",
      "Backspace restriction drill modes matching official test rules",
    ],
  },
  {
    slug: "basic-computer",
    title: "Basic Computer Course & DCA (Diploma in Computer Applications)",
    type: "GOVT_BASIC" as const,
    short_description:
      "Government recognized foundational computer education covering MS Office, Tally Prime with GST, Internet operations, and DCA certification.",
    duration: "3 to 6 Months (Flexi Batch Timings)",
    highlights: [
      "Official Govt Recognized Diploma in Computer Applications (DCA)",
      "Master MS Office Suite (Word, Advanced Excel, PowerPoint)",
      "Tally Prime with GST & Financial Accounting Basics",
      "Internet, E-mail, e-Governance Services & Digital Payments",
    ],
  },
];

export default function CoursesDirectoryPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <Box
          sx={{
            backgroundColor: "#eff6ff",
            padding: { xs: "24px 14px", sm: "48px 20px" },
            textAlign: "center",
            borderBottom: "1px solid #bfdbfe",
          }}
        >
          <Box sx={{ maxWidth: 900, margin: "0 auto" }}>
            <Typography
              sx={{
                color: "#2563eb",
                fontWeight: 800,
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 1,
              }}
            >
              Course Directory
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "1.45rem", sm: "2.1rem", md: "2.75rem" }, fontWeight: 900, color: "#0f172a", mb: 2, wordBreak: "break-word" }}
            >
              Government Recognized & IT Industry Training Courses
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem" }, color: "#334155", lineHeight: 1.6 }}>
              Study under the direction of Director <strong>Vijender Singh Nara</strong> at Hartron Skill Centre, SD College Road, Panipat.
            </Typography>
          </Box>
        </Box>

        <Box component="section" sx={{ padding: { xs: "32px 14px", sm: "64px 24px" }, backgroundColor: "#ffffff" }}>
          <Box sx={{ maxWidth: 1280, margin: "0 auto" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: "20px", sm: "32px" },
              }}
            >
              {COURSES_DATA.map((course) => (
                <CourseCard
                  key={course.slug}
                  slug={course.slug}
                  title={course.title}
                  type={course.type}
                  short_description={course.short_description}
                  duration={course.duration}
                  highlights={course.highlights}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
