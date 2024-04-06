import React from 'react';
import "./vioTerm/vlv/pages/style2.css";

function Registro() {
  return (
    <>
      <link rel="stylesheet" href="styles.css" />
      <head>
        <title>REGISTRO</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ backgroundColor: 'black' }}>
        <center>
          <video src="logo.mp4" width="200" height="200" loop={true}></video>
          <p style={{ color: 'white' }}>REGISTROS DE LOS DATOS DE TEMPERATURA</p>
          <hr />
        </center>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <table style={{ border: 2, color: 'white' }}>
            <tr>
              <td>TEMPERATURA</td>
              <td>HUMEDAD</td>
              <td>FECHA</td>
              <td>HORA</td>
            </tr>
            <tr>
              <td>26.10°C</td>
              <td>19%</td>
              <td>4/5/2024</td>
              <td>13:37:12:122</td>
            </tr>
            <tr>
              <td>26.20°C</td>
              <td>19%</td>
              <td>4/5/2024</td>
              <td>13:38:14:130</td>
            </tr>
            <tr>
              <td>26.10°C</td>
              <td>20%</td>
              <td>4/5/2024</td>
              <td>13:39:17:119</td>
            </tr>
          </table>
        </center>
        </div>
      </body>
    </>
  );
}
