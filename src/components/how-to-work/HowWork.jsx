import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HowToWork from "../../utils/HowToWork";

const HowWork = () => {
  return (
    <Box sx={{ backgroundColor: "var(--color-white)", py: 5 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: "#F00101",
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            fontSize: { xs: "1.8rem", md: "2.5rem" }, // Responsive font size
          }}
        >
          How It Works
        </Typography>
        <Grid container spacing={3}>
          {HowToWork.map((step) => (
            <Grid item xs={12} sm={6} md={4} key={step.step}>
              <Card
                sx={{
                  backgroundColor: "#343a40",
                  height: "400px",
                  color: "#f8f9fa",
                  textAlign: "center",
                  p: { xs: 2, md: 3 }, // Adjust padding based on screen size
                  borderRadius: 3,
                  boxShadow: "0px 4px 10px rgba(255, 0, 0, 0.3)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <CheckCircleIcon sx={{ fontSize: { xs: 40, md: 40 }, color: "#ffc107" }} />
                  <Typography 
                    variant="h6" 
                    sx={{ fontWeight: "bold", mt: 2, fontSize: { xs: "1.3rem", md: "1.2rem" } }}
                  >
                    {step.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ mt: 2, color: "#adb5bd", fontSize: { xs: "1rem", md: "1rem" } }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowWork;
