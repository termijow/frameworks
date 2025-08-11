import Image from "next/image";

export default function Home() {
  const name = "juan";
  let numero = 12;

  const names = ["juan", "pedro", "luis", "bryan"];

  const animales = [
    {
      "name" : "pepito",
      "raza" : "golden",
      "tipo" : "perro"
    },
    {
      "name" : "gato",
      "raza" : "siames",
      "tipo" : "gato"
    }
  ]

  return (
    <div>
      <h2>{name}</h2>
      <p>{numero}</p>

      <div>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
      <div>
        {
          animales.map((a, index) => (
            <div key={index}>
              <h3>{a.name}</h3>
              <p>{a.raza}</p>
              <p>{a.tipo}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
