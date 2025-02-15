import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1d1d1d",
        color: "#f8f9fa",
        py: 5,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Company
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#adb5bd" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
              <Link href="#" color="#f8f9fa" underline="none" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link href="#" color="#f8f9fa" underline="none" sx={{ mb: 1 }}>
                About
              </Link>
              <Link href="#" color="#f8f9fa" underline="none" sx={{ mb: 1 }}>
                Services
              </Link>
              <Link href="#" color="#f8f9fa" underline="none" sx={{ mb: 1 }}>
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#adb5bd" }}>
              Email: info@example.com
            </Typography>
            <Typography variant="body2" sx={{ color: "#adb5bd" }}>
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body2" sx={{ color: "#adb5bd" }}>
              Address: 123 Street, City, Country
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4, borderTop: "1px solid #6c757d", pt: 3 }}>
          <Typography variant="body2" color="#adb5bd">
            © 2025 Your Company. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
