import style from "./button.module.css";
import type { ButtonProps } from "./button.type";

export default function Button({
  mode,
  title,
  leftIcon: LeftIcon,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${style.btn} ${style[`btn${mode}`]}`} {...rest}>
      {LeftIcon}
      {title}
    </button>
  );
}
