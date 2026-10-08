"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, MenuItem, Typography, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { enquirySchema, EnquirySchemaType } from "../../schemas/enquiry";
import Input from "../common/input";
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

    const message = `Hello Manager Vijender Singh Nara / Hartron Team,\n\nI want to enquire about admission at Hartron Skill Centre near SD College Panipat:\n\n• Name: ${values.name || "Student"}\n• Phone: ${values.phone || "N/A"}\n• Course: ${courseName}\n• Message: ${values.message || "Please share batch details and fee structure.\n\nEnquiry by: Website"}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919034127171?text=${encoded}`, "_blank");
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h3" className={styles.title}>
        Admission / Course Enquiry
      </Typography>
      <Typography variant="body1" className={styles.subtitle}>
        Fill out your details to receive course syllabus, batch timings, and fee guidance from Manager Vijender Singh Nara's team at SD College Panipat.
      </Typography>

      {submitted && (
        <Alert severity="success" className={styles.successAlert}>
          Thank you! Your enquiry has been received. Manager Vijender Singh Nara's office at Hartron SD College Panipat will call you shortly.
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          label="Full Name *"
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          className={styles.fullWidthInput}
        />

        <Input
          label="Phone Number (WhatsApp) *"
          fullWidth
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          className={styles.fullWidthInput}
        />

        <Input
          label="Email Address *"
          type="email"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          className={styles.fullWidthInput}
        />

        <Input
          select
          label="Course Interested In *"
          fullWidth
          defaultValue={defaultCourse || "typing-speed"}
          onChange={(e) => setValue("course_slug", e.target.value as string)}
          error={!!errors.course_slug}
          helperText={errors.course_slug?.message}
          className={styles.fullWidthInput}
          slotProps={{
            select: {
              className: styles.selectInput,
              MenuProps: {
                slotProps: {
                  paper: {
                    className: styles.selectMenuPaper,
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
              className={styles.menuItemOption}
            >
              {option.label}
            </MenuItem>
          ))}
        </Input>

        <Input
          label="Message / Query (Optional)"
          multiline
          rows={3}
          fullWidth
          {...register("message")}
          className={styles.fullWidthInput}
        />

        <Box className={styles.btnGroup}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            isLoading={submitting}
            loadingText="Submitting..."
            endIcon={<SendIcon className={styles.sendIcon} />}
            className={styles.submitBtn}
          >
            Submit Enquiry
          </Button>

          <Button
            variant="outlined"
            onClick={handleWhatsAppSubmit}
            startIcon={<WhatsAppIcon className={styles.whatsappIcon} />}
            className={styles.whatsappBtn}
          >
            WhatsApp Inquiry
          </Button>
        </Box>
      </form>
    </Box>
  );
}
