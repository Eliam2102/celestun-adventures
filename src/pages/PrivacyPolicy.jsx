import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-black dark:bg-black-pure dark:text-white min-h-screen selection:bg-flamingo selection:text-white flex flex-col pt-32">
            <Cursor />
            <Navbar />
            <div className="flex-grow max-w-4xl mx-auto px-6 py-12 md:py-24">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12 uppercase">
                    Política de <span className="text-flamingo">Privacidad</span>.
                </h1>

                <div className="space-y-8 font-light text-lg opacity-80 leading-relaxed font-serif">
                    <p>
                        En <strong>Celestún Adventures</strong>, valoramos su privacidad y nos comprometemos a proteger sus datos personales.
                        Esta política describe cómo recopilamos, usamos y resguardamos su información.
                    </p>

                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-widest uppercase mb-4 opacity-100">1. Recopilación de Información</h3>
                        <p>
                            Recopilamos información que usted nos proporciona directamente al reservar un tour,
                            ponerse en contacto con nosotros o suscribirse a nuestro boletín. Esto puede incluir su nombre,
                            correo electrónico, número de teléfono y detalles de pago.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-widest uppercase mb-4 opacity-100">2. Uso de la Información</h3>
                        <p>
                            Utilizamos sus datos para procesar sus reservas, enviarle confirmaciones, responder a sus consultas
                            y mejorar nuestros servicios. No vendemos ni compartimos su información con terceros no afiliados para fines de marketing.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-widest uppercase mb-4 opacity-100">3. Seguridad</h3>
                        <p>
                            Implementamos medidas de seguridad para proteger su información contra el acceso no autorizado,
                            la alteración o la destrucción.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-widest uppercase mb-4 opacity-100">4. Cookies</h3>
                        <p>
                            Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación.
                            Puede configurar su navegador para rechazar las cookies, pero esto podría limitar algunas funcionalidades del sitio.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
