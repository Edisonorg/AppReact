interface Registro {
  horas: number;
  actividad: string;
  descripcion: string;
}

const registrosEjemplo: Registro[] = [
  {
    horas: 2,
    actividad: "Desarrollo",
    descripcion: "Implementación de nuevas funcionalidades.",
  },
  {
    horas: 1,
    actividad: "Reunión",
    descripcion: "Reunión con el equipo de desarrollo.",
  },
  {
    horas: 3,
    actividad: "Testing",
    descripcion: "Pruebas unitarias y de integración.",
  },
  {
    horas: 4,
    actividad: "Documentación",
    descripcion: "Actualización de la documentación del proyecto.",
  },
  {
    horas: 2,
    actividad: "Soporte",
    descripcion: "Atención a incidencias y soporte a usuarios.",
  },
  {
    horas: 5,
    actividad: "Desarrollo",
    descripcion: "Desarrollo de la interfaz de usuario.",
  },
  {
    horas: 2,
    actividad: "Investigación",
    descripcion: "Investigación de nuevas tecnologías.",
  },
  {
    horas: 1,
    actividad: "Reunión",
    descripcion: "Reunión de planificación semanal.",
  },
  { horas: 3, actividad: "Testing", descripcion: "Pruebas de rendimiento." },
  {
    horas: 4,
    actividad: "Documentación",
    descripcion: "Creación de manuales de usuario.",
  },
  {
    horas: 2,
    actividad: "Desarrollo",
    descripcion: "Corrección de bugs y mejoras.",
  },
  { horas: 3, actividad: "Reunión", descripcion: "Reunión con stakeholders." },
  { horas: 2, actividad: "Testing", descripcion: "Pruebas de aceptación." },
  {
    horas: 4,
    actividad: "Documentación",
    descripcion: "Documentación técnica del proyecto.",
  },
  {
    horas: 1,
    actividad: "Soporte",
    descripcion: "Resolución de tickets de soporte.",
  },
  { horas: 5, actividad: "Desarrollo", descripcion: "Desarrollo de backend." },
  {
    horas: 2,
    actividad: "Investigación",
    descripcion: "Investigación de patrones de diseño.",
  },
  { horas: 1, actividad: "Reunión", descripcion: "Reunión de retrospectiva." },
  { horas: 3, actividad: "Testing", descripcion: "Automatización de pruebas." },
  {
    horas: 4,
    actividad: "Documentación",
    descripcion: "Actualización de guías de estilo.",
  },
];

const VisualizacionDatos: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2>Visualización de Registros</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Horas</th>
            <th scope="col">Actividad</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {registrosEjemplo.map((registro, index) => (
            <tr key={index}>
              <td>{registro.horas}</td>
              <td>{registro.actividad}</td>
              <td>{registro.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisualizacionDatos;
