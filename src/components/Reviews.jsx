import React, { useEffect, useRef } from 'react';

const SENJA_FORM_SRC = 'https://senja.io/p/celestun-adventures/r/JGJjWr?mode=embed';

const Reviews = () => {
    const scriptsLoaded = useRef(false);

    useEffect(() => {
        if (scriptsLoaded.current) return;
        scriptsLoaded.current = true;

        const resizerSrc = 'https://widget.senja.io/js/iframeResizer.min.js';
        if (!document.querySelector(`script[src="${resizerSrc}"]`)) {
            const resizerScript = document.createElement('script');
            resizerScript.src = resizerSrc;
            resizerScript.type = 'text/javascript';
            resizerScript.onload = () => {
                if (window.iFrameResize) {
                    window.iFrameResize({ log: false, checkOrigin: false }, '#wall-of-love-jPxMoad');
                    window.iFrameResize({ log: false, checkOrigin: false }, '#senja-collector-iframe');
                }
            };
            document.body.appendChild(resizerScript);
        }
    }, []);

    return (
        <section id="resenas" className="w-full bg-black-pure dark:bg-white pt-4 pb-20 md:pb-32 text-white dark:text-black-pure overflow-hidden">
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

                <div className="max-w-3xl mx-auto mb-20">
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

                <div className="overflow-hidden">
                    <iframe
                        id="wall-of-love-jPxMoad"
                        src="https://senja.io/p/celestun-adventures/jPxMoad?hideNavigation=true&embed=true"
                        title="Wall of Love"
                        frameBorder="0"
                        scrolling="no"
                        width="100%"
                        style={{ marginTop: '-210px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Reviews;
