import { forwardRef } from "react";
import style from "./input.module.css";
import type { InputProps } from "./input.type";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, leftIcon, name, ...rest }, ref) => {
    return (
      <div className={`${style.inputContainer}`}>
        {leftIcon}
        <input
          name={name}
          ref={ref}
          type={type}
          className={`${style.input}`}
          {...rest}
        ></input>
      </div>
    );
  },
);

export default Input;
