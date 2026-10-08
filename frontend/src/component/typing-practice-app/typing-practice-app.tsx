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
import styles from "./typing-practice-app.module.css";

const SAMPLE_PASSAGES = {
  govt: "The Haryana State Electronics Development Corporation Limited (HARTRON) is the premier agency for promoting IT education and recruitment testing across Haryana state. Under the guidance of Manager Vijender Singh Nara at Hartron Skill Centre Panipat, candidate students undergo rigorous daily typing speed practice to clear HSSC, HKRN, and High Court clerical examinations with 100% accuracy and speed exceeding 35 words per minute.",
  sprint: "Speed and accuracy are the core foundation of clearing government clerical computer tests. Hartron Skill Centre Panipat equips students with real-time feedback, touch-typing posture, and backspace restriction drill modes.",
  hindi: "हरियाणा राज्य इलेक्ट्रॉनिक्स विकास निगम लिमिटेड (हार्ट्रॉन) कंप्यूटर शिक्षा तथा सरकारी भर्ती टाइपिंग परीक्षा का प्रमुख केंद्र है। पानीपत स्थित हार्ट्रॉन स्किल सेंटर में प्रबंधक विजेंद्र सिंह नारा के नेतृत्व में विद्यार्थी उच्च गति प्राप्त करते हैं।",
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
    <Box className={styles.container}>
      {/* Page Header */}
      <Box className={styles.header}>
        <Container maxWidth="lg">
          <Box className={styles.accreditationBadge}>
            <VerifiedIcon className={styles.verifiedIcon} />
            Official Govt Exam Speed Simulator • Manager: Vijender Singh Nara
          </Box>
          <Typography
            variant="h1"
            className={styles.title}
          >
            Interactive Government Typing Speed Practice
          </Typography>
          <Typography
            className={styles.subTitle}
          >
            Master high-speed touch typing for Haryana Government Recruitment Exams under Manager <strong>Vijender Singh Nara</strong> at Hartron Skill Centre Panipat.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className={styles.contentContainer}>
        {/* Main Control Panel */}
        <Paper
          elevation={0}
          className={styles.controlPanel}
        >
          <Box className={styles.controlsWrapper}>
            <Box className={styles.passageButtonGroup}>
              <Button
                variant={passageType === "govt" ? "contained" : "outlined"}
                size="small"
                onClick={() => handlePassageChange("govt")}
                className={styles.passageButton}
              >
                Govt Exam Passage
              </Button>
              <Button
                variant={passageType === "sprint" ? "contained" : "outlined"}
                size="small"
                onClick={() => handlePassageChange("sprint")}
                className={styles.passageButton}
              >
                Speed Sprint
              </Button>
              <Button
                variant={passageType === "hindi" ? "contained" : "outlined"}
                size="small"
                onClick={() => handlePassageChange("hindi")}
                className={styles.passageButton}
              >
                हिंदी टाइपिंग (Hindi)
              </Button>
            </Box>

            <Box className={styles.rightControls}>
              <Box className={styles.timerGroup}>
                <TimerIcon fontSize="small" className={styles.timerIcon} />
                {[30, 60, 120].map((d) => (
                  <Button
                    key={d}
                    size="small"
                    variant={duration === d ? "contained" : "text"}
                    onClick={() => setDuration(d as ExamDuration)}
                    className={styles.durationButton}
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
                  <Typography variant="caption" className={styles.switchLabel}>
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
        <Box className={styles.metricsGrid}>
          <Paper
            elevation={0}
            className={styles.metricCard}
          >
            <Typography variant="caption" className={styles.metricLabel}>
              Time Left
            </Typography>
            <Typography variant="h4" className={timeLeft <= 10 ? styles.metricValueAlert : styles.metricValuePrimary}>
              {timeLeft}s
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            className={styles.metricCard}
          >
            <Typography variant="caption" className={styles.metricLabel}>
              Net WPM
            </Typography>
            <Typography variant="h4" className={styles.metricValueText}>
              {metrics.netWpm}
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            className={styles.metricCard}
          >
            <Typography variant="caption" className={styles.metricLabel}>
              Accuracy
            </Typography>
            <Typography variant="h4" className={metrics.accuracy >= 95 ? styles.metricValueSuccess : styles.metricValueWarning}>
              {metrics.accuracy}%
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            className={styles.metricCard}
          >
            <Typography variant="caption" className={styles.metricLabel}>
              Key Streak
            </Typography>
            <Typography variant="h4" className={styles.metricValuePrimary}>
              🔥 {streak}
            </Typography>
          </Paper>
        </Box>

        {/* Passage Display Box */}
        <Paper
          elevation={0}
          onClick={() => inputRef.current?.focus()}
          className={`${styles.passagePaper} ${isActive ? styles.passagePaperActive : ""}`}
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
            className={styles.hiddenInput}
          />
        </Paper>

        {/* Action Controls */}
        <Box className={styles.actionControls}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RestartAltIcon />}
            onClick={resetTest}
            className={styles.resetBtn}
          >
            Reset / Restart Drill
          </Button>

          <Typography variant="body2" className={styles.hintText}>
            💡 Direct Campus Lab Practice available at <strong>Hartron Panipat</strong>
          </Typography>
        </Box>

        {/* Quick Guidance Box */}
        <Paper
          elevation={0}
          className={styles.guidanceCard}
        >
          <Box className={styles.guidanceLeft}>
            <SchoolIcon className={styles.schoolIcon} />
            <Box>
              <Typography variant="h6" className={styles.guidanceTitle}>
                Want 100% Guaranteed Typing Speed in Govt Exams?
              </Typography>
              <Typography variant="body2" className={styles.guidanceSub}>
                Join Manager Vijender Singh Nara's specialized lab batch in Panipat with official HARTRON exam software.
              </Typography>
            </Box>
          </Box>

          <Link href="/contact?course=typing-speed" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className={styles.joinBatchBtn}
            >
              Join Campus Lab Batch
            </Button>
          </Link>
        </Paper>
      </Container>

      {/* Results Dialog */}
      <Dialog open={isFinished} onClose={resetTest} maxWidth="xs" fullWidth>
        <DialogTitle className={styles.dialogTitle}>
          🏆 Test Results Summary
        </DialogTitle>
        <DialogContent>
          <Box className={styles.dialogBody}>
            <Typography variant="h3" className={styles.dialogScore}>
              {metrics.netWpm} WPM
            </Typography>
            <Typography variant="body2" className={styles.dialogScoreSub}>
              Net Speed (Target: 35 WPM for Haryana Govt)
            </Typography>

            <Box className={styles.dialogMetrics}>
              <Box>
                <Typography variant="caption" className={styles.dialogMetricLabel}>
                  ACCURACY
                </Typography>
                <Typography variant="h6" className={styles.dialogAccuracy}>
                  {metrics.accuracy}%
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" className={styles.dialogMetricLabel}>
                  GROSS SPEED
                </Typography>
                <Typography variant="h6" className={styles.dialogWpm}>
                  {metrics.grossWpm} WPM
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" className={styles.dialogMetricLabel}>
                  MAX STREAK
                </Typography>
                <Typography variant="h6" className={styles.dialogStreak}>
                  🔥 {maxStreak}
                </Typography>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button variant="contained" onClick={resetTest} startIcon={<RestartAltIcon />} className={styles.tryAgainBtn}>
            Try Again
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
