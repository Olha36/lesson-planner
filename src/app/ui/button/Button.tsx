import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

type BtnProps = {
  text: string;
} & Omit<ButtonProps, "children">;

export default function Btn({
  text,
  variant = "contained",
  fullWidth = false,
  disabled = false,
  onClick,
  className = "",
  sx,
  ...props
}: BtnProps) {
  return (
    <Button
      {...props}
      variant={variant}
      type="button"
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      className={className}
      sx={[
        {
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
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {text}
    </Button>
  );
}
