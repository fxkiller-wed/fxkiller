import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface Plan {
    title: string;
    price: string;
    period: string;
    tag?: string;
    features: string[];
    buttonText: string;
    link: string;
    width?: string;
    height?: string;
}

const PlansPay: React.FC = () => {
    const plans: Plan[] = [
        {
            title: "VIP Premium",
            price: "149.00",
            period: "/mes",
            features: [
                "Soporte de moderadores 24/5",
                "BIAS (dirección diaria y semanal)",
                "Psicóloga Personal y Grupal",
                "Nutrióloga Personal y Grupal",
                "Live Sessions de Trading semanal",
                "Casos de estudio",
                "Clases en Inglés y Francés",
                "Recap semanal de Trades",
                "Acceso total en Discord"
            ],
            buttonText: " Únete ya",
            link: "https://www.launchpass.com/fx-killers-trading-house/premiumvip"
        },
        {
            title: "Prime Traders",
            price: "1500.00",
            period: "/único pago",
            features: [
                "PDF the best ICT guide",
                "Masterclass personalizada 1hr.",
                "Acceso a sección exclusiva Prime Traders (30 días).",
                "Casos de estudio (modo PDF).",
                "Masterclasses grupales fechas random.",
                "Reuniones en tu país.",
                "Dudas y preguntas en todo momento con Iván Vargas."
            ],
            buttonText: "Accede hoy",
            link: "https://buy.stripe.com/00g6rVdl4cfo34caFi"
        },
        {
            title: "Coaching 1ON1",
            price: "3000.00",
            period: "/único pago",
            features: [
                "1 semana junto a Babyivanfx",
                "Entrenamiento avanzado",
                "Clases personales de 2Hr",
                "PDF the best ICT guide (incluido)",
                "90 días Acceso Prime Traders",
                " Acercamiento de Iván Vargas (whatsapp personal)",
                "Masterclasses Grupales",
                "Reuniones en tu país",
                "Track en grupo de chicos 1ON1 estilo Tradezella"
            ],
            buttonText: "Agenda/ 90 días de espera",
            link: "https://buy.stripe.com/3cs5nR4OygvE2086p3"
        }
    ];

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    // Structured data for pricing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "offers": plans.map(plan => ({
            "@type": "Offer",
            "name": plan.title,
            "price": plan.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": plan.link
        }))
    };

    useEffect(() => {
        // Add structured data to document head
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        // Cleanup
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <motion.section
            className="xl:w-[1250px] bg-blue1 h-auto mx-auto p-3 lg:rounded-2xl flex flex-col py-5 justify-center items-center"
            aria-label="Planes de suscripción"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-beige1 text-6xl font-greatVibes text-center p-3">
                Suscripciones
            </h1>
            <p className="font-urbanist text-gray-200 text-center text-lg">
                Ofrecemos una gama de planes de precios flexibles diseñados para adaptarse a traders de todos los tamaños.
            </p>
            <div className="w-full flex flex-wrap justify-center gap-6 items-center mt-5">
                {plans.map((plan, index) => (
                    <motion.article
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2 }
                        }}
                        className={`bg-[#0a0c18] text-white h-[520px] ${plan.width || "w-72"} rounded-xl p-5 flex flex-col justify-between shadow-xl relative`}
                        itemScope
                        itemType="https://schema.org/Product"
                    >
                        <div className="absolute inset-0"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold contact-home-highlight" itemProp="name">{plan.title}</h2>
                            <p className="text-4xl font-bold mt-3">
                                <span itemProp="price" content={plan.price}>${plan.price}</span>
                                <span className="text-sm" itemProp="priceCurrency" content="USD">{plan.period}</span>
                            </p>
                            {plan.tag && <p className="text-beige2 text-sm font-semibold mt-2">{plan.tag}</p>}
                            <ul className="text-sm mt-4 space-y-2 font-urbanist">
                                {plan.features.map((feature, featureIndex) => (
                                    <motion.li
                                        key={featureIndex}
                                        className="flex items-center gap-2"
                                        itemProp="description"
                                    >
                                        <FaCheck className="text-beige2 text-xl" />
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={plan.link}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = plan.link;
                            }}
                            className="bg-gradient-to-l from-[#2e5ca7] to-[#d7ad5e] hover:bg-gradient-to-l hover:from-[#d7ad5e] hover:to-[#3f83f2] text-gray-200 hover:text-gray-50 font-urbanist font-semibold py-2 px-4 rounded-xl mt-5 relative z-10 text-center"
                            itemProp="url"
                        >
                            {plan.buttonText}
                        </a>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
};

export default PlansPay;
