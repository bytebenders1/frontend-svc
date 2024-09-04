import React from "react";

import { Sheet, SheetContent } from "../ui/sheet";

import PropTypes from "prop-types";
import { cn } from "@/src/lib/utils";

interface TProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
  side?: "right" | "left" | "top" | "bottom";
}

export const CustomSheet = ({
  isOpen,
  onClose,
  children,
  className,
  side = "right",
}: TProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose} modal={true}>
      <SheetContent side={side} className={cn(`sm:max-w-lg`, className)}>
        {children}
      </SheetContent>
    </Sheet>
  );
};
