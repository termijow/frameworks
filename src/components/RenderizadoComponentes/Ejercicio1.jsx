export default function Ejercicio1 () {
const productos = [
  { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
  { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
  { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
  { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
  { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
];
    return (
<>
      <section style={{ marginBottom: '40px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>
        <h2>Ejercicio 1 - Lista de productos</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {productos.map((producto) => (
            <li key={producto.id}>
              <strong>{producto.nombre}</strong> - ${producto.precio}
              <span style={{ color: '#555', marginLeft: '10px' }}>
                (Categoria: {producto.categoria.nombre})
              </span>
            </li>
          ))}
        </ul>
      </section>
</>
    )
};