import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        color: "white",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Portfolio 
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        I'm a Full Stack Developer @ Maybank Finance
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        KAK BAGAS KEREN
      </Typography>
      <Button variant="contained" color="primary" size="large">
        View My Work
      </Button>
    </Box>
  );
};

export default Hero;
