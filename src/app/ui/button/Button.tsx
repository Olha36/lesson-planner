import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

type BtnProps = {
  text: string;
  variant?: ButtonProps["variant"];
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Btn({
  text,
  variant = "contained",
  fullWidth = false,
  disabled = false,
  onClick,
  className = "",
}: BtnProps) {
  return (
    <Button
      variant={variant}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      fullWidth={fullWidth}
      className={className}
      sx={{
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

        ...(variant === "contained" && {
          backgroundColor: "var(--color-primary)",
          color: "var(--color-background)",
          border: "1px solid var(--color-primary)",

          "&:hover": {
            backgroundColor: "var(--color-primary-purple)",
            borderColor: "var(--color-primary-purple)",
          },

          "&:disabled": {
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-background)",
            borderColor: "var(--color-primary-light)",
          },
        }),

        ...(variant === "outlined" && {
          backgroundColor: "transparent",
          color: "var(--color-primary)",
          borderColor: "var(--color-primary)",

          "&:hover": {
            backgroundColor: "var(--color-primary-soft)",
            borderColor: "var(--color-primary-purple)",
            color: "var(--color-primary-purple)",
          },

          "&:disabled": {
            color: "var(--color-text-placeholder)",
            borderColor: "var(--color-border)",
          },
        }),
      }}
    >
      {text}
    </Button>
  );
}
