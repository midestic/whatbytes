import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export default function PriceSlider({
  range,
  setRange,
}: {
  range: [number, number];
  setRange: (range: [number, number]) => void;
}) {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setRange([newValue[0], newValue[1]]);
    }
  };

  return (
    <Box className="w-full text-white p-4 rounded-lg mx-auto mt-2">
      <label className="block mb-2 font-semibold text-white">Price</label>
      <Slider
        value={range}
        onChange={handleChange}
        min={0}
        max={1000}
        step={1}
        valueLabelDisplay="auto"
        sx={{
          color: "#fff",
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: "2px solid #1976d2",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#fff",
            opacity: 0.5,
          },
          "& .MuiSlider-track": {
            backgroundColor: "#fff",
          },
        }}
      />
      <div className="flex justify-between mt-2 text-sm">
        <span>{range[0]}</span>
        <span>{range[1]}</span>
      </div>
    </Box>
  );
}
