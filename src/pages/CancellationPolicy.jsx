import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

const CancellationPolicy = () => {
    return (
        <div className="bg-white text-black dark:bg-black-pure dark:text-white min-h-screen selection:bg-flamingo selection:text-white flex flex-col pt-32">
            <Cursor />
            <Navbar />
            <div className="flex-grow max-w-4xl mx-auto px-6 py-12 md:py-24">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12 uppercase">
                    Política de <span className="text-flamingo">Cancelación</span>.
                </h1>

                <div className="space-y-8 font-light text-lg opacity-80 leading-relaxed font-serif">
                    <p>
                        Entendemos que los planes pueden cambiar. A continuación, detallamos nuestra política de cancelación
                        para garantizar claridad y equidad tanto para nuestros huéspedes como para nuestro equipo.
                    </p>

                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-widest uppercase mb-4 opacity-100">1. Cancelaciones Flexibles</h3>
                        <p>
                            Puede cancelar o reprogramar su tour sin costo alguno hasta <strong>24 horas antes</strong> de la hora programada.
                            Recibirá un reembolso completo de su depósito.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-widest uppercase mb-4 opacity-100">2. Cancelaciones de Último Minuto</h3>
                        <p>
                            Las cancelaciones realizadas con menos de 24 horas de antelación no son reembolsables.
                            Esto se debe a que reservamos guías y embarcaciones exclusivamente para usted.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-widest uppercase mb-4 opacity-100">3. Mal Clima</h3>
                        <p>
                            La seguridad es nuestra prioridad. Si las condiciones climáticas impiden la realización segura del tour
                            (según lo determine el Capitán de Puerto o nuestro guía principal), se ofrecerá una reprogramación
                            o un reembolso completo del 100%.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-widest uppercase mb-4 opacity-100">4. No Show</h3>
                        <p>
                            Si no se presenta a la hora acordada sin previo aviso, se considerará una cancelación y no habrá reembolso.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CancellationPolicy;
