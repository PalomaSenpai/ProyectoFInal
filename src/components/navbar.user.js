'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <ul>
      <li className="current">
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/flights">Vuelos</Link>
      </li>
      <li>
        <Link href="/faq">Preguntas frecuentes</Link>
      </li>
      <li>
        <Link href="/contact">Contáctanos</Link>
      </li>
      <li>
        <Link href="/register">Registrarse</Link>
      </li>
      <li>
        <Link href="/login">Inicia Sesión</Link>
      </li>
      <li>
			<a href="cart.html">Cart</a>
		</li>
    </ul>
  )
}
