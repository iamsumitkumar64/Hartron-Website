import { Metadata } from "next";
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
            backgroundColor: "#eff6ff",
            borderBottom: "1px solid #bfdbfe",
            padding: { xs: "32px 12px", sm: "48px 16px", md: "64px 24px" },
          }}
        >
          <Box sx={{ maxWidth: 1100, margin: "0 auto" }}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: isItGrade ? "#1e40af" : "#2563eb",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
                px: 1.5,
                py: 0.5,
                borderRadius: 9999,
                mb: 1.5,
                textTransform: "uppercase",
              }}
            >
              {isItGrade ? "IT Company Industry Grade" : "Government Recognized Course"}
            </Box>

            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "1.6rem", sm: "2.1rem", md: "2.75rem" }, fontWeight: 900, color: "#0f172a", mb: 2 }}
            >
              {course.title}
            </Typography>

            <Typography sx={{ fontSize: { xs: "0.95rem", md: "1.15rem" }, color: "#334155", lineHeight: 1.6, mb: 3 }}>
              {course.description}
            </Typography>

            <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 3 }, alignItems: "stretch", flexDirection: { xs: "column", sm: "row" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#ffffff",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  border: "1px solid #bfdbfe",
                  color: "#1e40af",
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                }}
              >
                <AccessTimeIcon fontSize="small" />
                <span>Duration: {course.duration}</span>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#ffffff",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  border: "1px solid #bfdbfe",
                  color: "#1e40af",
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                }}
              >
                <WorkspacePremiumIcon fontSize="small" />
                <span>Campus: Near SD College Road, Panipat</span>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Content & Syllabus Grid */}
        <section style={{ padding: "36px 12px", backgroundColor: "#ffffff" }}>
          <Box
            sx={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
              gap: { xs: "32px", md: "48px" },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", mb: 2.5, fontSize: { xs: "1.4rem", md: "2rem" } }}>
                Course Key Highlights
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
                {course.highlights.map((item: string, idx: number) => (
                  <Box key={idx} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                    <CheckCircleIcon sx={{ color: "#2563eb", mt: 0.3, fontSize: "1.1rem" }} />
                    <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1.05rem" }, fontWeight: 600, color: "#1e293b" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", mb: 2.5, fontSize: { xs: "1.4rem", md: "2rem" } }}>
                Detailed Course Syllabus
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {course.syllabus.map((module: any, idx: number) => (
                  <Box
                    key={idx}
                    sx={{
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: 3,
                      p: { xs: 2, sm: 3 },
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 800, color: "#1e40af", mb: 1.5, fontSize: { xs: "1.1rem", md: "1.35rem" } }}>
                      {module.title}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2.5, margin: 0 }}>
                      {module.topics.map((topic: string, tIdx: number) => (
                        <Box
                          component="li"
                          key={tIdx}
                          sx={{ color: "#475569", fontWeight: 600, mb: 0.8, fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
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
            <Box>
              <EnquiryForm defaultCourse={course.slug} />
            </Box>
          </Box>
        </section>
      </main>

      <Footer />
    </>
  );
}
