'use client';

import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import { useState } from "react";

interface ProgressTabProps {
  overallProgress?: number;
  monthlyProgress?: {
    month: string;
    progress: number;
  }[];
}

const defaultMonthlyProgress = [
  { month: "Aug", progress: 42 },
  { month: "Sep", progress: 65 },
  { month: "Oct", progress: 75 },
];

export default function ProgressTab({
  overallProgress = 75,
  monthlyProgress = defaultMonthlyProgress,
}: ProgressTabProps) {
  const [period, setPeriod] = useState("");

  const chartWidth = 400;
  const chartHeight = 160;

  const maxProgress = 100;

  const chartPoints = monthlyProgress.map((item, index) => {
    const x =
      monthlyProgress.length > 1
        ? (index / (monthlyProgress.length - 1)) * chartWidth
        : chartWidth / 2;

    const y = chartHeight - (item.progress / maxProgress) * chartHeight;

    return { x, y, ...item };
  });

  const linePoints = chartPoints
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const areaPoints = [
    `0,${chartHeight}`,
    linePoints,
    `${chartWidth},${chartHeight}`,
  ].join(" ");

  return (
    <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card variant="outlined" className="rounded-2xl">
        <CardContent className="p-6">
          {/* Header */}
          <Box className="flex items-center justify-between gap-3 mb-6">
            <Box className="flex items-center gap-3">
              <Box className="flex items-center justify-center w-11 h-11 rounded-full bg-purple-100 text-purple-600">
                <span className="text-xl">↗</span>
              </Box>

              <Typography variant="h6" className="font-semibold">
                Learning Progress
              </Typography>
            </Box>


            <FormControl size="small" sx={{ minWidth: 160 }}>
              <Select
                value={period}
                onChange={(event) => setPeriod(event.target.value)}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <Typography color="text.secondary">
                        Choose period
                      </Typography>
                    );
                  }

                  return selected === "3" ? "Last 3 months" : "Last 6 months";
                }}
                sx={{
                  borderRadius: "20px",
                  fontSize: "13px",

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E5E7EB",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7C3AED",
                  },

                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7C3AED",
                  },

                  "& .MuiSelect-select": {
                    padding: "8px 14px",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Choose period
                </MenuItem>

                <MenuItem value="3">Last 3 months</MenuItem>
                <MenuItem value="6">Last 6 months</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Progress Content */}
          <Box className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-6 items-center">
            {/* Circular Progress */}
            <Box className="flex flex-col items-center justify-center gap-3 sm:border-r sm:border-gray-200 sm:pr-6">
              <Box className="relative flex items-center justify-center">
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={120}
                  thickness={4}
                  sx={{ color: "#EDE9FE" }}
                />

                <CircularProgress
                  variant="determinate"
                  value={overallProgress}
                  size={120}
                  thickness={4}
                  sx={{
                    color: "#7C3AED",
                    position: "absolute",
                    left: 0,
                    "& .MuiCircularProgress-circle": {
                      strokeLinecap: "round",
                    },
                  }}
                />

                <Typography variant="h5" className="absolute font-bold">
                  {overallProgress}%
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                className="text-center"
              >
                Overall Progress
              </Typography>
            </Box>

            {/* Line Chart */}
            <Box className="min-w-0 w-full">
              <Box className="flex gap-3">
                {/* Y-axis labels */}
                <Box className="flex flex-col justify-between text-right py-1">
                  {[100, 75, 50, 25, 0].map((value) => (
                    <Typography
                      key={value}
                      variant="caption"
                      color="text.secondary"
                    >
                      {value}%
                    </Typography>
                  ))}
                </Box>

                {/* Chart */}
                <Box className="flex-1 min-w-0">
                  <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="w-full overflow-visible"
                    role="img"
                    aria-label="Learning progress increased from 42 percent in August to 75 percent in October"
                  >
                    <defs>
                      <linearGradient
                        id="progressGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#7C3AED"
                          stopOpacity="0.16"
                        />
                        <stop
                          offset="100%"
                          stopColor="#7C3AED"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Horizontal grid lines */}
                    {[0, 25, 50, 75, 100].map((value) => {
                      const y = chartHeight - (value / 100) * chartHeight;

                      return (
                        <line
                          key={value}
                          x1="0"
                          y1={y}
                          x2={chartWidth}
                          y2={y}
                          stroke="#E5E7EB"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Vertical grid lines */}
                    {chartPoints.map((point) => (
                      <line
                        key={point.month}
                        x1={point.x}
                        y1="0"
                        x2={point.x}
                        y2={chartHeight}
                        stroke="#E5E7EB"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Area under the line */}
                    <polygon
                      points={areaPoints}
                      fill="url(#progressGradient)"
                    />

                    {/* Progress line */}
                    <polyline
                      points={linePoints}
                      fill="none"
                      stroke="#7C3AED"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Data points */}
                    {chartPoints.map((point) => (
                      <circle
                        key={point.month}
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="#7C3AED"
                      />
                    ))}
                  </svg>

                  {/* X-axis labels */}
                  <Box className="flex justify-between mt-3">
                    {monthlyProgress.map((item) => (
                      <Typography
                        key={item.month}
                        variant="caption"
                        color="text.secondary"
                      >
                        {item.month}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
