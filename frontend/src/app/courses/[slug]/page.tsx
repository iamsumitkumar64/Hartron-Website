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
      "Dedicated job placement & interview preparation with Director Vijender Singh Nara's network",
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
    description: `${course.description} Course at Hartron Skill Centre near SD College Panipat led by Director Vijender Singh Nara.`,
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
        <Box
          sx={{
            backgroundColor: "background.paper",
            borderBottom: "1px solid",
            borderColor: "divider",
            padding: { xs: "24px 14px", sm: "48px 16px", md: "64px 24px" },
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <Box sx={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "primary.main",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
                px: 1.5,
                py: 0.5,
                borderRadius: 9999,
                mb: 1.5,
                textTransform: "uppercase",
                maxWidth: "100%",
                wordBreak: "break-word",
              }}
            >
              {isItGrade ? "IT Company Industry Grade" : "Government Recognized Course"}
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.45rem", sm: "2.1rem", md: "2.75rem" },
                fontWeight: 900,
                color: "text.primary",
                mb: 2,
                wordBreak: "break-word",
                lineHeight: 1.3,
              }}
            >
              {course.title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.15rem" },
                color: "text.secondary",
                lineHeight: 1.6,
                mb: 3,
                wordBreak: "break-word",
              }}
            >
              {course.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 1.5, sm: 2 },
                alignItems: "stretch",
                flexDirection: { xs: "column", sm: "row" },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "background.default",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: { xs: "0.825rem", sm: "0.95rem" },
                  wordBreak: "break-word",
                }}
              >
                <AccessTimeIcon fontSize="small" />
                <span>Duration: {course.duration}</span>
              </Box>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "background.default",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: { xs: "0.825rem", sm: "0.95rem" },
                    wordBreak: "break-word",
                  }}
                >
                  <WorkspacePremiumIcon fontSize="small" />
                  <span>Campus: Near SD College Road, Panipat</span>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Content & Syllabus Grid */}
        <Box
          component="section"
          sx={{
            padding: { xs: "24px 14px", sm: "48px 16px", md: "64px 24px" },
            backgroundColor: "background.default",
            boxSizing: "border-box",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
              gap: { xs: "24px", md: "48px" },
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ minWidth: 0, width: "100%", boxSizing: "border-box" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: "text.primary",
                  mb: 2.5,
                  fontSize: { xs: "1.25rem", sm: "1.6rem", md: "2rem" },
                  wordBreak: "break-word",
                }}
              >
                Course Key Highlights
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4, width: "100%" }}>
                {course.highlights.map((item: string, idx: number) => (
                  <Box key={idx} sx={{ display: "flex", gap: 1, alignItems: "flex-start", width: "100%" }}>
                    <CheckCircleIcon sx={{ color: "primary.main", mt: 0.3, fontSize: "1.1rem", flexShrink: 0 }} />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "1rem" },
                        fontWeight: 600,
                        color: "text.primary",
                        wordBreak: "break-word",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: "text.primary",
                  mb: 2.5,
                  fontSize: { xs: "1.25rem", sm: "1.6rem", md: "2rem" },
                  wordBreak: "break-word",
                }}
              >
                Detailed Course Syllabus
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                {course.syllabus.map((module: any, idx: number) => (
                  <Box
                    key={idx}
                    sx={{
                      backgroundColor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: { xs: 2, sm: 3 },
                      p: { xs: 2, sm: 3 },
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "primary.main",
                        mb: 1.5,
                        fontSize: { xs: "1.05rem", sm: "1.25rem", md: "1.35rem" },
                        wordBreak: "break-word",
                      }}
                    >
                      {module.title}
                    </Typography>
                    <Box component="ul" sx={{ pl: { xs: 2, sm: 2.5 }, margin: 0, width: "100%" }}>
                      {module.topics.map((topic: string, tIdx: number) => (
                        <Box
                          component="li"
                          key={tIdx}
                          sx={{
                            color: "text.secondary",
                            fontWeight: 600,
                            mb: 0.8,
                            fontSize: { xs: "0.825rem", sm: "0.95rem" },
                            wordBreak: "break-word",
                          }}
                        >
                          {topic}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Sidebar Admission Form */}
            <Box sx={{ minWidth: 0, width: "100%", boxSizing: "border-box" }}>
              <EnquiryForm defaultCourse={course.slug} />
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </>
  );
}
