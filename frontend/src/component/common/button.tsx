"use client";

import React, { useState } from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean;
  loading?: boolean;
  loadingText?: React.ReactNode;
  onAsyncClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<unknown> | void;
}

export default function Button({
  children,
  isLoading,
  loading,
  loadingText,
  disabled,
  onClick,
  onAsyncClick,
  type = "button",
  startIcon,
  ...props
}: ButtonProps) {
  const [internalLoading, setInternalLoading] = useState(false);

  const activeLoading = isLoading ?? loading ?? internalLoading;

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (activeLoading) return;

    if (onAsyncClick) {
      try {
        setInternalLoading(true);
        await onAsyncClick(e);
      } finally {
        setInternalLoading(false);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <MuiButton
      {...props}
      type={type}
      disabled={disabled || activeLoading}
      onClick={handleClick}
      startIcon={
        activeLoading ? (
          <CircularProgress size={18} color="inherit" />
        ) : (
          startIcon
        )
      }
    >
      {activeLoading ? (loadingText || children) : children}
    </MuiButton>
  );
}
