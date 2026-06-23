import type { InputHTMLAttributes, ReactNode } from "react";

type InputType = "number" | "text" | "search";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  leftIcon?: ReactNode;
  name: string;
}
