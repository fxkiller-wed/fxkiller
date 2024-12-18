import Photo from "@/assets/img/about-me-photo.png";
const InfoContact = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mx-8">
          <img className="rounded-xl" src={Photo} alt="Imagen Presentacion" />
        </div>

        <div className="font-greatVibes title-home-section text-5xl px-2 py-2">
          ¿Estás listo para cambiar tu destino financiero?
        </div>

        <div className="flex flex-col justify-center items-center gap-6 mx-24 font-urbanist text-2xl">
          <div>
            Imagina poder tomar las riendas de tu futuro económico y hacerlo a
            tu propio ritmo. Si alguna vez has soñado con ser dueño de tu
            tiempo, aprender a invertir con éxito y entender los mercados como
            un verdadero experto, entonces es hora de dar el siguiente paso.
          </div>

          <div>
            Soy Fxkiller y he dedicado años a dominar los secretos del trading.
            No hablo de fórmulas mágicas ni promesas vacías, hablo de
            estrategias comprobadas que pueden transformar tu forma de ver el
            dinero y las inversiones.
          </div>
          <div>
            Si eres de los que cree que la vida no tiene límites, y que la
            realidad financiera se puede moldear, te invito a unirte a mi
            comunidad de traders. Aquí, aprenderás todo lo que necesitas para
            comenzar a operar, gestionar riesgos y maximizar tus ganancias, sin
            importar si eres principiante o ya tienes algo de experiencia.
          </div>
          <div className="font-greatVibes title-home-section text-5xl py-2 px-2">
            ¿Por qué unirte?
          </div>
          <div className="flex flex-col justify-start">
            <div>
              📚👨‍🏫 Clases personalizadas: Te guiaré paso a paso, adaptándome a
              tu nivel.
            </div>
            <div> 💡📈 Estrategias probadas: No es magia, es práctica.</div>
            <div>
            🤝🌐 Comunidad exclusiva: Aprende de otros que, al igual que tú, buscan
              un cambio real.
            </div>
          </div>
          <div>
            Si estás dispuesto a dar el primer paso hacia un futuro financiero
            más libre, llena tu correo y comencemos este viaje. Si no te
            interesa, ¡no pasa nada! Seguro que tu próxima fiesta de fin de año
            será igual de divertida.
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoContact;
