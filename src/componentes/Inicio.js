import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Inicio.css'; // Importamos el archivo de estilos CSS

function Inicio() {
  return (
    <div className="inicio-container">
      <div className="carousel-categorias-container">
        <div className="carousel-container">
          <Carousel 
            showThumbs={false} 
            showStatus={false} 
            autoPlay={true}   // Habilita la reproducción automática
            infiniteLoop={true} // Habilita el bucle infinito
            interval={2000} // Intervalo de tiempo entre cada diapositiva en milisegundos (opcional)
          >
            <div>
              <img src="/imag/1.jpg" alt="Imagen 1" />
              <p className="legend">Descripción de la imagen 1</p>
            </div>
            <div>
              <img src="/imag/2.jpg" alt="Imagen 2" />
              <p className="legend">Descripción de la imagen 2</p>
            </div>
            <div>
              <img src="/imag/3.jpg" alt="Imagen 3" />
              <p className="legend">Descripción de la imagen 3</p>
            </div>
          </Carousel>
        </div>
        <div className="categorias-container">
          <h3>Categorías</h3>
          <div className="categoria">
          <Link to="/Categorias" className="categoria-link">
            <img src="/imag/1.jpg" alt="Categoria 1" />
            <p>Categoría 1</p>
            </Link>
          </div>
          <div className="categoria">
          <Link to="/categorias" className="categoria-link">
            <img src="/imag/2.jpg" alt="Categoria 2" />
            <p>Categoría 2</p>
           </Link> 
          </div>
          <div className="categoria">
          <Link to="/categorias" className="categoria-link">
            <img src="/imag/3.jpg" alt="Categoria 3" />
            <p>Categoría 3</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bonificaciones-container">
        <h3>Bonificaciones de Clientes</h3>
        {/* Aquí puedes agregar el contenido de las bonificaciones de clientes */}
      </div>
    </div>
  );
}

export default Inicio;
