"use client";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  slotProps: {
    paper: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  },
};

const levels = ["A1", "A2", "A2+", "B1", "B1+", "B2", "B2+", "C1", "C1+", "C2"];

function getStyles(level: string, personLevel: string[], theme: Theme) {
  return {
    fontWeight: personLevel.includes(level)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personLevel, setPersonLevel] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personLevel>) => {
    const {
      target: { value },
    } = event;
    setPersonLevel(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-level-label">All levels</InputLabel>
        <Select
          labelId="demo-multiple-level-label"
          id="demo-multiple-level"
          multiple
          value={personLevel}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {levels.map((level) => (
            <MenuItem
              key={level}
              value={level}
              style={getStyles(level, personLevel, theme)}
            >
              {level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
