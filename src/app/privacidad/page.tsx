"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function PrivacidadPage() {
  return (
    <div style={{ background: "transparent", color: "var(--clr-text-primary)", padding: "10rem 4rem", minHeight: "100vh" }}>
      
      <Link href="/" style={{
          position: "fixed", top: "2rem", left: "2rem", zIndex: 100,
          background: "var(--clr-surface)", width: "50px", height: "50px",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--clr-text-primary)", border: "1px solid rgba(0,0,0,0.1)", textDecoration: "none"
      }}>
        <MoveLeft size={20} />
      </Link>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="display-font" style={{ fontSize: "var(--text-h1)", marginBottom: "1rem" }}>Aviso de Privacidad.</h1>
        <p className="body-font" style={{ opacity: 0.5, marginBottom: "3rem" }}>Última actualización: 15 de abril de 2024</p>
        
        <div className="body-font" style={{ display: "flex", flexDirection: "column", gap: "2.5rem", opacity: 0.8, lineHeight: 1.8 }}>
           
           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>1. Identidad y domicilio del Responsable</h2>
              <p><strong>Grupo Galarza</strong> (en adelante "el Responsable"), con domicilio en Cancún, Quintana Roo, México, y correo de contacto <strong>galarza.dmcc@gmail.com</strong>, es el responsable del tratamiento de sus datos personales, conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>
           </div>

           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>2. Datos personales que recabamos</h2>
              <p>Para las finalidades descritas en este aviso, recabamos los siguientes datos:</p>
              <ul>
                 <li><strong>Datos de contacto:</strong> Nombre completo, número de teléfono (WhatsApp) y correo electrónico.</li>
                 <li><strong>Datos de interés:</strong> Tipo de propiedad o servicio de su interés y descripción de necesidades.</li>
                 <li><strong>Datos de cuenta (clientes):</strong> Correo electrónico y contraseña cifrada para acceso al tablero de mantenimiento.</li>
              </ul>
              <p>No recabamos datos personales sensibles como origen racial, creencias religiosas o estado de salud.</p>
           </div>

           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>3. Finalidades del tratamiento</h2>
              <p><strong>Finalidades Primarias:</strong></p>
              <ul>
                 <li>Atender solicitudes de información y asesoría.</li>
                 <li>Contacto directo vía WhatsApp o teléfono para seguimiento de proyectos.</li>
                 <li>Gestión de contratos de diseño, construcción o mantenimiento.</li>
                 <li>Facturación y procesamiento de pagos.</li>
                 <li>Envío de reportes fotográficos y técnicos de obras o propiedades.</li>
                 <li>Creación y administración de cuentas de usuario.</li>
              </ul>
              <p><strong>Finalidades Secundarias:</strong></p>
              <ul>
                 <li>Envío de noticias sobre nuevos servicios o promociones.</li>
                 <li>Realización de encuestas de satisfacción para mejora del servicio.</li>
              </ul>
              <p>Si no desea que sus datos se utilicen para finalidades secundarias, puede manifestar su negativa enviando un correo a <strong>galarza.dmcc@gmail.com</strong>.</p>
           </div>

           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>4. Transferencia de datos a terceros</h2>
              <p>Sus datos personales pueden ser compartidos con:</p>
              <ul>
                 <li><strong>Proveedores de servicios tecnológicos:</strong> Como Supabase Inc. para el almacenamiento de datos y autenticación (servidores en EE.UU.).</li>
                 <li><strong>Autoridades competentes:</strong> Solo en cumplimiento de requerimientos legales.</li>
              </ul>
              <p>Nos comprometemos a no vender, alquilar ni compartir su información con terceros para fines comerciales sin su consentimiento expreso.</p>
           </div>

           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>5. Derechos ARCO</h2>
              <p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, debe enviar una solicitud al correo <strong>galarza.dmcc@gmail.com</strong> con el asunto "Ejercicio de Derechos ARCO", incluyendo:</p>
              <ol>
                 <li>Nombre completo y medio para recibir respuesta.</li>
                 <li>Identificación oficial escaneada.</li>
                 <li>Descripción clara del derecho que desea ejercer.</li>
              </ol>
              <p>El plazo de respuesta es de 20 días hábiles.</p>
           </div>

           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>6. Uso de cookies</h2>
              <p>Utilizamos cookies técnicas estrictamente necesarias para el funcionamiento del sitio (sesión de usuario y preferencias). Actualmente no utilizamos cookies de rastreo publicitario ni analítica de terceros.</p>
           </div>

           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>7. Medidas de seguridad</h2>
              <p>Implementamos protocolos de seguridad como cifrado HTTPS/TLS para la transmisión de datos, cifrado en reposo para el almacenamiento y control de acceso restringido para proteger su información contra pérdida o acceso no autorizado.</p>
           </div>

           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>8. Modificaciones al Aviso de Privacidad</h2>
              <p>Nos reservamos el derecho de actualizar este aviso en cualquier momento. Los cambios se publicarán en esta página. El uso del sitio tras una actualización implica la aceptación de los nuevos términos.</p>
           </div>

           <div>
              <h2 className="display-font" style={{fontSize: "2rem", marginBottom: "1rem"}}>9. Autoridad competente</h2>
              <p>Si considera que su derecho a la protección de datos ha sido vulnerado, puede acudir ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).</p>
           </div>

        </div>
      </div>
    </div>
  );
}
