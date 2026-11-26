"use client";

import { useRouter } from "next/navigation";
import { Tab, Tabs } from "@mui/material";

type StudentTab = "overview" | "lessons" | "progress" | "notes";

interface StudentTabsProps {
  studentId: string;
  activeTab: StudentTab;
}

const tabs: { label: string; value: StudentTab }[] = [
  { label: "Overview", value: "overview" },
  { label: "Lessons", value: "lessons" },
  { label: "Progress", value: "progress" },
  { label: "Notes", value: "notes" },
];

export default function StudentTabs({
  studentId,
  activeTab,
}: StudentTabsProps) {
  const router = useRouter();

  const handleChange = (_event: React.SyntheticEvent, value: StudentTab) => {
    const url =
      value === "overview"
        ? `/students/${studentId}`
        : `/students/${studentId}?tab=${value}`;

    router.push(url);
  };

  return (
    <Tabs
      value={activeTab}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        minHeight: 48,

        "& .MuiTab-root": {
          textTransform: "none",
          fontWeight: 500,
          minHeight: 48,
          px: 3,
        },

        "& .Mui-selected": {
          color: "#7C3AED",
        },

        "& .MuiTabs-indicator": {
          backgroundColor: "#7C3AED",
          height: 3,
          borderRadius: "3px 3px 0 0",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab key={tab.value} label={tab.label} value={tab.value} />
      ))}
    </Tabs>
  );
}
