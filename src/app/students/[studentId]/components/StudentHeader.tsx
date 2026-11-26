'use client'
import Image from "next/image";
import Link from "next/link";

import { Box, Typography } from "@mui/material";
import Btn from "@/app/ui/button/Button";

interface StudentHeaderProps {
  studentId: string;
  name: string;
  level: string;
  age: number;
}

export default function StudentHeader({
  studentId,
  name,
  level,
  age,
}: StudentHeaderProps) {
  return (
    <Box className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <Box className="flex items-center gap-4">
        <Box className="relative w-20 h-20 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/avatar.png"
            alt={`${name}'s avatar`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </Box>

        <Box>
          <Typography variant="h4" component="h1" className="font-semibold">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary" className="mt-1">
            {age} years old · {level} · Speaking focus
          </Typography>
        </Box>
      </Box>

      <Btn
        text="Edit profile"
        component={Link}
        href={`/students/${studentId}/edit`}
        variant="outlined"
        className="self-start sm:self-auto"
      />
    </Box>
  );
}
