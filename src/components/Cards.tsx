function Card() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center">
              <h3>Iniciar Sesión</h3>
            </div>
            <div className="card-body">
              <FormBody />
            </div>
            <div className="card-footer text-center">
              <small>
                ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function FormBody() {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="usuario"
            placeholder="Ingrese su usuario"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Iniciar Sesión
        </button>
      </form>
    </>
  );
}

export default Card;
