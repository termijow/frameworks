const productos = [
  { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
  { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
  { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
  { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
  { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
];

// Datos para el Ejercicio 2
const usuarios = [
  { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
  { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
  { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
  { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
  { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },
];

// Datos para el Ejercicio 3
const cursos = [
  { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
  { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
  { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
  { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
  { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
];

// Datos para el Ejercicio 4
const pedidos = [
  { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] },
  { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] },
  { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
  { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] },
  { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
];

// Datos para el Ejercicio 5
const blogs = [
    { id: 1, titulo: "Aprendiendo React", autor: { nombre: "Ana", pais: "Colombia" }, categorias: ["JavaScript", "Frontend"], comentarios: [ { usuario: "Luis", texto: "Muy útil", respuestas: [ { usuario: "Marta", texto: "Totalmente de acuerdo", reacciones: [ { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } }, { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } } ] } ] } ] },
    { id: 2, titulo: "Next.js SSR", autor: { nombre: "Luis", pais: "México" }, categorias: ["JavaScript", "SSR"], comentarios: [ { usuario: "Marta", texto: "Interesante", respuestas: [ { usuario: "Ana", texto: "Lo probaré", reacciones: [ { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } } ] } ] } ] },
    { id: 3, titulo: "Node.js API", autor: { nombre: "John", pais: "USA" }, categorias: ["Backend", "API"], comentarios: [ { usuario: "Pedro", texto: "Me sirvió mucho", respuestas: [ { usuario: "Luis", texto: "Gracias por compartir", reacciones: [ { tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } } ] } ] } ] },
    { id: 4, titulo: "Django ORM", autor: { nombre: "Marta", pais: "España" }, categorias: ["Backend", "Python"], comentarios: [ { usuario: "Ana", texto: "Claro y conciso", respuestas: [ { usuario: "John", texto: "Lo usaré en mi proyecto", reacciones: [ { tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } } ] } ] } ] },
    { id: 5, titulo: "Flutter Widgets", autor: { nombre: "Pedro", pais: "Portugal" }, categorias: ["Mobile", "UI"], comentarios: [ { usuario: "Luis", texto: "Genial explicación", respuestas: [ { usuario: "Marta", texto: "Muy claro todo", reacciones: [ { tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } } ] } ] } ] }
];

export default function TallerCompletoPage() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Taller Listas en Next.js</h1>

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
      
      <section>
        <h2>Ejercicio 5 - Lista de blogs profundamente anidada</h2>
        <div>
          {blogs.map((blog) => (
            <article key={blog.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
              <h2>{blog.titulo}</h2>
              <p><em>Por: {blog.autor.nombre} ({blog.autor.pais})</em></p>
              <div><strong>Categorías:</strong> {blog.categorias.join(', ')}</div>

              <div style={{ marginTop: '15px', paddingLeft: '20px' }}>
                <h4>Comentarios:</h4>
                {blog.comentarios.map((comentario, index) => (
                  <div key={index} style={{ borderLeft: '2px solid #eee', paddingLeft: '15px', marginBottom: '10px' }}>
                    <p><strong>{comentario.usuario}:</strong> {comentario.texto}</p>
                    
                    <div style={{ paddingLeft: '20px' }}>
                      {comentario.respuestas.map((respuesta, rIndex) => (
                        <div key={rIndex} style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
                          <p><strong>{respuesta.usuario}:</strong> {respuesta.texto}</p>

                          <ul style={{ fontSize: '0.8em', paddingLeft: '25px' }}>
                            {respuesta.reacciones.map((reaccion, reaccionIndex) => (
                              <li key={reaccionIndex}>
                                {reaccion.tipo} por <strong>{reaccion.usuario.nombre}</strong> ({reaccion.usuario.rol})
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}