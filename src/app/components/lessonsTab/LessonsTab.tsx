import { Box, Card, CardContent, Typography } from "@mui/material";
import Btn from "@/app/ui/button/Button";
import type { Lesson } from "@/data/student";

interface LessonsTabProps {
  lessons: Lesson[];
}

export default function LessonsTab({ lessons }: LessonsTabProps) {
  return (
    <Card variant="outlined" className="rounded-2xl">
      <CardContent className="p-6">
        <Box className="flex items-center justify-between gap-4 mb-4">
          <Typography variant="h6" className="font-semibold">
            All Lessons
          </Typography>

          <Btn text="Create new lesson" />
        </Box>

        {lessons.length > 0 ? (
          <Box className="flex flex-col">
            {lessons.map((lesson) => (
              <Box
                key={lesson.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-4 border-b last:border-b-0 border-gray-100"
              >
                <Box>
                  <Typography variant="subtitle1" className="font-medium">
                    {lesson.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {lesson.subtitle}
                  </Typography>
                </Box>

                <Box className="flex items-center gap-6 text-sm text-gray-500">
                  <span>{lesson.date}</span>
                  <span>{lesson.duration}</span>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography color="text.secondary" className="py-6 text-center">
            No lessons yet. Create your first lesson!
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
