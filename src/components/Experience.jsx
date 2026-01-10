import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    useEffect(() => {
        gsap.utils.toArray('.img-reveal').forEach((img) => {
            gsap.to(img, {
                scrollTrigger: { trigger: img, start: "top 75%" },
                onStart: () => img.classList.add('active')
            });
        });
    }, []);

    return (
        <section id="experiencia" className="py-20 md:py-32 px-6 max-w-[1400px] mx-auto overflow-hidden">
            <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-5 sticky-title">
                    <h2 className="text-flamingo font-serif italic text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                        Tu Guía Experto.
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-10">
                        Soy nativo de Celestún y un profesional certificado. Mi prioridad es ofrecerte un recorrido seguro, auténtico y lejos de las multitudes. Navegamos hacia los rincones más preservados de la Reserva, compartiendo contigo el conocimiento profundo que solo un local posee.
                    </p>
                    <div className="border-l-4 border-flamingo pl-6">
                        <p className="font-bold text-sm uppercase tracking-widest text-flamingo">Guía Certificado</p>
                        <p className="text-sm opacity-50 dark:text-gray-600 italic">Experiencia, Seguridad y Sustentabilidad</p>
                    </div>
                </div>

                <div className="md:col-span-7 space-y-12 md:space-y-20">
                    <div className="relative overflow-hidden group">
                        <img
                            src="https://res.cloudinary.com/diw2luuur/image/upload/v1768027336/IMG_6453_mbdtx6.jpg"
                            className="img-reveal w-full aspect-[16/9] object-cover transition-all duration-700"
                            alt="Flamingos Rosados y Naturaleza en Ría Celestún"
                            loading="lazy"
                        />
                        <p className="mt-4 text-[10px] uppercase tracking-widest opacity-40">01 / Flamingos en Libertad</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
