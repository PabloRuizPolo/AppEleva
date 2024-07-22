import "./TeamLayout.css";

export default function TeamLayout() {
  return (
    <header class="header">
      <nav class="navbar">
        <label class="labe-hamburguesa" for="menu-hamburguesa">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="list-icon"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </label>
        <input type="checkbox" id="menu-hamburguesa" class="menu-hamburguesa" />
        <ul class="ul-links">
          <li>
            <a class="links" href="#como-funciona">
              Home
            </a>
          </li>
          <li>
            <a class="links" href="#como-funciona">
              Calentamiento Pre-Físico
            </a>
          </li>
          <li>
            <a class="links" href="#opinions">
              Calentamiento Pre-Pista
            </a>
          </li>
          <li>
            <a class="links" href="">
              Gráfica
            </a>
          </li>
          <li>
            <a class="links" href="">
              Calendario
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
