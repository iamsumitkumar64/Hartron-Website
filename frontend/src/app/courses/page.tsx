import { Metadata } from "next";
import Navbar from "@/component/navbar/navbar";
import CourseCard from "@/component/course-card/course-card";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";
import styles from "./courses.module.css";

export const metadata: Metadata = {
  title: "All Computer Courses | Hartron Skill Centre Panipat | Manager Vijender Singh Nara",
  description:
    "Explore Web Development, Cybersecurity, Government Typing Speed Test, and DCA Basic Computer Courses offered by Hartron Skill Centre Panipat under Manager Vijender Singh Nara.",
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
      <main>
        <Box className={styles.headerSection}>
          <Box className={styles.headerContainer}>
            <Typography className={styles.badge}>
              Course Directory
            </Typography>
            <Typography variant="h1" className={styles.title}>
              Government Recognized & IT Industry Training Courses
            </Typography>
            <Typography className={styles.subTitle}>
              Study under the leadership of Manager <strong>Vijender Singh Nara</strong> at Hartron Skill Centre, SD College Road, Panipat.
            </Typography>
          </Box>
        </Box>

        <Box component="section" className={styles.directorySection}>
          <Box className={styles.directoryContainer}>
            <Box className={styles.coursesGrid}>
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
