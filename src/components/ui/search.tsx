"use client";

import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

type SearchAppBarProps = {
  placeholderText: string;
  width?: string | number;
  focusedWidth?: string | number;
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginLeft: 0,
  border: "1px solid black",
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "focusedWidth",
})<{
  width?: string | number;
  focusedWidth?: string | number;
}>(({ theme, width = "12ch", focusedWidth = "20ch" }) => ({
  color: "inherit",
  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("sm")]: {
      width,

    
    },
  },
}));

export default function SearchAppBar({
  placeholderText,
  width,
  focusedWidth,
}: SearchAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          width={width}
          focusedWidth={focusedWidth}
          placeholder={placeholderText}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
