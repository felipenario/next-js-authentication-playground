import { buttonVariants } from "@/components/Button/Button";
import { VariantProps } from "class-variance-authority";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
