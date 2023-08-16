function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a
          target="__blanck"
          href="https://www.omdbapi.com/"
          className="brand-logo"
        >
          React Movies (used by API OMDb API)
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="!#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
