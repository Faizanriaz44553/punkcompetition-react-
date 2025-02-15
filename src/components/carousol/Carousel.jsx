import React from "react";
import { Box, Container, Typography, Button, useMediaQuery, useTheme } from "@mui/material";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: "550px",
        backgroundImage: isMobile ? "url('/images/mobile.png')" : "url('/images/mobile.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Red Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 50, 50, 0.5))",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 1, textAlign: "center", px: 2 }}>
        <Typography variant={isMobile ? "h4" : "h2"} color="white" sx={{ fontWeight: "bold", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
          WIN £2500 HOLIDAY VOUCHER + £5000 CASH
        </Typography>
        <Typography variant={isMobile ? "body1" : "h6"} color="white" sx={{ mt: 2, textShadow: "1px 1px 5px rgba(0,0,0,0.3)" }}>
          Participate now and stand a chance to win amazing prizes!
        </Typography>
        <Button 
          variant="contained" 
          sx={{ mt: 3, backgroundColor: "#ff5722", color: "white", fontSize: "18px", padding: "10px 20px", borderRadius: "25px", '&:hover': { backgroundColor: "#e64a19" } }}
        >
          Enter Now
        </Button>
      </Container>
    </Box>
  );
};

export default Banner;
