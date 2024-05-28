function Register() {
  return (
    <div className="container mt-5">
      <h2>Registro de Horas</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="horas" className="form-label">
            Registro de Horas
          </label>
          <input type="number" className="form-control" id="horas" required />
        </div>
        <div className="mb-3">
          <label htmlFor="actividad" className="form-label">
            Registro de Actividad
          </label>
          <input type="text" className="form-control" id="actividad" required />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción
          </label>
          <textarea className="form-control" id="descripcion" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Register;
