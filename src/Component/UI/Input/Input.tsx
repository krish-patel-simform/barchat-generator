import { forwardRef } from "react";
import style from "./input.module.css";
import type { InputProps } from "./input.type";

const Input = forwardRef<HTMLInputElement,InputProps>(({type,leftIcon},ref)=>{
  return (
    <div className={`${style.inputContainer}`}>
      {leftIcon}
      <input ref={ref} type={type} className={`${style.input}`}></input>
    </div>
  );
})

export default Input;
