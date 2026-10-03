"use client";

import React, { forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";

export type InputProps = Omit<TextFieldProps, "variant"> & {
  variant?: "outlined" | "filled" | "standard";
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, slotProps, ...props },
  ref
) {
  return (
    <TextField
      ref={ref}
      variant="outlined"
      fullWidth
      {...props}
      slotProps={{
        ...slotProps,
        htmlInput: {
          style: {
            paddingTop: "12px",
            height: "auto",
            fontSize: "0.95rem",
          },
          ...(slotProps?.htmlInput || {}),
        },
      }}
    />
  );
});

export default Input;
