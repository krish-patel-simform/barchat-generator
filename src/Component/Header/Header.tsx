import style from "./header.module.css";

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
    </div>
  );
}
