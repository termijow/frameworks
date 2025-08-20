export default function Ejercicio3 () {

// Datos para el Ejercicio 3
const cursos = [
  { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
  { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
  { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
  { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
  { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
];
    
    return (
        <>
        <section style={{ marginBottom: '40px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>
        <h2>Ejercicio 3 - Lista de cursos</h2>
        <div>
          {cursos.map((curso) => (
            <div key={curso.id} style={{ marginBottom: '15px' }}>
              <h3>{curso.nombre}</h3>
              <ul style={{ listStyleType: 'circle', paddingLeft: '40px', margin: 0 }}>
                {curso.modulos.map((modulo, index) => (
                  <li key={index}>{modulo.nombre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>      
        </>
    )
}