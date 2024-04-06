import React from 'react';
import "./vioTerm/vlv/pages/style2.css";

function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> ❄Viod Code❄</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body style={{ backgroundColor: 'white' }}>
        <header>
          <nav>
            <ul id="navbar">
            <li><a href="home.tsx">Home</a></li>
              <li><a href="quienes-somos.tsx">Quienes somos</a></li>
              <li><a href="producto.tsx">Producto</a></li>
              <li><a href="contactanos.tsx">Contactanos</a></li>
              <li><a href="registros.tsx">Registros</a></li>
            </ul>
          </nav>
        </header>
        <div style={{ backgroundColor: 'black' }}>
        <center>
          <img src="Diseño.gif" alt="Ejemplo de sistema de refrigeracion" width="700px" height="500px" style={{ border: '3px solid gold' }} />
        </center>
        </div>

        <h1 style={{ color: 'gold' }}>❄Un poco sobre nosotros❄</h1>
        <p style={{ color: 'white' }}>Debido a las múltiples problemáticas en el área agronómica nosotros decidimos desarrollar un prototipo con funciones de un arduino. Este tendrá un sensor de temperatura, que medirá tanto el calor como la humedad de los productos dentro de un refrigerador.</p>

        <div className="container">
          <h1 style={{ color: 'white' }}>Misión</h1>
          <p style={{ color: 'white' }}>Nuestra misión es llevar nuestra tecnología en las áreas más básicas con el fin de evitar que las causas naturales repercutan en la producción ofreciendo un sistema capaz de mantener frescos los productos por más tiempo, evitando plagas y uso de procesos químicos conservadores.</p>
        </div>

        <div className="container">
          <h1 style={{ color: 'white' }}>Visión</h1>
          <p style={{ color: 'white' }}>Nuestra visión es lograr una evolución dentro del mercado agrónomo, ofreciendo una reducción de desperdicio de alimentos tales como verduras y carnes. Al igual dar una mejora en la oferta y demanda de acuerdo a la calidad-precio.</p>
          </div>
      </body>
    </html>
  );
}
