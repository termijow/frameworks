export default function Ejercicio4 () {
    const pedidos = [
  { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] },
  { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] },
  { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
  { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] },
  { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
];
    return(
        <>
      <section style={{ marginBottom: '40px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>
        <h2>Ejercicio 4 - Lista de pedidos con productos</h2>
        <div>
          {pedidos.map((pedido) => (
            <div key={pedido.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
              <h3>Pedido de: {pedido.cliente}</h3>
              <h4>Productos:</h4>
              <ul>
                {pedido.productos.map((producto, index) => (
                  <li key={index}>
                    {producto.nombre} (Cantidad: {producto.cantidad})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
        </>
    )
}