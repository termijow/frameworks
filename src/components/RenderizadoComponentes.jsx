import Ejercicio1 from "./RenderizadoComponentes/Ejercicio1";
import Ejercicio2 from "./RenderizadoComponentes/Ejercicio2";
import Ejercicio3 from "./RenderizadoComponentes/Ejercicio3";
import Ejercicio4 from "./RenderizadoComponentes/Ejercicio4";
import Ejercicio5 from "./RenderizadoComponentes/Ejercicio5";

export default function TallerCompletoPage() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Taller Listas en Next.js</h1>
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ejercicio5/>
    </main>
  );
}