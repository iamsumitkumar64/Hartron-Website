import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/component/navbar/navbar";
import Hero from "@/component/hero/hero";
import DirectorSection from "@/component/director-section/director-section";
import CourseCard from "@/component/course-card/course-card";
import WhyChooseUs from "@/component/why-choose-us/why-choose-us";
import TypingTestPreview from "@/component/typing-test-preview/typing-test-preview";
import EnquiryForm from "@/component/enquiry-form/enquiry-form";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hartron Skill Centre SD College Panipat | Director Vijender Singh Nara",
  description:
    "Official Hartron Skill Centre near SD College Panipat led by Director Vijender Singh Nara. Government typing speed test preparation, IT industry web development, cybersecurity, and DCA computer courses.",
  keywords: [
    "Hartron Panipat",
    "Hartron SD College Panipat",
    "Vijender Singh Nara Panipat",
    "Vijender Nara Hartron",
    "Government Typing Test Panipat",
    "Web Development Course Panipat",
    "Cybersecurity Course Panipat",
    "Computer Center near SD College Panipat",
  ],
  openGraph: {
    title: "Hartron Skill Centre SD College Panipat | Director Vijender Singh Nara",
    description:
      "Premier government computer training & IT skill institute near SD College Panipat. Government typing test, Web Dev & Cybersecurity.",
    siteName: "Hartron Skill Centre Panipat",
    locale: "en_IN",
    type: "website",
  },
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

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Hartron Skill Centre SD College Panipat",
    url: "https://hartronpanipat.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opp. SD College Road / Near SD Sr. Sec. School",
      addressLocality: "Panipat",
      addressRegion: "Haryana",
      postalCode: "132103",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "Vijender Singh Nara",
      jobTitle: "Director",
    },
    description:
      "Premier computer institute near SD College Panipat providing Government typing test training, IT industry Web Development, Cybersecurity, and DCA courses.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main>
        <Hero />

        <DirectorSection />

        {/* Featured Courses Section */}
        <Box component="section" className={styles.coursesSection}>
          <Box className={styles.coursesContainer}>
            <Box className={styles.coursesHeader}>
              <Typography className={styles.coursesBadge}>
                Our Training Programs
              </Typography>
              <Typography variant="h2" className={styles.coursesTitle}>
                Government Recognized & IT Industry Grade Courses
              </Typography>
            </Box>

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

        <TypingTestPreview />

        <WhyChooseUs />

        {/* Admission Form Section */}
        <Box component="section" className={styles.admissionSection}>
          <Box className={styles.admissionContainer}>
            <Box className={styles.formWrapper}>
              <EnquiryForm />
            </Box>

            <Box className={styles.infoCard}>
              <Typography variant="h4" className={styles.infoTitle}>
                Visit Campus Near SD College Panipat
              </Typography>

              <Typography className={styles.infoDescription}>
                Directly walk into our campus opposite SD College Road, Panipat to inspect our high-speed practical computer labs, meet Director Vijender Singh Nara, and get personalized course guidance.
              </Typography>

              <Box className={styles.infoList}>
                <Box className={styles.infoRow}>
                  <Typography className={styles.infoLabel}>
                    📍 Address:
                  </Typography>
                  <Link
                    href="/contact"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography className={styles.infoLinkText}>
                      Hartron Skill Centre, Opp. SD College Road / Near SD Sr. Sec. School, Panipat, Haryana - 132103
                    </Typography>
                  </Link>
                </Box>

                <Box className={styles.infoRow}>
                  <Typography className={styles.infoLabel}>
                    📞 Helpline:
                  </Typography>
                  <Box className={styles.phoneList}>
                    <Link
                      href="tel:+919034127171"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography className={styles.phoneLinkText}>
                        +91 90341-27171
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                <Box className={styles.infoRow}>
                  <Typography className={styles.infoLabel}>
                    ⏰ Hours:
                  </Typography>
                  <Typography className={styles.hoursText}>
                    Monday - Saturday (8:00 AM to 7:00 PM)
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