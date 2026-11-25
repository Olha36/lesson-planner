"use client";

import { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

export default function SortSelect() {
  const [sortBy, setSortBy] = useState("recent");

  return (
    <FormControl sx={{ width: 240 }}>
      <Select
        size="medium"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        sx={{
          height: 56,
          borderRadius: "8px",
        }}
      >
        <MenuItem value="recent">Recent Activity</MenuItem>
        <MenuItem value="alphabetical">Alphabetical (A–Z)</MenuItem>
        <MenuItem value="alphabetical-desc">Alphabetical (Z–A)</MenuItem>
        <MenuItem value="newest">Progress</MenuItem>
      </Select>
    </FormControl>
  );
}
