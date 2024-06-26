// NavBar.jsx

import { Link } from 'react-router-dom';
import '../../styles/NavBar.css';

const categories = ['deportes','vestimenta', 'electrónica', 'mueblería']; 

export default function NavBar({ carrito }) {
  return (
    <div className="navbar">
      <Link to={'/'}>Inicio</Link>
      <Link to={'/products'}>Productos</Link>
      {categories.map((category) => (
        <Link key={category} to={`/category/${category}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      ))}
      <Link to={'/carrito'}>Carrito ({carrito.length})</Link> {/* Enlace al carrito */}
    </div>
  );
}
