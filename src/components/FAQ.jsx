import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
    {
        question: "¿Cuánto cuesta el tour en lancha por la Ría de Celestún?",
        answer: "El Tour Ría Celestún tiene un precio de $4,100 MXN por lancha privada (1-6 personas). Incluye guía federal certificado, recorrido de 1 hora 20 minutos con visita a flamingos, Isla de Pájaros, túnel de manglares y ojo de agua dulce."
    },
    {
        question: "¿Cuál es la mejor temporada para ver flamingos en Celestún?",
        answer: "Aunque puedes ver flamingos todo el año, la temporada alta va de noviembre a marzo, cuando miles de aves se concentran en la Ría para alimentarse. Los meses de diciembre y enero son ideales para ver las colonias más grandes."
    },
    {
        question: "¿Cómo llego a Celestún desde Mérida?",
        answer: "Celestún se encuentra a aproximadamente 1 hora 30 minutos en auto desde Mérida por la carretera Mérida-Celestún. También hay autobuses que salen de la terminal Noreste de Mérida. Si prefieres, podemos ayudarte a coordinar tu transporte."
    },
    {
        question: "¿Los tours son privados o compartidos?",
        answer: "Todos nuestros tours son 100% privados. La lancha o el tuk-tuk será exclusivamente para tu grupo, sin compartir con otros turistas. Esto te permite disfrutar a tu ritmo y con total libertad."
    },
    {
        question: "¿Qué incluye el Tour Terrestre de las Salineras?",
        answer: "El Tour Terrestre ($1,700 MXN, 2-4 personas) incluye recorrido en Tuk-Tuk por las Aguas Rosas, visita a la Hacienda Salinera 'La Herradura del Siglo XXI', bosque petrificado y avistamiento de aves. Duración: 1 hora 30 minutos."
    },
    {
        question: "¿Necesito reservar con anticipación?",
        answer: "Sí, recomendamos reservar al menos 24 horas antes, especialmente en temporada alta (noviembre-marzo). Puedes reservar por WhatsApp, correo electrónico o a través de nuestro formulario de contacto. Te confirmamos disponibilidad de inmediato."
    },
    {
        question: "¿Es seguro el tour en lancha?",
        answer: "Absolutamente. Nuestro capitán es originario de Celestún, certificado por la NOM-08-TUR-2002 y cuenta con años de experiencia navegando la Ría. Las lanchas cuentan con equipo de seguridad completo y chalecos salvavidas para todos los pasajeros."
    },
    {
        question: "¿Pueden llevar niños en los tours?",
        answer: "¡Sí! Los tours son aptos para todas las edades. Los niños disfrutan especialmente del avistamiento de flamingos y el túnel de manglares. Contamos con chalecos salvavidas infantiles y adaptamos el ritmo del tour para familias."
    }
];

const FaqItem = ({ item, isOpen, onClick, index }) => {
    return (
        <div
            className={`faq-item border-b border-black/10 dark:border-white/10 transition-colors duration-300 ${isOpen ? 'border-flamingo/30' : ''}`}
        >
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-6 md:py-8 text-left group"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                <span className={`text-sm md:text-lg font-bold uppercase tracking-wider pr-8 transition-colors duration-300 ${isOpen ? 'text-flamingo' : 'group-hover:text-flamingo'}`}>
                    {item.question}
                </span>
                <span className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-flamingo border-flamingo text-white rotate-45' : 'border-current group-hover:border-flamingo group-hover:text-flamingo'}`}>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
                    </svg>
                </span>
            </button>
            <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'}`}
            >
                <p className="text-sm md:text-base opacity-70 leading-relaxed font-light max-w-3xl">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        gsap.utils.toArray('.faq-item').forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%"
                    }
                }
            );
        });
    }, []);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 md:py-40 bg-white text-black dark:bg-black-pure dark:text-white transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-flamingo font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
                        Resolvemos tus dudas
                    </p>
                    <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 uppercase leading-none">
                        Preguntas<br /><span className="text-flamingo font-serif italic lowercase font-light">Frecuentes.</span>
                    </h2>
                    <p className="text-lg md:text-xl opacity-70 font-light max-w-2xl mx-auto">
                        Todo lo que necesitas saber antes de vivir la experiencia Celestún.
                    </p>
                </div>

                <div>
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={openIndex === index}
                            onClick={() => toggleItem(index)}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm opacity-60 mb-6">¿Tienes otra pregunta?</p>
                    <a
                        href="https://wa.me/529995483710"
                        className="inline-flex items-center gap-3 bg-flamingo text-white px-8 py-4 font-bold uppercase tracking-[0.15em] text-xs hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Pregúntanos por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
