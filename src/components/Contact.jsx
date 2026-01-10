import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        const SERVICE_ID = 'service_o23rj3i';
        const TEMPLATE_ID = 'template_k62yuxl';
        const PUBLIC_KEY = 'OvSpobO-T9HnvdvTU';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('error');
            });
    };

    return (
        <section id="reserva" className="py-24 md:py-40 bg-white text-black dark:bg-black-pure dark:text-white transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-8xl font-extrabold tracking-tighter mb-6 uppercase leading-none">
                        Dile hola al<br /><span className="text-flamingo font-serif italic lowercase font-light">Paraíso.</span>
                    </h2>
                    <p className="text-lg md:text-xl opacity-70 font-light max-w-2xl mx-auto">
                        Reserva tu experiencia privada o cuéntanos tus dudas. Te responderemos en menos de 24 horas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Formulario */}
                    <div className="text-left w-full">
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div className="group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="TU NOMBRE"
                                    aria-label="Tu Nombre"
                                    required
                                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xs md:text-sm font-bold uppercase tracking-widest focus:border-flamingo outline-none transition-colors placeholder:text-black/30 dark:placeholder:text-white/30"
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="CORREO ELECTRÓNICO"
                                    aria-label="Correo Electrónico"
                                    required
                                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xs md:text-sm font-bold uppercase tracking-widest focus:border-flamingo outline-none transition-colors placeholder:text-black/30 dark:placeholder:text-white/30"
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="TELÉFONO"
                                    aria-label="Teléfono"
                                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xs md:text-sm font-bold uppercase tracking-widest focus:border-flamingo outline-none transition-colors placeholder:text-black/30 dark:placeholder:text-white/30"
                                />
                            </div>
                            <div className="group">
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="¿CÓMO PODEMOS AYUDARTE?"
                                    aria-label="Mensaje"
                                    required
                                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xs md:text-sm font-bold uppercase tracking-widest focus:border-flamingo outline-none transition-colors resize-none placeholder:text-black/30 dark:placeholder:text-white/30"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="bg-flamingo text-white px-12 py-5 font-bold uppercase tracking-[0.2em] hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all w-full md:w-auto text-xs scale-hover disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-500 font-bold text-sm tracking-widest mt-4 animate-pulse">
                                    ¡MENSAJE ENVIADO CON ÉXITO!
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 font-bold text-sm tracking-widest mt-4">
                                    HUBO UN ERROR. INTENTA DE NUEVO O USA WHATSAPP.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Info Directa */}
                    <div className="flex flex-col justify-center h-full space-y-10 border-t pt-10 md:pt-0 md:border-t-0 md:border-l border-black/10 dark:border-white/10 md:pl-16">
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-[10px] text-flamingo mb-4">Atención Inmediata</h4>
                            <p className="text-2xl font-serif italic mb-8">¿Prefieres no esperar?</p>
                            <div className="flex flex-col gap-6">
                                <a href="https://wa.me/529995483710" className="flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-flamingo transition-colors group">
                                    <span className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-flamingo group-hover:border-flamingo group-hover:text-white transition-all">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </span>
                                    WhatsApp
                                </a>
                                <a href="mailto:contact@celestunadventures.com" className="flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-flamingo transition-colors group">
                                    <span className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-flamingo group-hover:border-flamingo group-hover:text-white transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </span>
                                    contact@celestunadventures.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
