import Button from "../UI/Button/Button";
import style from "./header.module.css";
import { DeleteIcon } from "lucide-react";

export default function Header() {
  return (
    <div className={`section ${style.header}`}>
      <section className={`${style.headerLeft}`}>
        <div>{/* Logo icon */}</div>
        <div>
          <p className={`${style.headerHeading}`}>Bar Chat Generator</p>
          <p className={`${style.headerSecondary}`}>
            Enter your data and generate bar garph
          </p>
        </div>
      </section>
      <section className={`${style.headerRight}`}>
        <Button
          leftIcon={<DeleteIcon />}
          mode="Secondary"
          title="Delete All"
          outlineColor="#ED5E4F"
        />
      </section>
    </div>
  );
}
