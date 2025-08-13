import Button from "@/components/Button";
import Condicionales from "@/components/Condicionales";
import RenderizadoListas from "@/components/RenderizadoListas";

export default function Home() {
  return (
    <>
      <Condicionales/>
      <Button name="Juan"/>
      <Button name="Enviar Formulario"/>
    </>
  );
}
