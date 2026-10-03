"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, MenuItem, TextField, Typography, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { enquirySchema, EnquirySchemaType } from "../../schemas/enquiry";
import styles from "./enquiry-form.module.css";

const COURSES_OPTIONS = [
  { value: "typing-speed", label: "Government Typing Speed Test (English & Hindi)" },
  { value: "web-development", label: "Web Development (IT Company Industry Grade)" },
  { value: "cybersecurity", label: "Cybersecurity & Network Defense (IT Grade)" },
  { value: "basic-computer", label: "Basic Computer Course & DCA / Tally Prime" },
];

export default function EnquiryForm({ defaultCourse = "" }: { defaultCourse?: string }) {
  const [submitted, setSubmitted] = useState(false);

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

  const onSubmit = (data: EnquirySchemaType) => {
    setSubmitted(true);
    reset();
  };

  const handleWhatsAppSubmit = () => {
    const values = getValues();
    const courseObj = COURSES_OPTIONS.find((c) => c.value === values.course_slug);
    const courseName = courseObj ? courseObj.label : values.course_slug;

    const message = `Hello Director Vijender Singh Nara / Hartron Team,\n\nI want to enquire about admission at Hartron Skill Centre near SD College Panipat:\n\n• Name: ${values.name || "Student"}\n• Phone: ${values.phone || "N/A"}\n• Course: ${courseName}\n• Message: ${values.message || "Please share batch details and fee structure."}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919812000000?text=${encoded}`, "_blank");
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h3" className={styles.title}>
        Admission / Course Enquiry
      </Typography>
      <Typography className={styles.subtitle}>
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
          sx={{ backgroundColor: "#ffffff", maxWidth: "100%", boxSizing: "border-box" }}
        />

        <TextField
          label="Phone Number (WhatsApp) *"
          fullWidth
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          variant="outlined"
          sx={{ backgroundColor: "#ffffff", maxWidth: "100%", boxSizing: "border-box" }}
        />

        <TextField
          label="Email Address *"
          type="email"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          variant="outlined"
          sx={{ backgroundColor: "#ffffff", maxWidth: "100%", boxSizing: "border-box" }}
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
          sx={{ backgroundColor: "#ffffff", maxWidth: "100%", boxSizing: "border-box" }}
          slotProps={{
            select: {
              MenuProps: {
                style: { maxWidth: 300 },
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
          sx={{ backgroundColor: "#ffffff", maxWidth: "100%", boxSizing: "border-box" }}
        />

        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, mt: 1, width: "100%", alignItems: "stretch" }}>
          <Button
            type="submit"
            variant="contained"
            className={styles.submitBtn}
            endIcon={<SendIcon />}
            sx={{ flex: 1, minWidth: { sm: "180px" }, width: { xs: "100%", sm: "auto" } }}
          >
            Submit Enquiry
          </Button>

          <Button
            variant="outlined"
            onClick={handleWhatsAppSubmit}
            startIcon={<WhatsAppIcon />}
            className={styles.whatsappBtn}
            sx={{
              borderColor: "#16a34a",
              color: "#16a34a",
              fontWeight: 800,
              borderRadius: "10px",
              px: 3,
              py: 1.5,
              flex: 1,
              minWidth: { sm: "180px" },
              width: { xs: "100%", sm: "auto" },
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
