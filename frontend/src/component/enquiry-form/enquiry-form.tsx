"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, MenuItem, TextField, Typography, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { enquirySchema, EnquirySchemaType } from "../../schemas/enquiry";
import Button from "../common/button";
import styles from "./enquiry-form.module.css";

const COURSES_OPTIONS = [
  { value: "typing-speed", label: "Government Typing Speed Test (English & Hindi)" },
  { value: "web-development", label: "Web Development (IT Company Industry Grade)" },
  { value: "cybersecurity", label: "Cybersecurity & Network Defense (IT Grade)" },
  { value: "basic-computer", label: "Basic Computer Course & DCA / Tally Prime" },
];

export default function EnquiryForm({ defaultCourse = "" }: { defaultCourse?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<EnquirySchemaType>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      course_slug: defaultCourse || "typing-speed",
    },
  });

  const onSubmit = async (data: EnquirySchemaType) => {
    setSubmitting(true);
    // Simulate network API submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    setSubmitting(false);
    reset();
  };

  const handleWhatsAppSubmit = () => {
    const values = getValues();
    const courseObj = COURSES_OPTIONS.find((c) => c.value === values.course_slug);
    const courseName = courseObj ? courseObj.label : values.course_slug;

    const message = `Hello Director Vijender Singh Nara / Hartron Team,\n\nI want to enquire about admission at Hartron Skill Centre near SD College Panipat:\n\n• Name: ${values.name || "Student"}\n• Phone: ${values.phone || "N/A"}\n• Course: ${courseName}\n• Message: ${values.message || "Please share batch details and fee structure."}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919034127171?text=${encoded}`, "_blank");
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h3" sx={{ mb: 1, wordBreak: "break-word" }}>
        Admission / Course Enquiry
      </Typography>
      <Typography variant="body1" sx={{ color: "#475569", mb: 3, wordBreak: "break-word" }}>
        Fill out your details to receive course syllabus, batch timings, and fee guidance from Director Vijender Singh Nara's team at SD College Panipat.
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 3, borderRadius: 2, fontWeight: 700 }}>
          Thank you! Your enquiry has been received. Director Vijender Singh Nara's office at Hartron SD College Panipat will call you shortly.
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField
          label="Full Name *"
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          variant="outlined"
          sx={{ minWidth: 0, maxWidth: "100%", width: "100%", boxSizing: "border-box" }}
        />

        <TextField
          label="Phone Number (WhatsApp) *"
          fullWidth
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          variant="outlined"
          sx={{ minWidth: 0, maxWidth: "100%", width: "100%", boxSizing: "border-box" }}
        />

        <TextField
          label="Email Address *"
          type="email"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          variant="outlined"
          sx={{ minWidth: 0, maxWidth: "100%", width: "100%", boxSizing: "border-box" }}
        />

        <TextField
          select
          label="Course Interested In *"
          fullWidth
          defaultValue={defaultCourse || "typing-speed"}
          onChange={(e) => setValue("course_slug", e.target.value)}
          error={!!errors.course_slug}
          helperText={errors.course_slug?.message}
          variant="outlined"
          sx={{ minWidth: 0, maxWidth: "100%", width: "100%", boxSizing: "border-box" }}
          slotProps={{
            select: {
              sx: {
                whiteSpace: "normal",
                wordBreak: "break-word",
                "& .MuiSelect-select": {
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                },
              },
              MenuProps: {
                slotProps: {
                  paper: {
                    style: { maxWidth: 300 },
                  },
                },
              },
            },
          }}
        >
          {COURSES_OPTIONS.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                whiteSpace: "normal",
                wordBreak: "break-word",
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
                py: 1,
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Message / Query (Optional)"
          multiline
          rows={3}
          fullWidth
          {...register("message")}
          variant="outlined"
          sx={{ minWidth: 0, maxWidth: "100%", width: "100%", boxSizing: "border-box" }}
        />

        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, mt: 1, width: "100%", alignItems: "stretch" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            isLoading={submitting}
            loadingText="Submitting..."
            endIcon={<SendIcon />}
            sx={{ flex: 1, minWidth: { sm: "180px" }, py: 1.5, fontSize: "1rem" }}
          >
            Submit Enquiry
          </Button>

          <Button
            variant="outlined"
            onClick={handleWhatsAppSubmit}
            startIcon={<WhatsAppIcon />}
            sx={{
              borderColor: "#16a34a",
              color: "#16a34a",
              fontWeight: 800,
              py: 1.5,
              flex: 1,
              minWidth: { sm: "180px" },
              fontSize: "1rem",
              justifyContent: "center",
              "&:hover": {
                borderColor: "#15803d",
                backgroundColor: "#f0fdf4",
              },
            }}
          >
            WhatsApp Inquiry
          </Button>
        </Box>
      </form>
    </Box>
  );
}
