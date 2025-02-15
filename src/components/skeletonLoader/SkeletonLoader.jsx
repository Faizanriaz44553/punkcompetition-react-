import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const SkeletonLoader = ({ lines = 3, width = "100%", height = 20 }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton key={index} variant="rectangular" width={width} height={height} />
      ))}
    </Box>
  );
};

export default SkeletonLoader;


