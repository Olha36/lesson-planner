import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

type BtnProps = {
  text: string;
  variant?: ButtonProps["variant"];
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Btn({
  text,
  variant = "contained",
  fullWidth = false,
  disabled = false,
  onClick,
}: BtnProps) {
  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor:
          variant === "contained" ? "var(--color-primary)" : "transparent",

        color:
          variant === "contained"
            ? "var(--color-background)"
            : "var(--color-primary)",

        borderColor: "var(--color-primary)",

        borderRadius: "10px",

        padding: {
          xs: "10px 16px",
          sm: "11px 20px",
        },

        fontSize: {
          xs: "14px",
          sm: "15px",
        },

        fontWeight: 600,
        textTransform: "none",

        transition: "all 0.2s ease",

        "&:hover": {
          backgroundColor:
            variant === "contained"
              ? "var(--color-primary-purple)"
              : "var(--color-primary-soft)",

          borderColor: "var(--color-primary-purple)",

          color:
            variant === "contained"
              ? "var(--color-background)"
              : "var(--color-primary-purple)",
        },

        "&:disabled": {
          backgroundColor:
            variant === "contained"
              ? "var(--color-primary-light)"
              : "transparent",

          color:
            variant === "contained"
              ? "var(--color-background)"
              : "var(--color-text-placeholder)",

          borderColor: "var(--color-border)",
        },
      }}
    >
      {text}
    </Button>
  );
}
