import React, { useEffect, useRef } from 'react';

const SENJA_FORM_SRC = 'https://senja.io/p/celestun-adventures/r/JGJjWr?mode=embed';
const SENJA_FORM_LINK = 'https://senja.io/p/celestun-adventures/r/JGJjWr';

const Reviews = () => {
    const scriptLoaded = useRef(false);

    useEffect(() => {
        const scriptSrc = 'https://widget.senja.io/js/iframeResizer.min.js';
        if (document.querySelector(`script[src="${scriptSrc}"]`)) {
            if (window.iFrameResize) {
                window.iFrameResize({ log: false, checkOrigin: false }, '#senja-collector-iframe');
            }
            return;
        }

        if (scriptLoaded.current) return;
        scriptLoaded.current = true;

        const script = document.createElement('script');
        script.src = scriptSrc;
        script.type = 'text/javascript';
        script.onload = () => {
            if (window.iFrameResize) {
                window.iFrameResize({ log: false, checkOrigin: false }, '#senja-collector-iframe');
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
        <section className="w-full bg-black-pure dark:bg-white pt-4 pb-20 md:pb-32 text-white dark:text-black-pure overflow-hidden">
            <div className="w-full px-6 md:px-10">
                <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
                    <p className="text-flamingo font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
                        Lo que dicen nuestros viajeros
                    </p>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
                        Comparte tu{' '}
                        <span className="font-serif italic font-light text-flamingo">
                            Experiencia.
                        </span>
                    </h2>
                    <p className="opacity-70 text-lg md:text-xl font-light leading-relaxed">
                        ¿Ya viviste la magia de Celestún? Cuéntanos cómo fue.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <iframe
                        id="senja-collector-iframe"
                        src={SENJA_FORM_SRC}
                        allow="camera;microphone"
                        title="Deja tu reseña"
                        frameBorder="0"
                        scrolling="auto"
                        width="100%"
                        height="700"
                    />
                </div>
            </div>
        </section>
    );
};

export default Reviews;
