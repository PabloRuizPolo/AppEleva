import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <label className="labe-hamburguesa" htmlFor="menu-hamburguesa">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="list-icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </label>
        <input
          type="checkbox"
          id="menu-hamburguesa"
          className="menu-hamburguesa"
        />
        <ul className="ul-links">
          <li>
            <a className="links">Home</a>
          </li>
          <li>
            <a className="links">Calentamiento Pre-Físico</a>
          </li>
          <li>
            <a className="links">Calentamiento Pre-Pista</a>
          </li>
          <li>
            <a className="links" href="">
              Gráfica
            </a>
          </li>
          <li>
            <a className="links" href="">
              Calendario
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
