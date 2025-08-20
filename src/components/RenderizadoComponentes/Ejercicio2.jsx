export default function Ejercicio2 () {

    const usuarios = [
  { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
  { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
  { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
  { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
  { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },
];

    return (
<section style={{ marginBottom: '40px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>
        <h2>Ejercicio 2 - Lista de usuarios</h2>
        <ul style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              <strong>{usuario.nombre}</strong>
              <p style={{ margin: '5px 0 10px 20px', fontStyle: 'italic' }}>
                Dirección: {usuario.direccion.calle}, {usuario.direccion.ciudad}, {usuario.direccion.pais}
              </p>
            </li>
          ))}
        </ul>
      </section>
    )

}