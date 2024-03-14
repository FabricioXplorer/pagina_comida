import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Pagina.css'; // Importamos nuestro archivo CSS para los estilos
import Categorias from './Categorias';
import Productos from './Productos';
import Bonificaciones from './Bonificaciones';
import DetalleCompras from './DetalleCompras';
import Inicio from './Inicio'; // Importamos el componente Inicio

function Pagina() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/categorias" className="nav-link">Categorías</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/bonificaciones" className="nav-link">Bonificaciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/detalle-compras" className="nav-link">Detalle Compras</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/bonificaciones" element={<Bonificaciones />} />
          <Route path="/detalle-compras" element={<DetalleCompras />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Pagina;
