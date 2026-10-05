"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  Tooltip,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import styles from "./gallery.module.css";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "Computer Labs" | "Typing Test Labs" | "IT Industry Labs" | "Campus Overview" | "Classrooms";
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "lab-1",
    src: "/center1.jpg",
    title: "High-Performance Practical Computer Lab",
    category: "Computer Labs",
  },
  {
    id: "typing-lab",
    src: "/center2.jpg",
    title: "Government Exam Typing Speed Practice Zone",
    category: "Typing Test Labs",
  },
  {
    id: "web-dev-lab",
    src: "/center3.jpg",
    title: "Full Stack Web Development & Coding Studio",
    category: "IT Industry Labs",
  },
  {
    id: "reception-desk",
    src: "/center4.jpg",
    title: "Campus Reception & Student Desk",
    category: "Campus Overview",
  },
  {
    id: "cybersecurity-lab",
    src: "/center5.jpg",
    title: "Cybersecurity & Network Defense Lab Setup",
    category: "IT Industry Labs",
  },
  {
    id: "classroom-hall",
    src: "/center6.jpg",
    title: "Interactive Classroom & Lecture Hall",
    category: "Classrooms",
  },
];

const CATEGORIES = [
  "All Photos",
  "Computer Labs",
  "Typing Test Labs",
  "IT Industry Labs",
  "Campus Overview",
  "Classrooms",
] as const;

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    return GALLERY_IMAGES.filter((img) => {
      return selectedCategory === "All Photos" || img.category === selectedCategory;
    });
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null || filteredImages.length === 0) return;
    setLightboxIndex((prev) =>
      prev === null || prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null || filteredImages.length === 0) return;
    setLightboxIndex((prev) =>
      prev === null || prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  const activeImage =
    lightboxIndex !== null && filteredImages[lightboxIndex]
      ? filteredImages[lightboxIndex]
      : null;

  return (
    <Box className={styles.galleryWrapper}>
      {/* Header Banner */}
      <Box className={styles.headerSection}>
        <Box className={styles.headerContainer}>
          <Box className={styles.badge}>
            <PhotoLibraryIcon className={styles.badgeIcon} />
            Campus Gallery
          </Box>
          <Typography variant="h1" className={styles.title}>
            Hartron Skill Centre Panipat
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box className={styles.mainContainer}>
        {/* Category Filter Chips */}
        <Box className={styles.controlsBar}>
          <Box className={styles.filterChips}>
            {CATEGORIES.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`${styles.filterChip} ${
                  selectedCategory === cat ? styles.filterChipActive : ""
                }`}
              />
            ))}
          </Box>
        </Box>

        {/* Gallery Image Grid */}
        <Box className={styles.imageGrid}>
          {filteredImages.map((item, index) => (
            <Box
              key={item.id}
              className={styles.gridCard}
              onClick={() => openLightbox(index)}
            >
              <Box className={styles.imageContainer}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.cardImg}
                  priority={index < 3}
                />
                <Box className={styles.imageOverlay}>
                  <Tooltip title="View Full Image" arrow>
                    <IconButton className={styles.zoomButton} aria-label="view image">
                      <ZoomInIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box className={styles.categoryChipOnImage}>
                  {item.category}
                </Box>
              </Box>

              <Box className={styles.cardBody}>
                <Typography variant="h3" className={styles.cardTitle}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Fullscreen Image Lightbox Modal */}
      <Dialog
        open={lightboxIndex !== null}
        onClose={closeLightbox}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            className: styles.lightboxPaper,
          },
        }}
      >
        {activeImage && (
          <DialogContent className={styles.lightboxContent}>
            <IconButton
              onClick={closeLightbox}
              className={styles.lightboxCloseBtn}
              aria-label="close modal"
            >
              <CloseIcon />
            </IconButton>

            {/* Lightbox Viewer Stage */}
            <Box className={styles.lightboxViewerStage}>
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className={styles.lightboxImg}
                priority
              />

              {/* Prev / Next Nav Arrows */}
              <IconButton
                onClick={handlePrev}
                className={`${styles.navBtn} ${styles.navBtnPrev}`}
                aria-label="Previous image"
              >
                <NavigateBeforeIcon fontSize="large" />
              </IconButton>

              <IconButton
                onClick={handleNext}
                className={`${styles.navBtn} ${styles.navBtnNext}`}
                aria-label="Next image"
              >
                <NavigateNextIcon fontSize="large" />
              </IconButton>

              {/* Bottom Caption Bar */}
              <Box className={styles.lightboxCaptionBar}>
                <Typography className={styles.lightboxCaptionTitle}>
                  {activeImage.title}
                </Typography>
                <Box className={styles.lightboxCounter}>
                  {(lightboxIndex ?? 0) + 1} / {filteredImages.length}
                </Box>
              </Box>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
}
