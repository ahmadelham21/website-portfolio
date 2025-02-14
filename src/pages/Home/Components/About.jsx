import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        Hi, I'm a passionate developer with experience in building web
        applications using modern technologies like React, Node.js, and more.
      </Typography>
    </Box>
  );
};

export default About;
