import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";

interface Question {
	question: string;
	answer: string;
}

const Accordions: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
	const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

	const categories: { id: number; name: string }[] = [
		{ id: 0, name: "Membresía y Políticas de Pago" },
		{ id: 1, name: "Acceso y Contenido Exclusivo" },
		{ id: 2, name: "Requisitos y Experiencia" },
	];

	const questions: { [key: number]: Question[] } = {
		0: [
			{ question: "¿Puedo ingresar a Premium VIP en cualquier momento?", answer: "No, el acceso a nuestra membresía Premium VIP está disponible únicamente en fechas específicas que se anuncian por email y redes sociales. Esto garantiza una experiencia exclusiva y organizada para los nuevos miembros." },
			{ question: "¿Mi membresía se renueva automáticamente?", answer: "Sí, nuestra membresía se renueva automáticamente al final de cada ciclo de facturación. Puedes desactivar esta opción desde tu cuenta antes de la fecha de cobro si prefieres manejarlo manualmente." },
			{ question: "¿Qué sucede si ya soy miembro VIP y compro el PDF?", answer: "Los días restantes de tu membresía serán compensados. Además, el PDF incluye 30 días adicionales gratis, que se sumarán al periodo vigente de tu membresía." },
		],
		1: [
			{ question: "¿Dónde puedo consultar los resultados pasados mensuales?", answer: "Los resultados mensuales están disponibles en nuestra sección #resultados en Discord. Allí encontrarás un desglose detallado con estadísticas de rendimiento y análisis." },
			{ question: "¿Qué sesiones operativas cubren en su comunidad?", answer: "Nos enfocamos en las sesiones de mercado de Nueva York y, en ocasiones, las de Londres, para garantizar las mejores oportunidades de liquidez y análisis en tiempo real." },
			{ question: "¿Cómo puedo acceder a las grabaciones de las sesiones en vivo?", answer: "Una session es privada & exclusiva del server, no se graba ni se repite, los lives en NewYork y Londres son privados." },
		],
		2: [
			{ question: "¿Cuánta experiencia necesito para aprovechar el PDF?", answer: "El PDF está diseñado para traders con nivel intermedio a avanzado. Es ideal si ya tienes conocimientos sólidos en análisis técnico y estrategias de gestión de riesgos." },
			{ question: "¿Es la membresía adecuada para principiantes?", answer: "Aunque ofrecemos contenido avanzado, los principiantes con conocimientos básicos pueden beneficiarse. Recomendamos familiarizarte con conceptos fundamentales antes de unirte." },
			{ question: "¿Qué habilidades puedo desarrollar con la membresía?", answer: "Podrás aprender a interpretar gráficos, crear estrategias personalizadas, gestionar riesgos y fortalecer tu psicología del trading para tomar decisiones acertadas." },
		],
	};

	const toggleAccordion = (index: number) => {
		setSelectedQuestion(selectedQuestion === index ? null : index);
	};

	return (
		<motion.div
			className="xl:w-[1200px] bg-blue1 h-auto mx-auto p-5 rounded-2xl flex flex-col py-10 items-center"
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.3 }}
			transition={{ duration: 0.5 }}
		>
			<span className="text-4xl md:text-7xl pb-5 mb-3 flex gap-5 flex-row md:flex-row items-center md:items-start font-greatVibes text-center md:text-left">
				<div className="text-gray-200">Preguntas</div>
				<div className="text-beige1">Frecuentes</div>
			</span>

			<div className="w-full flex flex-col md:flex-row justify-center gap-10">
				{/* Categorías */}
				<div className="flex justify-center flex-col">
					<div className="flex flex-col gap-3 lg:gap-8 w-full md:w-[450px]">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`p-4 text-left font-semibold text-base md:text-lg rounded-xl shadow-lg font-urbanist ${selectedCategory === category.id
										? "bg-gradient-to-r from-[#15234e] to-[#040915] text-gray-100 shadow-md shadow-gray-900"
										: "contact-btn-form-home text-black"
									}`}
							>
								{category.name}
							</button>
						))}
					</div>
				</div>

				<motion.div
					className="flex flex-col gap-3 w-full md:w-[600px]"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					{selectedCategory === null ? (
						<div className="w-full md:w-[500px] flex justify-center items-center rounded-xl overflow-hidden btn-bg-black p-1">
							<iframe
								className="w-full aspect-video rounded-xl btn-bg-black shadow-lg shadow-gray-950"
								src="https://www.youtube.com/embed/wF29e2IuAok?si=p8hc-KTzdc_1R_Pb"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					) : selectedCategory !== null && questions[selectedCategory]?.length === 0 ? (
						<div className="text-gray-400 text-lg text-center">
							No hay preguntas disponibles para esta categoría.
						</div>
					) : (
						questions[selectedCategory]?.map((item, index) => (
							<div
								key={index}
								className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#15234e] to-[#040915] text-gray-100 shadow-md shadow-gray-900 "
							>
								<button
									className="w-full flex justify-between items-center font-urbanist text-md text-left p-4"
									onClick={() => toggleAccordion(index)}
								>
									{item.question}
									<motion.span
										initial={{ rotate: 0 }}
										animate={{ rotate: selectedQuestion === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
									>
										<FaArrowDown />
									</motion.span>
								</button>
								{selectedQuestion === index && (
									<motion.div
										className="px-4 py-2 font-urbanist text-gray-300"
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
									>
										{item.answer}
									</motion.div>
								)}
								<BorderBeam size={250} duration={25} delay={9} />
							</div>
						))
					)}

					{selectedCategory !== null && (
						<button
							onClick={() => setSelectedCategory(null)}
							className="flex items-center justify-center gap-2 font-poppins font-semibold text-lg p-2 rounded-xl shadow-lg bg-gradient-to-r from-[#15234e] to-[#040915] text-gray-100 shadow-gray-900 transition duration-300"
						>
							<div className="contact-home-highlight hover:text-gray-50">Ver video de Presentación</div>
						</button>
					)}
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Accordions;
