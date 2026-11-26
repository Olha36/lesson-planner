import { Box, Card, CardContent, Typography } from "@mui/material";

interface Goal {
  title: string;
  progress: number;
}

interface Lesson {
  title: string;
  subtitle: string;
  date: string;
  duration: string;
}

interface StudentOverviewProps {
  name: string;
  level: string;
  age: number;
  focus: string;
  goal: string;
  weakness: string;
  notes: string;
  goals?: Goal[];
  lessons?: Lesson[];
}

export default function StudentOverview({
  level,
  age,
  focus,
  goal,
  weakness,
  notes,
}: StudentOverviewProps) {
  return (
    <Box className="flex flex-col gap-6">
      <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card variant="outlined" className="rounded-2xl">
          <CardContent className="p-6">
            <Typography variant="h6" className="font-semibold mb-6">
              Profile
            </Typography>

            <Box className="grid grid-cols-2 gap-y-6">
              <ProfileField label="Level" value={level} />
              <ProfileField label="Age" value={String(age)} />

              <ProfileField label="Focus" value={focus} />
              <ProfileField label="Goal" value={goal} />

              <ProfileField label="Weaknesses" value={weakness} />

              <Box className="col-span-2">
                <ProfileField label="Notes" value={notes} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <Box className="flex flex-col gap-1">
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>

      <Typography variant="body1" className="font-medium">
        {value}
      </Typography>
    </Box>
  );
}
