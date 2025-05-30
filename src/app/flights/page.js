'use client';
import { useEffect, useState } from 'react'
import Head from "next/head";
import Script from 'next/script';
import Link from 'next/link';
import '@/styles/css_sattre/core.min.css';
import '@/styles/css_sattre/skin.css';
import Footer from "@/components/user.footer";
import TopNavBar from "@/components/navbar.user.top";
import Navbar from "@/components/navbar.user";

export default function Home() {
	const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('http://localhost:3050/flights'); // Ajusta si tu backend tiene otro puerto
        const data = await response.json();
        setFlights(data.data); // data.data porque el backend devuelve { data: [...] }
      } catch (error) {
        console.error('Error al obtener vuelos:', error);
      }
    };

    fetchFlights();
  }, []);
  return (
    <>
	
    <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700%7COpen+Sans:300,400,600,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
	<main className="shop">
	<TopNavBar/>
	

	<div className="wrapper reveal-side-navigation">
		<div className="wrapper-inner">

			<header className="header header-fixed header-fixed-on-mobile header-transparent" data-bkg-threshold="370" data-compact-threshold="370">
				<div className="header-inner">
					<div className="row nav-bar">
						<div className="column width-12 nav-bar-inner">
							<div className="logo">
								<div className="logo-inner">
									<a href="index.html"><img src="images/design-agency/logo-dark.png" alt="Sartre Logo" /></a>
									<a href="index.html"><img src="images/design-agency/logo.png" alt="Sartre Logo" /></a>
								</div>
							</div>
							<nav className="navigation nav-block primary-navigation nav-right">
								<Navbar/>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<div className="content clearfix">

				<div className="section-block intro-title-2">
					<div className="row">
						<div className="column width-12 center">
							<div className="title-container">
								<div className="title-container-inner color-white">
									<h1 className="title-large mb-30">Vuelos</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-block pb-0">
					<div className="row">
						<div className="column width-10 offset-1 center">
							<p className="lead weight-regular mb-70">Ve nuestros vuelos.</p>
						</div>
						<div className="column width-12">
							<hr className="mb-70"/>
						</div>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0 100px 0' }}>
					<table style={{
						borderCollapse: 'collapse',
						width: '96%',
						maxWidth: '1200px',
						textAlign: 'center',
						boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
						fontFamily: 'Arial, sans-serif'
					}}>
						<thead>
						<tr style={{ backgroundColor: 'black', color: 'white' }}>
							<th style={thStyle}>Origen</th>
							<th style={thStyle}>Destino</th>
							<th style={thStyle}>Distancia</th>
							<th style={thStyle}>Precio</th>
							<th style={thStyle}>Salida</th>
							<th style={thStyle}>Llegada</th>
							<th style={thStyle}>Estado</th>
							<th style={thStyle}>Acción</th>
						</tr>
						</thead>
						<tbody>
						 {flights
							.filter(flight => flight.status !== 'completado' && flight.status !== 'cancelado')
							.map((flight) => (
							<tr key={flight._id} style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ccc' }}>
								<td style={tdStyle}>{flight.origin_country}</td>
								<td style={tdStyle}>{flight.destination_country}</td>
								<td style={tdStyle}>{flight.distance} km</td>
								<td style={tdStyle}>${flight.total_price}</td>
								<td style={tdStyle}>{new Date(flight.departure_datetime).toLocaleString()}</td>
								<td style={tdStyle}>{new Date(flight.arrival_datetime).toLocaleString()}</td>
								<td style={tdStyle}>{flight.status}</td>
								<td style={tdStyle}>
								<button style={buttonStyle}>Reservar</button>
								</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
				


			</div>
			
			<Footer/>
			

			

		</div>
	</div>
	{/* Scripts externos */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="http://maps.googleapis.com/maps/api/js?v=3"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/timber.master.min.js"
          strategy="afterInteractive"
        />

	</main>
	</>
    

	
  );
}
const thStyle = {
  padding: '12px 15px',
  border: '1px solid #ddd',
  fontWeight: 'bold'
};

const tdStyle = {
  padding: '10px 12px',
  border: '1px solid #ddd'
};

const buttonStyle = {
  padding: '8px 14px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold'
};



