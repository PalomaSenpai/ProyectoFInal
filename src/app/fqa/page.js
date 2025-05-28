import Link from 'next/link';
import '@/styles/css_sattre/core.min.css';
import '@/styles/css_sattre/skin.css';

import TopNavBar from "@/components/navbar.user.top";
import Navbar from "@/components/navbar.user";
import Footer from "@/components/user.footer";
import Layout from "@/components/invitado.other.layout"
import Head from "next/head";
import Script from 'next/script';
export default function Home() {
  return (
	<Layout>

				<div className="section-block intro-title-2">
					<div className="row">
						<div className="column width-12 center">
							<div className="title-container">
								<div className="title-container-inner color-white">
									<h1 className="title-large mb-30">Preguntas frecuentes</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-block pb-0">
					<div className="row">
						<div className="column width-10 offset-1 center">
							<p className="lead weight-regular mb-70">¿Tienes dudas? Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios. Si no encuentras lo que buscas, no dudes en contactarnos.</p>
						</div>
						<div className="column width-12">
							<hr className="mb-70"/>
						</div>
					</div>
				</div>
				<div className="section-block pt-0 pb-0">
					<div className="row">
						<div className="column width-4">
							<h3 className="mb-50">Antes del vuelo</h3>
						</div>
						<div className="column width-8">
							<div className="accordion mb-50">
							<ul>
								<li className="active">
								<a href="#accordion-1-panel-1">¿Qué documentos necesito para abordar un vuelo nacional?</a>
								<div id="accordion-1-panel-1">
									<div className="accordion-content">
									<p className="lead mb-20">Para vuelos dentro del país, generalmente se requiere una identificación oficial vigente.</p>
									<p>Esto puede incluir credencial de elector, pasaporte, licencia de conducir u otra forma válida de identificación con fotografía. Es importante verificar con la aerolínea antes del viaje, ya que algunas pueden tener requisitos específicos.</p>
									</div>
								</div>
								</li>
								<li>
								<a href="#accordion-1-panel-2">¿Necesito visa para viajar al extranjero?</a>
								<div id="accordion-1-panel-2">
									<div className="accordion-content">
									<p className="lead mb-20">Depende del país al que vayas.</p>
									<p>Algunos países permiten el ingreso sin visa por un periodo determinado, mientras que otros requieren visa incluso para estadías cortas. Consulta con la embajada o el consulado del país que planeas visitar antes de comprar tu boleto.</p>
									</div>
								</div>
								</li>
								<li>
								<a href="#accordion-1-panel-3">¿Los menores de edad necesitan documentación adicional?</a>
								<div id="accordion-1-panel-3">
									<div className="accordion-content">
									<p className="lead mb-20">Sí, especialmente si viajan solos o con un solo padre/tutor.</p>
									<p>Normalmente se solicita una carta de autorización firmada por ambos padres o tutores legales, además de una copia de las identificaciones. Consulta con la aerolínea y autoridades migratorias para conocer los requisitos exactos según el destino.</p>
									</div>
								</div>
								</li>
							</ul>
							</div>
						</div>
					</div>

				</div>
				<div className="section-block  pb-0">
					<div className="row">
						<div className="column width-4">
							<h3 className="mb-50">Durante el abordaje</h3>
						</div>
						<div className="column width-8">
							<div className="accordion mb-50">
								<ul>
									<li className="active">
										<a href="#accordion-2-panel-1">¿Cuántas maletas puedo llevar en un vuelo?</a>
										<div id="accordion-2-panel-1">
											<div className="accordion-content">
											<p className="lead mb-20">Esto depende de la aerolínea y del tipo de tarifa que hayas adquirido.</p>
											<p>Algunas tarifas solo incluyen equipaje de mano, mientras que otras permiten también maleta documentada. Revisa tu boleto o contacta a la aerolínea para confirmar lo que incluye tu tarifa.</p>
											</div>
										</div>
									</li>
									<li>
										<a href="#accordion-2-panel-2">¿Qué objetos no puedo llevar en el equipaje de mano?</a>
										<div id="accordion-2-panel-2">
											<div className="accordion-content">
											<p className="lead mb-20">Hay una lista clara de objetos prohibidos en cabina por motivos de seguridad.</p>
											<p>No se permiten líquidos mayores a 100 ml, objetos punzocortantes, aerosoles, baterías de litio sueltas, entre otros. Consulta con la aerolínea o el sitio web del aeropuerto para la lista completa actualizada.</p>
											</div>
										</div>
										</li>
									<li>
										<a href="#accordion-2-panel-3">¿Qué pasa si mi maleta excede el peso permitido?</a>
										<div id="accordion-2-panel-3">
											<div className="accordion-content">
											<p className="lead mb-20">Tendrás que pagar una tarifa adicional.</p>
											<p>La mayoría de aerolíneas tienen límites de peso para el equipaje documentado (usualmente entre 23 y 25 kg). Si tu maleta excede ese peso, podrían cobrarte por exceso o pedirte que redistribuyas el contenido. Verifica las políticas antes de empacar.</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

				</div>
				<div className='section-block'>

					<div className="row">
					<div className="column width-4">
						<h3 className="mb-50">Después del Aterrizaje</h3>
					</div>
					<div className="column width-8">
						<div className="accordion mb-50">
							<ul>
								<li className="active">
									<a href="#accordion-4-panel-1">¿Qué debo hacer al bajar del avión?</a>
									<div id="accordion-4-panel-1">
										<div className="accordion-content">
										<p className="lead mb-20">Sigue las señales y al personal del aeropuerto.</p>
										<p>Una vez que desciendas, dirígete al control migratorio si vienes del extranjero. Si es un vuelo nacional, sigue el camino hacia la zona de recolección de equipaje.</p>
										</div>
									</div>
								</li>
								<li>
									<a href="#accordion-4-panel-2">¿Dónde recojo mi equipaje documentado?</a>
									<div id="accordion-4-panel-2">
										<div className="accordion-content">
										<p className="lead mb-20">En la banda asignada para tu vuelo.</p>
										<p>Consulta las pantallas al llegar a la zona de equipaje para saber en qué banda saldrán tus maletas. Si no aparece tu vuelo, pregunta a un agente del aeropuerto.</p>
										</div>
									</div>
								</li>
								<li>
									<a href="#accordion-4-panel-3">¿Qué pasa si mi equipaje no aparece?</a>
									<div id="accordion-4-panel-3">
										<div className="accordion-content">
										<p className="lead mb-20">Debes reportarlo de inmediato a la aerolínea.</p>
										<p>Dirígete al módulo de servicio de la aerolínea en la zona de equipaje. Ellos iniciarán un reporte y te informarán los pasos para localizar tu maleta o compensarte en caso de pérdida.</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				</div>

				</Layout>


	
    

	
  );
}


