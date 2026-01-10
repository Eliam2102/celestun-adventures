import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Privacidad Total",
        description: "Disfruta de un recorrido privado diseñado para tu comodidad y la de tus acompañantes. La lancha será exclusiva para ustedes, permitiéndoles vivir la experiencia con total libertad y sin prisas.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-flamingo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        )
    },
    {
        title: "Guía Certificado & Local",
        description: "Capitán originario de Celestún y certificado por la NOM-08-TUR-2002. Ofrezco tours bilingües (Español/Inglés) con narrativas detalladas y actualizadas sobre el ecosistema.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-flamingo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Horarios Estratégicos",
        description: "Sabemos cuándo la luz es perfecta para tus fotos y cuándo los flamingos están más activos. Te sugerimos los mejores momentos (amanecer o atardecer) para evitar multitudes.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-flamingo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        title: "Eco-Conciencia Real",
        description: "Respetamos las distancias para no estresar a la fauna. Nuestras maniobras son cuidadosas y silenciosas. Visitamos la ría siendo invitados de la naturaleza, no invasores.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-flamingo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const Features = () => {
    useEffect(() => {
        gsap.utils.toArray('.feature-card').forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%"
                    }
                }
            );
        });
    }, []);

    return (
        <section className="w-full bg-white dark:bg-black-pure py-20 md:py-32 text-black dark:text-white">
            <div className="w-full px-6 md:px-10">
                <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
                    <h3 className="text-flamingo font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
                        ¿Por qué elegirnos?
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
                        La Diferencia <br />
                        <span className="font-serif italic font-light text-flamingo">Celestún Adventures.</span>
                    </h2>
                    <p className="opacity-70 text-lg md:text-xl font-light leading-relaxed">
                        No somos solo un paseo en lancha. Somos anfitriones de una experiencia diseñada para quienes valoran el tiempo, la comodidad y la autenticidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-[1800px] mx-auto">
                    {features.map((feature, idx) => (
                        <div key={idx} className="feature-card group flex flex-col items-center text-center p-8 lg:p-12 rounded-[2.5rem] bg-transparent border border-black/5 dark:border-white/5 hover:border-flamingo/30 dark:hover:border-flamingo/30 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-500 h-full">
                            <div className="mb-8 w-24 h-24 flex items-center justify-center rounded-full bg-flamingo/5 text-flamingo group-hover:scale-110 group-hover:bg-flamingo/10 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h4 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-widest min-h-[3.5rem] flex items-center justify-center">
                                {feature.title}
                            </h4>
                            <p className="text-sm opacity-70 leading-relaxed font-light flex-grow">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
