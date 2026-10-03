"use client";

import React, { useState, useEffect, useRef, useTransition } from "react";
import Link from "next/link";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer/footer";
import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
  IconButton,
  Paper,
} from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import TimerIcon from "@mui/icons-material/Timer";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const SAMPLE_PASSAGES = {
  govt: "The Haryana State Electronics Development Corporation Limited (HARTRON) is the premier agency for promoting IT education and recruitment testing across Haryana state. Under the guidance of Director Vijender Singh Nara at Hartron Skill Centre SD College Panipat, candidate students undergo rigorous daily typing speed practice to clear HSSC, HKRN, and High Court clerical examinations with 100% accuracy and speed exceeding 35 words per minute.",
  sprint: "Speed and accuracy are the core foundation of clearing government clerical computer tests. Hartron Skill Centre near SD College Panipat equips students with real-time feedback, touch-typing posture, and backspace restriction drill modes.",
  hindi: "हरियाणा राज्य इलेक्ट्रॉनिक्स विकास निगम लिमिटेड (हार्ट्रॉन) कंप्यूटर शिक्षा तथा सरकारी भर्ती टाइपिंग परीक्षा का प्रमुख केंद्र है। एसडी कॉलेज पानीपत स्थित हार्ट्रॉन स्किल सेंटर में निदेशक विजेंद्र सिंह नारा के नेतृत्व में विद्यार्थी उच्च गति प्राप्त करते हैं।",
};

type ExamDuration = 30 | 60 | 120;

export default function TypingPracticePage() {
  const [passageType, setPassageType] = useState<"govt" | "sprint" | "hindi">("govt");
  const [duration, setDuration] = useState<ExamDuration>(60);
  const [restrictBackspace, setRestrictBackspace] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const [text, setText] = useState<string>(SAMPLE_PASSAGES["govt"]);
  const [userInput, setUserInput] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Play synthetic feedback sound
  const playBeep = (isError = false) => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = isError ? "sawtooth" : "sine";
      osc.frequency.setValueAtTime(isError ? 180 : 580, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Ignore audio context errors
    }
  };

  // Switch passage
  const handlePassageChange = (type: "govt" | "sprint" | "hindi") => {
    setPassageType(type);
    setText(SAMPLE_PASSAGES[type]);
    resetTest(duration, type);
  };

  // Reset test
  const resetTest = (newDuration = duration, newType = passageType) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setUserInput("");
    setTimeLeft(newDuration);
    setIsActive(false);
    setIsFinished(false);
    setStreak(0);
    setMaxStreak(0);
    setText(SAMPLE_PASSAGES[newType]);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  useEffect(() => {
    resetTest(duration, passageType);
  }, [duration]);

  // Timer logic
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsActive(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setIsFinished(true);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  // Handle Input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (isFinished) return;

    if (!isActive && val.length > 0) {
      setIsActive(true);
    }

    // Backspace restriction check
    if (restrictBackspace && val.length < userInput.length) {
      playBeep(true);
      return;
    }

    const lastCharTyped = val.length > 0 ? val[val.length - 1] : "";
    const expectedChar = text[val.length - 1];

    if (val.length > userInput.length) {
      if (lastCharTyped === expectedChar) {
        playBeep(false);
        setStreak((prev) => {
          const next = prev + 1;
          if (next > maxStreak) setMaxStreak(next);
          return next;
        });
      } else {
        playBeep(true);
        setStreak(0);
      }
    }

    setUserInput(val);

    // Auto complete if text finished
    if (val.length >= text.length) {
      setIsActive(false);
      setIsFinished(true);
    }
  };

  // Keystroke visual effect
  const handleKeyDown = (e: React.KeyboardEvent) => {
    setPressedKey(e.key.toUpperCase());
    setTimeout(() => setPressedKey(null), 150);
  };

  // Metrics Calculations
  const timeElapsed = Math.max(1, duration - timeLeft);
  const wordsTyped = userInput.trim().length / 5;
  const grossWPM = Math.round((wordsTyped / timeElapsed) * 60) || 0;

  let correctChars = 0;
  let incorrectChars = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === text[i]) {
      correctChars++;
    } else {
      incorrectChars++;
    }
  }

  const netWPM = Math.max(0, Math.round(grossWPM - (incorrectChars / timeElapsed) * 60)) || 0;
  const accuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100;
  const isPassed = netWPM >= 30 && accuracy >= 90;

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#f8fafc", minHeight: "85vh", paddingBottom: "60px", overflowX: "hidden" }}>
        {/* Banner - Light Theme Matching All Other Pages */}
        <Box
          sx={{
            backgroundColor: "#eff6ff",
            borderBottom: "1px solid #bfdbfe",
            py: { xs: 3, sm: 5 },
            px: { xs: 1.5, sm: 2 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#1e40af",
                color: "#ffffff",
                px: 1.5,
                py: 0.5,
                borderRadius: 9999,
                mb: 1.5,
              }}
            >
              <VerifiedIcon sx={{ fontSize: 16, color: "#93c5fd" }} />
              <Typography variant="body2" sx={{ fontWeight: 800, letterSpacing: "0.05em", color: "#ffffff", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}>
                OFFICIAL HARTRON HSSC / HKRN GOVT EXAM SIMULATOR
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2.25rem", md: "2.85rem" },
                fontWeight: 900,
                color: "#0f172a",
                mb: 1,
                wordBreak: "break-word",
              }}
            >
              Interactive Government Typing Practice Demo
            </Typography>

            <Typography
              sx={{
                color: "#334155",
                fontSize: { xs: "0.875rem", sm: "1.05rem" },
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Master high-speed touch typing for Haryana Government Recruitment Exams under Director <strong>Vijender Singh Nara</strong> at Hartron Skill Centre SD College Panipat.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 3 }, px: { xs: 1.5, sm: 3 } }}>
          {/* Main Control Panel */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 1.5, sm: 3 },
              borderRadius: { xs: "10px", sm: "16px" },
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              mb: 3,
            }}
          >
            {/* Top Toolbar */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                pb: 2,
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {/* Passage Selectors */}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip
                  label="Govt HSSC Pattern"
                  clickable
                  color={passageType === "govt" ? "primary" : "default"}
                  onClick={() => handlePassageChange("govt")}
                  sx={{ fontWeight: 800 }}
                />
                <Chip
                  label="30-Sec Speed Sprint"
                  clickable
                  color={passageType === "sprint" ? "primary" : "default"}
                  onClick={() => handlePassageChange("sprint")}
                  sx={{ fontWeight: 800 }}
                />
                <Chip
                  label="Hindi Mangal Practice"
                  clickable
                  color={passageType === "hindi" ? "primary" : "default"}
                  onClick={() => handlePassageChange("hindi")}
                  sx={{ fontWeight: 800 }}
                />
              </Box>

              {/* Exam Duration & Toggles */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <TimerIcon color="action" fontSize="small" />
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#475569" }}>
                    Timer:
                  </Typography>
                  {[30, 60, 120].map((t) => (
                    <Button
                      key={t}
                      size="small"
                      variant={duration === t ? "contained" : "outlined"}
                      onClick={() => setDuration(t as ExamDuration)}
                      sx={{ minWidth: 42, height: 32, borderRadius: 2, fontWeight: 800 }}
                    >
                      {t}s
                    </Button>
                  ))}
                </Box>

                <FormControlLabel
                  control={
                    <Switch
                      checked={restrictBackspace}
                      onChange={(e) => setRestrictBackspace(e.target.checked)}
                      color="warning"
                      size="small"
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "0.8rem", color: restrictBackspace ? "#d97706" : "#64748b" }}>
                      Strict Backspace Restrict
                    </Typography>
                  }
                />

                <IconButton onClick={() => setSoundEnabled(!soundEnabled)} size="small" title="Toggle Keyboard Audio">
                  {soundEnabled ? <VolumeUpIcon color="primary" /> : <VolumeOffIcon color="disabled" />}
                </IconButton>
              </Box>
            </Box>

            {/* Live Metrics Dashboard */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
                gap: { xs: 1, sm: 2 },
                my: { xs: 2, sm: 3 },
              }}
            >
              {/* Metric 1: Time Left */}
              <Box
                sx={{
                  backgroundColor: timeLeft <= 10 && isActive ? "#fef2f2" : "#f8fafc",
                  border: "1px solid",
                  borderColor: timeLeft <= 10 && isActive ? "#fca5a5" : "#e2e8f0",
                  borderRadius: { xs: "8px", sm: "12px" },
                  p: { xs: 1.2, sm: 2 },
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
              >
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 800, textTransform: "uppercase", fontSize: { xs: "0.65rem", sm: "0.75rem" } }}>
                  Time Remaining
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    color: timeLeft <= 10 && isActive ? "#dc2626" : "#1e40af",
                    fontSize: { xs: "1.4rem", sm: "2rem" },
                  }}
                >
                  {timeLeft}s
                </Typography>
              </Box>

              {/* Metric 2: Net Speed */}
              <Box
                sx={{
                  backgroundColor: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: { xs: "8px", sm: "12px" },
                  p: { xs: 1.2, sm: 2 },
                  textAlign: "center",
                }}
              >
                <Typography variant="caption" sx={{ color: "#166534", fontWeight: 800, textTransform: "uppercase", fontSize: { xs: "0.65rem", sm: "0.75rem" } }}>
                  Net Speed
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 900, color: "#15803d", fontSize: { xs: "1.4rem", sm: "2rem" } }}>
                  {netWPM} <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>WPM</span>
                </Typography>
              </Box>

              {/* Metric 3: Accuracy */}
              <Box
                sx={{
                  backgroundColor: accuracy >= 95 ? "#eff6ff" : "#fffbebe",
                  border: "1px solid",
                  borderColor: accuracy >= 95 ? "#bfdbfe" : "#fde68a",
                  borderRadius: { xs: "8px", sm: "12px" },
                  p: { xs: 1.2, sm: 2 },
                  textAlign: "center",
                }}
              >
                <Typography variant="caption" sx={{ color: "#1e40af", fontWeight: 800, textTransform: "uppercase", fontSize: { xs: "0.65rem", sm: "0.75rem" } }}>
                  Accuracy
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 900, color: accuracy >= 95 ? "#1d4ed8" : "#b45309", fontSize: { xs: "1.4rem", sm: "2rem" } }}>
                  {accuracy}%
                </Typography>
              </Box>

              {/* Metric 4: Streak */}
              <Box
                sx={{
                  backgroundColor: "#faf5ff",
                  border: "1px solid #e9d5ff",
                  borderRadius: { xs: "8px", sm: "12px" },
                  p: { xs: 1.2, sm: 2 },
                  textAlign: "center",
                }}
              >
                <Typography variant="caption" sx={{ color: "#7e22ce", fontWeight: 800, textTransform: "uppercase", fontSize: { xs: "0.65rem", sm: "0.75rem" } }}>
                  Key Streak
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 900, color: "#7e22ce", fontSize: { xs: "1.4rem", sm: "2rem" } }}>
                  🔥 {streak}
                </Typography>
              </Box>
            </Box>

            {/* Linear Progress Indicator */}
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "#64748b" }}>
                  Exam Passage Completion: {userInput.length} / {text.length} chars
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 700, color: "#2563eb" }}>
                  {Math.min(100, Math.round((userInput.length / text.length) * 100))}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={Math.min(100, (userInput.length / text.length) * 100)}
                sx={{ height: 8, borderRadius: 4, backgroundColor: "#f1f5f9" }}
              />
            </Box>

            {/* Interactive Passage Display Box */}
            <Box
              onClick={() => inputRef.current?.focus()}
              sx={{
                position: "relative",
                backgroundColor: "#f8fafc",
                border: "2px solid",
                borderColor: isActive ? "#2563eb" : "#cbd5e1",
                borderRadius: { xs: "8px", sm: "12px" },
                p: { xs: 1.5, sm: 2.5 },
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontFamily: "monospace",
                lineHeight: 1.7,
                minHeight: { xs: 120, sm: 160 },
                maxHeight: 220,
                overflowY: "auto",
                cursor: "text",
                letterSpacing: "0.03em",
                boxShadow: isActive ? "0 0 0 3px rgba(37, 99, 235, 0.15)" : "none",
                transition: "all 0.2s",
              }}
            >
              {!isActive && userInput.length === 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 12,
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    fontSize: { xs: "0.65rem", sm: "0.75rem" },
                    fontWeight: 800,
                    px: 1.2,
                    py: 0.4,
                    borderRadius: 9999,
                    pointerEvents: "none",
                  }}
                >
                  Click or type to begin
                </Box>
              )}

              {text.split("").map((char, index) => {
                let color = "#64748b"; // Muted default
                let bg = "transparent";

                if (index < userInput.length) {
                  if (userInput[index] === char) {
                    color = "#16a34a"; // Correct green
                    bg = "#dcfce7";
                  } else {
                    color = "#dc2626"; // Error red
                    bg = "#fee2e2";
                  }
                }

                const isCurrent = index === userInput.length;

                return (
                  <span
                    key={index}
                    style={{
                      color: color,
                      backgroundColor: bg,
                      borderBottom: isCurrent ? "3px solid #2563eb" : "none",
                      fontWeight: isCurrent ? 800 : index < userInput.length ? 700 : 500,
                      borderRadius: "2px",
                      padding: "0 1px",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </Box>

            {/* Hidden Input field capturing keystrokes */}
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={isFinished}
              style={{
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                left: "-9999px",
              }}
              autoFocus
            />

            {/* Bottom Actions */}
            <Box
              sx={{
                display: "flex",
                justify: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                mt: 2.5,
              }}
            >
              <Button
                variant="contained"
                onClick={() => resetTest()}
                startIcon={<RestartAltIcon />}
                sx={{
                  backgroundColor: "#1e40af",
                  fontWeight: 800,
                  px: 2.5,
                  py: 1,
                  borderRadius: { xs: "8px", sm: "10px" },
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": { backgroundColor: "#1d4ed8" },
                }}
              >
                Reset / Restart Drill
              </Button>

              <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 600, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
                💡 Direct Campus Lab Practice available at <strong>Hartron SD College Panipat</strong>
              </Typography>
            </Box>
          </Paper>

          {/* Quick Guidance Box */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: { xs: "10px", sm: "16px" },
              backgroundColor: "#ffffff",
              border: "1px solid #bfdbfe",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <SchoolIcon sx={{ fontSize: { xs: 32, sm: 44 }, color: "#1e40af" }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "0.95rem", sm: "1.1rem" } }}>
                  Want 100% Guaranteed Typing Speed in Govt Exams?
                </Typography>
                <Typography variant="body2" sx={{ color: "#475569", fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
                  Join Director Vijender Singh Nara's specialized lab batch near SD College Panipat with official HARTRON exam software.
                </Typography>
              </Box>
            </Box>

            <Link href="/contact?course=typing-speed" style={{ textDecoration: "none", width: "100%" }}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<LocalPhoneIcon />}
                sx={{
                  backgroundColor: "#16a34a",
                  color: "#ffffff",
                  fontWeight: 900,
                  px: 3,
                  py: 1.2,
                  borderRadius: { xs: "8px", sm: "10px" },
                  whiteSpace: "nowrap",
                  "&:hover": { backgroundColor: "#15803d" },
                }}
              >
                Join Practical Lab Batch
              </Button>
            </Link>
          </Paper>
        </Container>

        {/* Results Modal */}
        <Dialog
          open={isFinished}
          onClose={() => setIsFinished(false)}
          maxWidth="sm"
          fullWidth
          slotProps={{
            paper: {
              sx: { borderRadius: { xs: "10px", sm: "16px" }, p: { xs: 1.5, sm: 2 }, textAlign: "center" },
            },
          }}
        >
          <DialogTitle sx={{ pb: 1 }}>
            <EmojiEventsIcon sx={{ fontSize: 60, color: isPassed ? "#eab308" : "#94a3b8", mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 900, color: "#0f172a" }}>
              {isPassed ? "HARTRON TEST QUALIFIED! 🎉" : "GOOD TRY! KEEP PRACTICING 💪"}
            </Typography>
            <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 700, mt: 0.5 }}>
              HSSC / HKRN Clerical Typing Exam Simulation Result
            </Typography>
          </DialogTitle>

          <DialogContent>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                my: 2,
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "#f0fdf4", borderRadius: 3, border: "1px solid #bbf7d0" }}>
                <Typography variant="caption" sx={{ color: "#166534", fontWeight: 800 }}>
                  NET SPEED
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900, color: "#15803d" }}>
                  {netWPM}
                </Typography>
                <Typography variant="caption" sx={{ color: "#166534" }}>
                  Words Per Minute
                </Typography>
              </Box>

              <Box sx={{ p: 2, backgroundColor: "#eff6ff", borderRadius: 3, border: "1px solid #bfdbfe" }}>
                <Typography variant="caption" sx={{ color: "#1e40af", fontWeight: 800 }}>
                  ACCURACY
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 900, color: "#1d4ed8" }}>
                  {accuracy}%
                </Typography>
                <Typography variant="caption" sx={{ color: "#1e40af" }}>
                  Gross Accuracy
                </Typography>
              </Box>

              <Box sx={{ p: 2, backgroundColor: "#f8fafc", borderRadius: 3, border: "1px solid #e2e8f0" }}>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 800 }}>
                  GROSS SPEED
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#0f172a" }}>
                  {grossWPM} WPM
                </Typography>
              </Box>

              <Box sx={{ p: 2, backgroundColor: "#f8fafc", borderRadius: 3, border: "1px solid #e2e8f0" }}>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 800 }}>
                  MAX STREAK
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#7e22ce" }}>
                  🔥 {maxStreak}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: "#334155", fontStyle: "italic", mb: 2 }}>
              "{isPassed
                ? "Excellent performance! You meet the official speed & accuracy criteria for Haryana State Govt clerical typing tests."
                : "You are close! Regular lab practice under Director Vijender Singh Nara's guidance will get you past 35+ WPM."}"
            </Typography>
          </DialogContent>

          <DialogActions sx={{ justifyContent: "center", gap: 2, pb: 2 }}>
            <Button
              variant="outlined"
              onClick={() => resetTest()}
              startIcon={<RestartAltIcon />}
              sx={{ fontWeight: 800, borderRadius: 2 }}
            >
              Try Again
            </Button>

            <Link href="/contact?course=typing-speed" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1e40af",
                  fontWeight: 900,
                  borderRadius: 2,
                  "&:hover": { backgroundColor: "#1d4ed8" },
                }}
              >
                Enroll For Lab Batch
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </main>

      <Footer />
    </>
  );
}
