import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "75vh",
        backgroundColor: "background.default",
        gap: 3,
        px: 2,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          size={72}
          thickness={4}
          sx={{ color: "primary.main" }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            color: "var(--text-on-dark)",
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
          }}
        >
          H
        </Box>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            color: "text.primary",
            letterSpacing: "0.05em",
            mb: 0.5,
          }}
        >
          HARTRON SKILL CENTRE
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
          }}
        >
          Loading content, please wait...
        </Typography>
      </Box>
    </Box>
  );
}
