import { Box, CircularProgress, Typography } from "@mui/material";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <Box className={styles.loadingWrapper}>
      <Box className={styles.spinnerContainer}>
        <CircularProgress
          size={72}
          thickness={4}
          className={styles.circularProgress}
        />
        <Box className={styles.spinnerCenter}>
          H
        </Box>
      </Box>

      <Box>
        <Typography
          variant="h6"
          className={styles.loadingTitle}
        >
          HARTRON SKILL CENTRE
        </Typography>
        <Typography
          variant="body2"
          className={styles.loadingSub}
        >
          Loading content, please wait...
        </Typography>
      </Box>
    </Box>
  );
}
