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
        backgroundColor: "#ffffff",
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
          sx={{ color: "#1e40af" }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#2563eb",
            color: "#ffffff",
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
            color: "#0f172a",
            letterSpacing: "0.05em",
            mb: 0.5,
          }}
        >
          HARTRON SKILL CENTRE
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#64748b",
            fontWeight: 600,
          }}
        >
          Loading content, please wait...
        </Typography>
      </Box>
    </Box>
  );
}
