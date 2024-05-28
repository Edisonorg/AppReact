function Navbar() {
  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Registro de horas - RegisAPP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#registrar">
                  Registrar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#consultar">
                  Consultar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cerrar-sesion">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
