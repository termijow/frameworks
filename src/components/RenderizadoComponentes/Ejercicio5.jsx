export default function Ejercicio5 () {

const blogs = [
    { id: 1, titulo: "Aprendiendo React", autor: { nombre: "Ana", pais: "Colombia" }, categorias: ["JavaScript", "Frontend"], comentarios: [ { usuario: "Luis", texto: "Muy útil", respuestas: [ { usuario: "Marta", texto: "Totalmente de acuerdo", reacciones: [ { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } }, { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } } ] } ] } ] },
    { id: 2, titulo: "Next.js SSR", autor: { nombre: "Luis", pais: "México" }, categorias: ["JavaScript", "SSR"], comentarios: [ { usuario: "Marta", texto: "Interesante", respuestas: [ { usuario: "Ana", texto: "Lo probaré", reacciones: [ { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } } ] } ] } ] },
    { id: 3, titulo: "Node.js API", autor: { nombre: "John", pais: "USA" }, categorias: ["Backend", "API"], comentarios: [ { usuario: "Pedro", texto: "Me sirvió mucho", respuestas: [ { usuario: "Luis", texto: "Gracias por compartir", reacciones: [ { tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } } ] } ] } ] },
    { id: 4, titulo: "Django ORM", autor: { nombre: "Marta", pais: "España" }, categorias: ["Backend", "Python"], comentarios: [ { usuario: "Ana", texto: "Claro y conciso", respuestas: [ { usuario: "John", texto: "Lo usaré en mi proyecto", reacciones: [ { tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } } ] } ] } ] },
    { id: 5, titulo: "Flutter Widgets", autor: { nombre: "Pedro", pais: "Portugal" }, categorias: ["Mobile", "UI"], comentarios: [ { usuario: "Luis", texto: "Genial explicación", respuestas: [ { usuario: "Marta", texto: "Muy claro todo", reacciones: [ { tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } } ] } ] } ] }
];

    return (
        <>
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
        </>
    )
}