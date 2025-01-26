import { Skeleton } from "@mui/material";
import React from "react";

export default function ImageSkeleton({width, height}) {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width={width}
      height={height}
      className="intro-image rounded-lg"
      sx={{
        backgroundColor: "rgba(200, 200, 200, 0.3)",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    />
  );
}
