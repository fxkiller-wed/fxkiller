interface Testimonial {
  name: string;
  rating: number;
  color: "green" | "yellow" | "gray";
  height: string;
  date: string;
  text: string;
}

const testimonials: Testimonial[] = [
  { 
    name: 'Johander Zambrano', 
    rating: 5, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'FX Killers marcó un antes y un después en mi carrera como trader. Es el lugar correcto, con la información correcta, de la mano del mentor de mentores. A través del tiempo te das cuenta de que tienes la oportunidad de crecer junto a grandes traders, pero sobre todo, grandes personas. Eso es lo que hace la verdadera diferencia en esta comunidad, el compañerismo, el respeto y el apoyo constante. Gracias por todo lo aprendido y todo lo que aún me queda por aprender. Gracias @Ivan Vargas por ser una inspiración para todos nosotros y por formar parte de este increíble viaje. ✌🏻' 
  },
  { 
    name: 'Ricardo LH', 
    rating: 4, 
    color: 'yellow', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'Llevo desde Mayo en la comunidad, primero con una suscripción mensual y luego adquirí el Pdf y he accedido a ProTraders 🏆. Me gustaría recalcar que, aunque el Pdf es "nuestra Biblia" el mayor valor es la comunidad que @Ivan Vargas ha creado. La operativa es nuestra base pero aquí dentro tenemos clases de idiomas, nutrición, psicología y todo en un entorno de respeto y seguridad para todos los miembros. Estoy encantado de pertenecer a la misma!! Siempre agradecido 🙏 al gran mentor @Ivan Vargas por todo lo que ha creado! ❤️' 
  },
  { 
    name: 'Mariano Gastelum', 
    rating: 5, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'Han pasado 2 meses desde que entré aquí y solo puedo decir GRACIAS a Iván, a los Moderadores y a cada miembro del grupo. Todos hemos creado una energía muy linda que hace el trading menos estresante. Dios ha bendecido tanto a Iván, quien nos ha dado más para que sigamos creciendo y no nos sintamos solos en este proceso. Mi vida ha cambiado 180 grados, ¡ni yo me lo creo! Aunque escriba 1 MILLÓN de palabras, no podría expresar todo mi agradecimiento. Ha sido la mejor inversión como Trader. Te amo @Ivan Vargas y los amo @MODERADORES ❤️🤍🖤' 
  },
  { 
    name: 'Nally Rosa', 
    rating: 5, 
    color: 'yellow', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'Perdón que hasta ahora responda pero he tenido un día terrible en el trabajo. Para mí la comunidad es una familia en todo el sentido de la palabra, cuando uno comienza en el camino del trading no conoce a nadie en este rubro y es bonito tener una comunidad como FX Killers donde nos damos apoyo, compartimos conocimiento, tristezas con los SL pero sobre todo motivación y el cambio de mentalidad que se necesita para llegar a ser rentable. No me queda más que agradecer porque con la compra del pdf encontré mucho más de lo que esperaba 💐.'
  },
  { 
    name: 'Kari G ', 
    rating: 5, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'Hola 👋 buenos días!! Bueno para mí en General FX Killers es como un rompecabezas, El PDF, la comunidad, Las sesiones de Psicología, las sesiones de nutrición e idiomas TODO suma para el crecimiento del trader!! Tengo solo 2 meses acá e aprendido mucho de Iván y de varios de los miembros de la comunidad, entendiendo que cada día se aprende en esta industria y sé que acá Crecemos sí o sí. (Al que se dedica aprender obviamente). Gracias a todos @Ivan Vargas @PRO TRADERS que tengan todos hoy un EXCELENTE DÍA.' 
  },
  { 
    name: 'Andres Herrera', 
    rating: 4, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'Buenas noches 🌙 la comunidad es una chingonería en simples palabras, es el mejor lugar que al que pude llegar 🌟 me siento tranquilo me siento en casa ya que allá fuera ni las tostones llega lo que ivan a creado e intentan copiar pero no la arman 😂. Me ha ayudado mucho en mi camino como trader gracias a ivan mejoré mi trading y hasta ya estoy funded 🙏. Y sobre todo valorar mucho lo que ivan hace por nosotros ya que siempre nos cuida tantos en los trades como la gente tóxica y ratona xD 😂 agradecido con todos 🙌' 
  },
  { 
    name: ' Anderson Bamaca', 
    rating: 5, 
    color: 'yellow', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'Quiero empezar con un Gracias! A lo largo de este tiempo pensé que era una comunidad más, donde el primer mes me darían "soporte" y luego me dejarían tirado. La honestidad de pedir perdón, y ser claros en las reglas es algo que valoro. Dan la ayuda pero también nos motivan a nadar solos y no darnos todo ya masticado. Primera comunidad (solo he estado en 2) que hablan malas palabras el CEO y no las siento ofensivas 🤣 cada vez que miro algo de Deadpool en buena onda @Ivan Vargas me acuerdo de ti y me hace pensar que cada vez te regeneras como el personaje de tanto malos comentarios y de personas que te han faltado la confianza.' 
  },
  { 
    name: 'Maria Camila', 
    rating: 4, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'Es una comunidad única en el mundo del trading. Es integral, sana, sincera y con un compañerismo especial, donde todos nos ayudamos y celebramos los logros de los demás. Aprendemos no solo del mentor de mentores, @Ivan Vargas, sino también de nuestros compañeros que comparten sus análisis con respeto al mercado. Lo mejor de todo son las sesiones de 🧠 psicología 🧠 y nutrición, que nos ayudan a crecer como traders, además de las clases de 📚 inglés 📚 y francés, que nos permiten romper barreras de comunicación. Definitivamente, es un hogar en medio de la soledad y corrupción del mundo del trading, y aquí, la grandeza te abraza. Todo esto es posible gracias a la mente brillante de @Ivan Vargas.' 
  },
  { 
    name: 'Ivan Gonzalez Serio', 
    rating: 4, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'Yo de la comunidad solo puedo decir gracias, porque desde que entre se me ha recibido de maravilla y ayudado en todo desde el primer momento. Todos nos animamos a todos y damos diferentes puntos de vista, cada uno con su toque pero al final juntando todos los conceptos perfectamente. Y que decir del Pdf y de @Ivan Vargas, todo lo que haces por nosotros en explicarnos al detalle cualquier duda, estar ahí cuando es necesario y el apoyo de los moderadores es top, he estado en un par de comunidades más y en ninguna se ha respirado un ambiente tan sano como en este, celebramos las victorias de los demás como si fuera nuestra propia y eso da muchas ganas y energías. Solo puedo estar agradecido 🙌.' 
  },
  { 
    name: 'Adrian Quintairos Bugallo', 
    rating: 5, 
    color: 'green', 
    height: 'row-span-1', 
    date: '2024-10-16', 
    text: 'Muchísimas gracias a @Ivan Vargas y a todos los moderadores por los momentos, los TP y los SL, porque aprendemos de cada situación. Lamento no ser tan activo escribiendo e interactuando con la familia, pero por motivos de trabajo no tengo el tiempo que me gustaría. Gracias a TOD@S en general, aquí se aprenden muchas cosas, desde hacer trading con el mejor hasta entender otros puntos de vista, con la ayuda de los compañeros. No he estado en ninguna otra comunidad, pero no necesito probar en otro sitio, sé que estoy en el mejor lugar. ¡Os quiero a todos ❤️!' 
  },
  { 
    name: 'Cyntia Gutierrez', 
    rating: 4, 
    color: 'yellow', 
    height: 'row-span-1', 
    date: '2024-10-15', 
    text: 'La verdad estoy muy agradecida por la comunidad, siento que quedo debiendo mucho para estar al nivel de esta comunidad. Desde la atención personalizada hasta el cumplimiento puntual de cada detalle, superaron mis expectativas. El Valor Añadido: Se siente como una familia. La comunidad no solo cumplió con las expectativas, va más allá y que el equipo fue más allá al brindar asesoramiento adicional. Es lo mejor y realmente hace la diferencia en los resultados. @Ivan Vargas.' 
  },
  { 
    name: 'Erwin Tamayo', 
    rating: 4, 
    color: 'gray', 
    height: 'row-span-1', 
    date: '2024-10-16', 
    text: 'Solo dar gracias por todo lo que he aprendido, pero sobre todo dar las gracias porque Iván ha creado esta comunidad, dar gracias a toda la comunidad porque es el lugar donde cuando tengo problemas con el trading me apoyan incondicionalmente. GRACIAS IVAN POR CREAR ESTO, Gracias, ojalá hubiera encontrado esta comunidad antes pero nunca es tarde, y tengo mucha fe en que lo lograremos, con el apoyo de todos. GRACIAS, no tengo más que dar, solo gracias chicos a Iván y a todos ¡muchas gracias!' 
  },
];

export default testimonials