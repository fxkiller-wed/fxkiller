import React, { useState } from "react";
import { motion } from "framer-motion";
import testimonials from "@/data/DataTestimonials";

const Testimonial: React.FC = () => {
	const [visibleCount, setVisibleCount] = useState(6);

	const handleShowMore = () => setVisibleCount((prev) => prev + 6);
	const handleShowLess = () => setVisibleCount((prev) => Math.max(6, prev - 6));

	return (
		<div
			className="px-6 flex flex-col justify-center items-center lg:rounded-2xl  h-auto w-full xl:w-[1250px] pt-5 relative z-10 xl:rounded-2xl"
		>
			<div className="py-4 text-center mb-6 text-beige1 font-greatVibes text-5xl lg:6xl xl:text-7xl">
				Testimonios
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-urbanist">
				{testimonials.slice(0, visibleCount).map((testimonial, index) => {
					const bgColor = {
						green: "bg-green1 text-white",
						yellow: "bg-[#0a0c18] text-white",
						gray: "bg-gray-600 text-white",
					}[testimonial.color];

					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0.5 }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
							}}
							className={`rounded-xl p-6 shadow-lg ${bgColor} ${testimonial.height}`}
							style={{ minWidth: "200px", maxWidth: "350px" }}
						>
							<div className="mb-3">
								<h3 className="font-semibold text-lg">{testimonial.name}</h3>
								<p className="text-sm text-gray-100">{testimonial.date}</p>
							</div>
							<div className="mb-3 text-beige2">
								{"★".repeat(testimonial.rating)}{" "}
								<span className="text-gray-100">{testimonial.text}</span>
							</div>
						</motion.div>
					);
				})}
			</div>

			<div className="flex justify-center mt-6 space-x-4">
				{visibleCount < testimonials.length && (
					<button
						className="btn-about-us p-3 text-xl text-gray-100 font-urbanist"
						onClick={handleShowMore}
					>
						Mostrar más
					</button>
				)}
				{visibleCount > 6 && (
					<button
						className="btn-about-us p-3 text-gray-100 text-xl font-urbanist"
						onClick={handleShowLess}
					>
						Mostrar menos
					</button>
				)}
			</div>
		</div>
	);
};

export default Testimonial;
