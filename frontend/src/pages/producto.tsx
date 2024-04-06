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
      <body style={{ backgroundColor: 'black' }}>
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
        <div>
        <center>
          <img src="Diseño.gif" alt="Ejemplo de sistema de refrigeracion" width="700px" height="500px" style={{ border: '3px solid gold' }} />
        </center>
        </div>
      </body>
    </html>
  );
}

