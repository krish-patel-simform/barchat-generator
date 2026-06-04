import style from "./header.module.css";

export default function Header() {
  return (
    <div className={`${style.header}`}>
      <section>
        <div>{/* Logo icon */}</div>
        <div>
          <p>Bar Chat Generator</p>
          <p>Enter your data and generate bar garph</p>
        </div>
      </section>
    </div>
  );
}
