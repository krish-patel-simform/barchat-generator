import style from "./button.module.css";
import type { ButtonProps } from "./button.type";

export default function Button({
  mode,
  title,
  leftIcon: LeftIcon,
  outlineColor,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${style[`btnOutline${outlineColor}`]} ${style.btn} ${style[`btn${mode}`]}`}
      {...rest}
    >
      {LeftIcon}
      {title}
    </button>
  );
}
