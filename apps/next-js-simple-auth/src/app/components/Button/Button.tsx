import { ButtonProps } from "@/app/components/Button/Button.types";
import { mergeCn } from "@/app/utils/mergeCn";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/90",
        destructive: "bg-red-700 text-white hover:bg-red-700/90",
        outline: "border border-input bg-none hover:bg-[#f4f4f5]",
        secondary: "bg-white text-black hover:bg-white/80",
        text: "hover:bg-[#f4f4f5]",
        link: "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={mergeCn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
