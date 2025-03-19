import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

const WhyChosee = () => {
	const infoItems = [
		{
			title: "Los mejores en la Industria",
			description: "Fundadores de la nueva era en Trading General #1 Primera comunidad de Forex desde 2020 Formación desde 0 dentro del server Asistencia 24/7"
		},
		{
			title: "Innovaciones constantes",
			description: "Adictos a el crecimiento desde el día UNO, ya no solo en CFDs ahora tambien en lado Futuros Crear Traders con fortaleza, vitalidad y capacidad de formarse como traders 3,4,5,6 cifras y como personas de auto crecimiento personal."
		},
		{
			title: "Diferencia entre otros ",
			description: "Nosotros somos transparentes y sin filtro, Por lo cual cada trade enviado siempre va directo al track que tenemos diario, hasta terminar mes con mes. Apreciamos tanto como una racha negativa y una racha positiva. En FX KILLERS cuando ganamos, ganamos todos juntos y si perdemos, perdemos juntos."
		},
	];

	const [currentIndex, setCurrentIndex] = useState(1);

	const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? infoItems.length - 1 : prev - 1));
	const nextSlide = () => setCurrentIndex((prev) => (prev === infoItems.length - 1 ? 0 : prev + 1));

	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.5 }}
			transition={{ duration: 0.5 }}
			className="w-full max-w-[1200px] mx-auto flex flex-col items-center  relative overflow-hidden">
			<div className="py-4 text-center mb-6 text-gray-700 font-greatVibes title-home-section">
				<span className="text-beige1 text-5xl lg:6xl xl:text-7xl">Porque Elegirnos  </span>
			</div>

			<div className="relative w-full max-w-6xl h-64 flex items-center justify-center">
				<div className="flex items-center justify-center w-full">
					{infoItems.map((item, index) => {
						const position = index - currentIndex;
						const isCenter = position === 0;

						return (
							<div
								key={index}
								className={`absolute transition-transform duration-500 ease-in-out p-4 w-[350px] lg:w-[400px] xl:w-[450px] h-56 btn-why-chosee shadow-lg shadow-blue1 flex flex-col justify-center items-center text-gray-100 font-urbanist rounded-xl m-5 border-[1px] border-beige1
									${isCenter ? "z-10 scale-100" : "z-0 scale-75"}
									${position === -1 ? "-translate-x-72 rotate-6" : ""}
									${position === 1 ? "translate-x-72 -rotate-6" : ""}
									${position < -1 || position > 1 ? "opacity-0 pointer-events-none" : "opacity-100"}
									sm:w-[350px] sm:h-48 md:w-[400px] md:h-56 lg:w-[450px] lg:h-64
								`}
							>
								<h3 className="mb-2 text-center text-2xl lg:text-3xl sm:text-base md:text-lg">{item.title}</h3>
								<p className="text-center text-sm sm:text-sm md:text-base">{item.description}</p>
							</div>
						);
					})}
				</div>
			</div>

			<div className="flex justify-center gap-5 w-full max-w-6xl mt-4">
				<button
					onClick={prevSlide}
					className="bg-blue1 text-white p-2 rounded-full hover:bg-gray-600 z-10"
				>
					<IoIosArrowBack className="text-2xl" />
				</button>
				<button
					onClick={nextSlide}
					className="bg-blue1 text-white p-2 rounded-full hover:bg-gray-600 z-10"
				>
					<IoIosArrowForward className="text-2xl" />
				</button>
			</div>
		</motion.div>
	);
};

export default WhyChosee;
