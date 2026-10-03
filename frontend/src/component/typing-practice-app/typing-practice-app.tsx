"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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

const SAMPLE_PASSAGES = {
  govt: "The Haryana State Electronics Development Corporation Limited (HARTRON) is the premier agency for promoting IT education and recruitment testing across Haryana state. Under the guidance of Director Vijender Singh Nara at Hartron Skill Centre Panipat, candidate students undergo rigorous daily typing speed practice to clear HSSC, HKRN, and High Court clerical examinations with 100% accuracy and speed exceeding 35 words per minute.",
  sprint: "Speed and accuracy are the core foundation of clearing government clerical computer tests. Hartron Skill Centre Panipat equips students with real-time feedback, touch-typing posture, and backspace restriction drill modes.",
  hindi: "हरियाणा राज्य इलेक्ट्रॉनिक्स विकास निगम लिमिटेड (हार्ट्रॉन) कंप्यूटर शिक्षा तथा सरकारी भर्ती टाइपिंग परीक्षा का प्रमुख केंद्र है। पानीपत स्थित हार्ट्रॉन स्किल सेंटर में निदेशक विजेंद्र सिंह नारा के नेतृत्व में विद्यार्थी उच्च गति प्राप्त करते हैं।",
};

type ExamDuration = 30 | 60 | 120;

export default function TypingPracticeApp() {
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

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch {}
  };

  const handlePassageChange = (type: "govt" | "sprint" | "hindi") => {
    setPassageType(type);
    setText(SAMPLE_PASSAGES[type]);
    resetTest();
  };

  const resetTest = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setUserInput("");
    setTimeLeft(duration);
    setIsActive(false);
    setIsFinished(false);
    setStreak(0);
    setMaxStreak(0);
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsActive(false);
      setIsFinished(true);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (restrictBackspace && val.length < userInput.length) {
      return;
    }

    if (!isActive && !isFinished) {
      setIsActive(true);
    }

    playClickSound();
    setUserInput(val);

    const currentCharIndex = val.length - 1;
    if (currentCharIndex >= 0) {
      const isCorrect = val[currentCharIndex] === text[currentCharIndex];
      if (isCorrect) {
        setStreak((prev) => {
          const next = prev + 1;
          setMaxStreak((m) => Math.max(m, next));
          return next;
        });
      } else {
        setStreak(0);
      }
    }

    if (val.length >= text.length) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsActive(false);
      setIsFinished(true);
    }
  };

  const calculateMetrics = () => {
    const timeSpent = Math.max(1, duration - timeLeft);
    const wordsTyped = userInput.trim().length / 5;
    const grossWpm = Math.round((wordsTyped / timeSpent) * 60) || 0;

    let correctChars = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) correctChars++;
    }

    const netWordsTyped = correctChars / 5;
    const netWpm = Math.round((netWordsTyped / timeSpent) * 60) || 0;
    const accuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100;

    return { grossWpm, netWpm, accuracy, timeSpent, correctChars };
  };

  const metrics = calculateMetrics();

  return (
    <Box sx={{ pb: 6 }}>
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
          padding: { xs: "24px 14px", sm: "40px 20px" },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Chip
            icon={<VerifiedIcon sx={{ fontSize: "16px !important", color: "primary.main" }} />}
            label="Official Govt Exam Speed Simulator"
            sx={{
              backgroundColor: "primary.bg",
              color: "primary.main",
              fontWeight: 800,
              fontSize: "0.75rem",
              mb: 1.5,
              textTransform: "uppercase",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.25rem", md: "2.75rem" },
              fontWeight: 900,
              color: "text.primary",
              mb: 1.5,
              wordBreak: "break-word",
            }}
          >
            Interactive Government Typing Speed Practice
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", sm: "1.05rem" },
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Master high-speed touch typing for Haryana Government Recruitment Exams under Director <strong>Vijender Singh Nara</strong> at Hartron Skill Centre Panipat.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 3 }, px: { xs: 1.5, sm: 3 } }}>
        {/* Main Control Panel */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            borderRadius: { xs: "10px", sm: "16px" },
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Button
                variant={passageType === "govt" ? "contained" : "outlined"}
                size="small"
                onClick={() => handlePassageChange("govt")}
                sx={{ borderRadius: "8px", fontWeight: 700 }}
              >
                Govt Exam Passage
              </Button>
              <Button
                variant={passageType === "sprint" ? "contained" : "outlined"}
                size="small"
                onClick={() => handlePassageChange("sprint")}
                sx={{ borderRadius: "8px", fontWeight: 700 }}
              >
                Speed Sprint
              </Button>
              <Button
                variant={passageType === "hindi" ? "contained" : "outlined"}
                size="small"
                onClick={() => handlePassageChange("hindi")}
                sx={{ borderRadius: "8px", fontWeight: 700 }}
              >
                हिंदी टाइपिंग (Hindi)
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
              <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                <TimerIcon fontSize="small" sx={{ color: "text.secondary" }} />
                {[30, 60, 120].map((d) => (
                  <Button
                    key={d}
                    size="small"
                    variant={duration === d ? "contained" : "text"}
                    onClick={() => setDuration(d as ExamDuration)}
                    sx={{ minWidth: 36, px: 1, fontWeight: 800, borderRadius: "6px" }}
                  >
                    {d}s
                  </Button>
                ))}
              </Box>

              <FormControlLabel
                control={
                  <Switch
                    checked={restrictBackspace}
                    onChange={(e) => setRestrictBackspace(e.target.checked)}
                    size="small"
                  />
                }
                label={
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "text.primary" }}>
                    Strict Backspace
                  </Typography>
                }
              />

              <IconButton onClick={() => setSoundEnabled(!soundEnabled)} size="small">
                {soundEnabled ? <VolumeUpIcon fontSize="small" color="primary" /> : <VolumeOffIcon fontSize="small" />}
              </IconButton>
            </Box>
          </Box>
        </Paper>

        {/* Realtime Metrics Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
            gap: { xs: 1.5, sm: 2 },
            mb: 3,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: "12px",
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 800, textTransform: "uppercase" }}>
              Time Left
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 900, color: timeLeft <= 10 ? "error.main" : "primary.main" }}>
              {timeLeft}s
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: "12px",
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 800, textTransform: "uppercase" }}>
              Net WPM
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 900, color: "text.primary" }}>
              {metrics.netWpm}
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: "12px",
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 800, textTransform: "uppercase" }}>
              Accuracy
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 900, color: metrics.accuracy >= 95 ? "success.main" : "warning.main" }}>
              {metrics.accuracy}%
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: "12px",
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 800, textTransform: "uppercase" }}>
              Key Streak
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 900, color: "primary.main" }}>
              🔥 {streak}
            </Typography>
          </Paper>
        </Box>

        {/* Passage Display Box */}
        <Paper
          elevation={0}
          onClick={() => inputRef.current?.focus()}
          sx={{
            p: { xs: 2.5, sm: 4 },
            borderRadius: { xs: "12px", sm: "16px" },
            backgroundColor: "background.paper",
            border: "2px solid",
            borderColor: isActive ? "primary.main" : "divider",
            cursor: "text",
            position: "relative",
            minHeight: 180,
            mb: 3,
            lineHeight: 2,
            fontSize: { xs: "1rem", sm: "1.25rem" },
            fontFamily: "monospace",
            wordBreak: "break-word",
          }}
        >
          {text.split("").map((char, index) => {
            let color = "text.secondary";
            let bgColor = "transparent";

            if (index < userInput.length) {
              if (userInput[index] === char) {
                color = "#16a34a"; // Correct
              } else {
                color = "#dc2626"; // Error
                bgColor = "rgba(220, 38, 38, 0.15)";
              }
            } else if (index === userInput.length) {
              bgColor = "rgba(37, 99, 235, 0.25)";
            }

            return (
              <span
                key={index}
                style={{
                  color,
                  backgroundColor: bgColor,
                  borderRadius: "2px",
                  padding: "2px 1px",
                  fontWeight: index < userInput.length ? 800 : 500,
                }}
              >
                {char}
              </span>
            );
          })}

          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            disabled={isFinished}
            style={{
              position: "absolute",
              opacity: 0,
              pointerEvents: "none",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Paper>

        {/* Action Controls */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexWrap: "wrap", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RestartAltIcon />}
            onClick={resetTest}
            sx={{ py: 1.2, px: 3, borderRadius: "10px", fontWeight: 800 }}
          >
            Reset / Restart Drill
          </Button>

          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
            💡 Direct Campus Lab Practice available at <strong>Hartron Panipat</strong>
          </Typography>
        </Box>

        {/* Quick Guidance Box */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            borderRadius: { xs: "10px", sm: "16px" },
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <SchoolIcon sx={{ fontSize: { xs: 32, sm: 44 }, color: "primary.main" }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900, color: "text.primary", fontSize: { xs: "0.95rem", sm: "1.1rem" } }}>
                Want 100% Guaranteed Typing Speed in Govt Exams?
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
                Join Director Vijender Singh Nara's specialized lab batch in Panipat with official HARTRON exam software.
              </Typography>
            </Box>
          </Box>

          <Link href="/contact?course=typing-speed" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                whiteSpace: "nowrap",
                fontWeight: 800,
                borderRadius: "8px",
                px: 3,
                py: 1.2,
              }}
            >
              Join Campus Lab Batch
            </Button>
          </Link>
        </Paper>
      </Container>

      {/* Results Dialog */}
      <Dialog open={isFinished} onClose={resetTest} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: "center", fontWeight: 900, fontSize: "1.5rem" }}>
          🏆 Test Results Summary
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: "center", py: 2 }}>
            <Typography variant="h3" sx={{ fontWeight: 900, color: "primary.main", mb: 0.5 }}>
              {metrics.netWpm} WPM
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 700, mb: 3 }}>
              Net Speed (Target: 35 WPM for Haryana Govt)
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-around", borderTop: "1px solid", borderColor: "divider", pt: 2 }}>
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700 }}>
                  ACCURACY
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 900, color: "success.main" }}>
                  {metrics.accuracy}%
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700 }}>
                  GROSS SPEED
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 900, color: "text.primary" }}>
                  {metrics.grossWpm} WPM
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700 }}>
                  MAX STREAK
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 900, color: "primary.main" }}>
                  🔥 {maxStreak}
                </Typography>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <Button variant="contained" onClick={resetTest} startIcon={<RestartAltIcon />} sx={{ px: 4, borderRadius: "10px", fontWeight: 800 }}>
            Try Again
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
