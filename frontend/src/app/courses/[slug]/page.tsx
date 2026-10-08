import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/component/navbar/navbar";
import EnquiryForm from "@/component/enquiry-form/enquiry-form";
import Footer from "@/component/footer/footer";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import styles from "./course-detail.module.css";

const COURSES_MAP: Record<string, any> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development (Full Stack - IT Company Grade)",
    type: "IT_INDUSTRY",
    duration: "6 Months (100% Practical Labs)",
    description:
      "Comprehensive IT company industry-grade Full Stack Web Development program designed to take students from core programming logic to advanced frontend and backend engineering.",
    highlights: [
      "Master HTML5, CSS3, JavaScript ES6+, React.js & Next.js",
      "Backend API development with Node.js, Express & REST Architecture",
      "Database design using PostgreSQL, SQL queries & MongoDB",
      "Version Control with Git & GitHub workflows",
      "100% Hands-on capstone project development & live deployment",
      "Dedicated job placement & interview preparation with Manager Vijender Singh Nara's network",
    ],
    syllabus: [
      {
        title: "Module 1: Web Architecture & Responsive Frontend",
        topics: [
          "HTML5 Semantic Tags & Accessibility Best Practices",
          "CSS3 Modern Layouts: Flexbox & CSS Grid System",
          "Responsive Web Design & Mobile First Strategy",
          "JavaScript ES6+ Functions, Promises, Async/Await & DOM Manipulation",
        ],
      },
      {
        title: "Module 2: React & Server Side Rendering (Next.js)",
        topics: [
          "React Component Lifecycle, Hooks & State Management",
          "Next.js App Router, Server Components & SEO Optimization",
          "Integration of Tailwind CSS & Material UI Components",
          "State Persistence with Redux Toolkit",
        ],
      },
      {
        title: "Module 3: Server Side Engineering & Databases",
        topics: [
          "Node.js Runtime & Express Server Setup",
          "RESTful API Design & HTTP Status Protocols",
          "Database Schemas with PostgreSQL / TypeORM",
          "User Authentication (JWT & Cookies)",
          "Deployment to Vercel, Docker Containers & Cloud Hosting",
        ],
      },
    ],
  },
  cybersecurity: {
    slug: "cybersecurity",
    title: "Cybersecurity & Network Defense (IT Grade)",
    type: "IT_INDUSTRY",
    duration: "6 Months (Lab Hands-on)",
    description:
      "Industrial cybersecurity and networking course focused on network analysis, ethical hacking techniques, security auditing, and system defense.",
    highlights: [
      "Deep dive into TCP/IP Networking, Routing, Subnetting & Packet Analysis",
      "Linux Server Administration & Security Scripting",
      "Ethical Hacking Tools: Nmap, Wireshark, Metasploit, Burp Suite",
      "Web Application Security & OWASP Top 10 Vulnerabilities Mitigation",
      "Incident Response & Cyber Compliance Protocols",
      "Preparation for Global & Indian IT Security Certifications",
    ],
    syllabus: [
      {
        title: "Module 1: Network Fundamentals & Linux Administration",
        topics: [
          "OSI & TCP/IP Model Protocol Analysis",
          "Network Packet Capture using Wireshark",
          "Linux System Architecture & Command-Line Operations",
          "Firewalls, VPNs & Wireless Security Basics",
        ],
      },
      {
        title: "Module 2: Vulnerability Assessment & Ethical Hacking",
        topics: [
          "Information Gathering & Footprinting Techniques",
          "Network & Port Scanning using Nmap",
          "System Exploitation Concepts & Privilege Escalation",
          "Password Auditing & Hash Cracking Mitigations",
        ],
      },
      {
        title: "Module 3: Web Application Defense & Incident Management",
        topics: [
          "OWASP Top 10 Security Vulnerabilities",
          "SQL Injection & Cross-Site Scripting (XSS) Prevention",
          "Security Log Auditing & Incident Handling",
          "Cyber Laws, Ethics & Corporate Compliance Standards",
        ],
      },
    ],
  },
  "typing-speed": {
    slug: "typing-speed",
    title: "Government Job Typing Speed & Accuracy Training",
    type: "GOVT_BASIC",
    duration: "2 to 3 Months (Daily Lab Practice)",
    description:
      "Specialized speed & accuracy typing program engineered for Haryana Government exams (HSSC, HKRN), High Court clerical recruitments, SSC, and Banking typing tests.",
    highlights: [
      "Dual Language Training: English & Hindi (Mangal Inscript & Kruti Dev)",
      "Specialized HARTRON Typing Exam Software with backspace restriction modes",
      "Real-time Gross Speed, Net Speed, & Accuracy calculation feedback",
      "Daily 5-minute & 10-minute exam simulated passage drills",
      "Ergonomic keyboard touch-typing posture guidance",
      "Official HARTRON speed test certificate verification",
    ],
    syllabus: [
      {
        title: "Phase 1: Touch-Typing Mechanics",
        topics: [
          "Finger Positioning & Key Mapping (Home, Top, Bottom Rows)",
          "Sight Typing Exercises Without Looking at Keyboard",
          "Punctuation & Numeric Keyboard Pad Mastery",
        ],
      },
      {
        title: "Phase 2: Error Reduction & Speed Amplification",
        topics: [
          "Accuracy First Drills to push error rates below 3%",
          "Speed Drills to comfortably surpass 35 WPM threshold",
          "Hindi Typing Key Layouts (Mangal Inscript & Kruti Dev)",
        ],
      },
      {
        title: "Phase 3: Govt Exam Mock Test Simulations",
        topics: [
          "Strict Timed Passage Drills (HSSC / HKRN Pattern)",
          "Restricted Backspace & Highlight Removal Drills",
          "Personalized Performance Analysis by Instructor",
        ],
      },
    ],
  },
  "basic-computer": {
    slug: "basic-computer",
    title: "Basic Computer Course & DCA (Diploma in Computer Applications)",
    type: "GOVT_BASIC",
    duration: "3 to 6 Months (Flexi Batch Timings)",
    description:
      "Foundational computer diploma course covering Windows OS, Microsoft Office Suite, Advanced Excel formulas, Tally Prime with GST, and e-Governance operations.",
    highlights: [
      "Official Government Recognized Diploma in Computer Applications (DCA)",
      "Master MS Office (Word, Advanced Excel formulas, PowerPoint)",
      "Tally Prime Financial Accounting with GST Invoicing",
      "Internet Operations, Email Etiquette, & Digital Banking Security",
      "Computer Hardware Setup & Troubleshooting Basics",
      "Valid for all Central & State Government job applications",
    ],
    syllabus: [
      {
        title: "Module 1: Computer Fundamentals & Operating System",
        topics: [
          "Understanding Computer Hardware & Input/Output Devices",
          "Windows OS Navigation, File System & Control Panel",
          "English Typing Basics & Keyboard Operations",
        ],
      },
      {
        title: "Module 2: MS Office Automation Suite",
        topics: [
          "MS Word: Document Creation, Formatting & Tables",
          "Advanced MS Excel: VLOOKUP, HLOOKUP, IF conditions & Pivot Tables",
          "MS PowerPoint: Professional Presentation Design",
        ],
      },
      {
        title: "Module 3: Tally Accounting & Internet Services",
        topics: [
          "Tally Prime Ledger Creation, Vouchers & Daybook",
          "GST Tax Configuration & Invoice Generation",
          "Internet Browsing, Online Form Submissions & Cyber Hygiene",
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_MAP[slug];
  if (!course) return { title: "Course Not Found | Hartron Skill Centre Panipat" };

  return {
    title: `${course.title} | Hartron Skill Centre SD College Panipat`,
    description: `${course.description} Course at Hartron Skill Centre near SD College Panipat led by Manager Vijender Singh Nara.`,
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = COURSES_MAP[slug];
  if (!course) notFound();

  const isItGrade = course.type === "IT_INDUSTRY";

  return (
    <>
      <Navbar />

      <main>
        {/* Header Hero */}
        <Box className={styles.headerHero}>
          <Box className={styles.heroContainer}>
            <Box className={styles.gradeBadge}>
              {isItGrade ? "IT Company Industry Grade" : "Government Recognized Course"}
            </Box>

            <Typography variant="h1" className={styles.courseTitle}>
              {course.title}
            </Typography>

            <Typography className={styles.courseDescription}>
              {course.description}
            </Typography>

            <Box className={styles.metaRow}>
              <Box className={styles.metaChip}>
                <AccessTimeIcon fontSize="small" />
                <span>Duration: {course.duration}</span>
              </Box>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Box className={styles.metaChip}>
                  <WorkspacePremiumIcon fontSize="small" />
                  <span>Campus: Near SD College Road, Panipat</span>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Content & Syllabus Grid */}
        <Box component="section" className={styles.contentSection}>
          <Box className={styles.contentGrid}>
            <Box className={styles.mainColumn}>
              <Typography variant="h3" className={styles.sectionHeading}>
                Course Key Highlights
              </Typography>

              <Box className={styles.highlightsList}>
                {course.highlights.map((item: string, idx: number) => (
                  <Box key={idx} className={styles.highlightItem}>
                    <CheckCircleIcon className={styles.checkIcon} />
                    <Typography className={styles.highlightText}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h3" className={styles.sectionHeading}>
                Detailed Course Syllabus
              </Typography>

              <Box className={styles.syllabusList}>
                {course.syllabus.map((module: any, idx: number) => (
                  <Box key={idx} className={styles.moduleCard}>
                    <Typography variant="h5" className={styles.moduleTitle}>
                      {module.title}
                    </Typography>
                    <Box component="ul" className={styles.topicsList}>
                      {module.topics.map((topic: string, tIdx: number) => (
                        <Box component="li" key={tIdx} className={styles.topicItem}>
                          {topic}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Sidebar Admission Form */}
            <Box className={styles.sidebarColumn}>
              <EnquiryForm defaultCourse={course.slug} />
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </>
  );
}
