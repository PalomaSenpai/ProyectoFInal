"use client";

import Layout from "../../src/components/invitado.main.layout";
import Link from 'next/link';
import { useState } from 'react';
export default function Home() {
	const [valor, setValor] = useState('origen');
  // Aquí puedes definir el estado inicial de los campos del formulario si es necesario
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

  const dataToSend = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    birthDate: form.birthDate.value,
    gender: form.gender.value,
    RFC: form.RFC.value,
    email: form.email.value,
    password: form.password.value,
    contact: {
      phone: form.phone.value
    },
    address: {
      street: form.street.value,
      city: form.city.value,
      state: form.state.value,
      country: form.country.value,
      zipCode: form.zipCode.value
    }
  };

    try {
      const res = await fetch("https://chocoportback.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      
    } catch (err) {
      
    }
  };

  return (
    <Layout>
      	<section className="section-block featured-media window-height tm-slider-parallax-container">
					<div className="tm-slider-container full-width-slider" data-featured-slider data-parallax data-parallax-fade-out data-animation="slide" data-speed="1000" data-scale-under="960">
						<ul className="tms-slides">
							<li className="tms-slide" data-image data-as-bkg-image data-force-fit data-overlay-bkg-color="#15130f" data-overlay-bkg-opacity="0.4" data-animation="slideTopBottom">
								<div className="tms-content">
									<div className="tms-content-inner center left-on-mobile v-align-middle">
										<div className="row">
											<div className="column width-12">
												<h1 className="color-white text-uppercase lspacing-small weight-bold no-margin-bottom">
													<span className="tms-caption" data-animate-in="preset:slideInLeftShort;duration:800ms;delay:200;" data-no-scale>Sartre</span>
													<span className="tms-caption" data-animate-in="preset:slideInLeftShort;duration:800ms;delay:700ms;" data-no-scale>Creative</span>
													<span className="tms-caption" data-animate-in="preset:slideInLeftShort;duration:800ms;delay:500ms;" data-no-scale>New</span>
													<span className="tms-caption" data-animate-in="preset:slideInUpShort;duration:800ms;delay:900ms;" data-no-scale>York</span>
												</h1>
												<div className="clear"></div>
												<p className="tms-caption color-white text-xlarge weight-light hide-on-mobile" data-no-scale data-animate-in="preset:flipInY;duration:1000ms;delay:1300ms;">A highly unique studio</p>
											</div>
										</div>
									</div>
								</div>
								<img data-src="images/chocoport/beach.png" data-retina src="images/blank.png" alt=""/>
							</li>
							<li className="tms-slide" data-image data-as-bkg-image data-force-fit data-overlay-bkg-color="#15130f" data-overlay-bkg-opacity="0.3" data-animation="scaleIn">
								<div className="tms-content">
									<div className="tms-content-inner center v-align-middle">
										<div className="row">
											<div className="column width-12">
												<h1 className="color-white text-uppercase lspacing-small weight-bold">
													<span className="tms-caption" data-no-scale data-animate-in="preset:slideInDownShort;duration:800ms;">Banana&nbsp;</span>
													<span className="tms-caption" data-no-scale data-animate-in="preset:slideInUpShort;duration:800ms;delay:500ms;">R.</span>
												</h1>
												<div className="clear"></div>
												<div className="tms-caption"
													 data-no-scale
													 data-animate-in="preset:slideInLeftShort;duration:800ms;delay:900ms;">
													<a href="#" className="button medium text-uppercase border-white bkg-hover-theme color-white color-hover-white">View Case Study</a> 
												</div>
											</div>
										</div>
									</div>
								</div>
								<img data-src="images/chocoport/people_walking.png" data-retina src="images/blank.png" alt=""/>
							</li>
						</ul>
					</div>
				</section>

        <div id="getting-started" className="section-block feature-column-group no-padding">
          <div className="row full-width collapse flex">
            <div className="column width-4">
              <div className="feature-column small pt-60 pb-60 horizon" data-animate-in="preset:slideInLeftShort;duration:1000ms;" data-threshold="0.5">
                <div className="feature-text">
                  <span className="text-large font-alt-1">01.</span>
                  <h3 className="text-uppercase color-grey">Seleccionar Ubicación</h3>
                  <p className="mb-mobile-30">Elige el punto de partida y el destino para tu viaje. Asegúrate de seleccionar la ciudad correcta antes de continuar con la compra.</p>
                </div>
              </div>
            </div>
            
            <div className="column width-4 bkg-grey-ultralight">
              <div className="feature-column small pt-60 pb-60 horizon" data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:100ms;" data-threshold="0.5">
                <div className="feature-text">
                  <span className="text-large font-alt-1">02.</span>
                  <h3 className="text-uppercase color-grey">Obtener Tarifa Aérea</h3>
                  <p className="mb-mobile-30">Una vez que hayas seleccionado la ubicación, se mostrarán las opciones de tarifas disponibles. Escoge la que se ajuste a tu presupuesto y preferencias de viaje.</p>
                </div>
              </div>
            </div>
            
            <div className="column width-4">
              <div className="feature-column small pt-60 pb-60 horizon" data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:200ms;" data-threshold="0.5">
                <div className="feature-text">
                  <span className="text-large font-alt-1">03.</span>
                  <h3 className="text-uppercase color-grey">Pagar y Empacar</h3>
                  <p className="mb-mobile-30">Completa el proceso de pago de manera segura. Una vez confirmado tu pago, empaca tus pertenencias y prepárate para tu aventura. ¡Buen viaje!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-block replicable-content bkg-grey-ultralight">
          <div className="row">
						<div className="column width-12">     
              <div className="column width-2">
                <h3 className="mb-50">Busca tu vuelo</h3>
              </div>
              <form>
                <div className="column width-2">Origen
                  <div className="form-select form-element large">
				  <select
					name="budget"
					tabIndex="6"
					className="form-aux"
					data-label="origen"
					value={valor}
					onChange={(e) => setValor(e.target.value)}
					>
						
                      <option value="origen">
                        Origen
                      </option>
                      <option value="">$500-$1000</option>
                      <option value="">$1000-$2000</option>
                      <option value="">$2000-$3500</option>
                      <option value="">$5000+</option>
                    </select>
                  </div>
                </div>
                <div className="column width-2">Destino
                  <div className="form-select form-element large">
                    <select
                      name="budget"
                      tabIndex="6"
                      className="form-aux"
                      data-label="Destino"
                    >
                      <option  value="Destino">
                        Destino
                      </option>
                      <option value="">$500-$1000</option>
                      <option value="">$1000-$2000</option>
                      <option value="">$2000-$3500</option>
                      <option value="">$5000+</option>
                    </select>
                  </div>
                </div>
                <div className="column width-2">
                  <div className="field-wrapper">Salida
                    <input
                      type="date"
                      name="date"
                      className="form-aux form-date form-element large"
                      placeholder="Day/Month/Year"
                      tabIndex="5"
                    />
                  </div>
                </div>
                <div className="column width-2">Rango
                  <div className="form-select form-element large">
                    <select
                      name="budget"
                      tabIndex="6"
                      className="form-aux"
                      data-label="Rango"
                    >
                      <option  value="Rango">
                        Rango
                      </option>
                      <option value="">$500-$1000</option>
                      <option value="">$1000-$2000</option>
                      <option value="">$2000-$3500</option>
                      <option value="">$5000+</option>
                    </select>
                  </div>
                </div>&nbsp;
                <div className="column width-2">&nbsp;
                  <input
                    type="submit"
                    value="Send Email"
                    className="button bkg-purple  medium border-hover-purple color-white color-hover-purple "
                  />
                </div>

                
              </form>

            </div>
          </div>
        </div>
        <div className="section-block grid-container fade-in-progressively full-width no-margins no-padding" data-layout-mode="masonry" data-grid-ratio="0" data-animate-filter-duration="700" data-set-dimensions data-animate-resize data-animate-resize-duration="0.8">
					<div className="row">
						<div className="column width-12">
							<div className="row grid content-grid-4">
								<Cards/>
							</div>
						</div>
					</div>
				</div>

        <section className="section-block hero-5 hero-5-1 clear-height show-media-column-on-mobile bkg-purple">
					<div className="media-column width-6 horizon" data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:100ms;" data-threshold="0.5"></div>
					<div className="row">
						<div className="column width-5 push-7">
							<div className="hero-content split-hero-content">
								<div className="hero-content-inner center-on-mobile horizon" data-animate-in="preset:fadeIn;duration:1300ms;" data-threshold="0.5">
									<div className="color-white">
										<h2 className="mb-30">¡Únete Hoy y Comienza tu Viaje!</h2>
										<p className="lead">Regístrate y descubre lo que el mundo tiene para ti.</p>
									</div>
									<p className="color-white opacity-06">Viajar es abrir la mente y el corazón a lo desconocido. Es descubrir paisajes que cortan la respiración, sabores que despiertan los sentidos y culturas que transforman nuestra forma de ver el mundo. </p>
									<Link href="/register" className="button scroll-link medium border-white bkg-hover-charcoal color-white color-hover-white text-uppercase">Registrarse ahora</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

        <div className="section-block hero-5 hero-5-2 clear-height right show-media-column-on-mobile bkg-white">
				<div className="media-column width-6 horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;delay:100ms;" data-threshold="0.5"></div>
					<div className="row">
						<div className="column width-5">
							<div className="hero-content split-hero-content">
								<div className="hero-content-inner left center-on-mobile horizon" data-animate-in="preset:fadeIn;duration:1300ms;" data-threshold="0.5">
									<blockquote className="left large quote">
										<p>¿Tienes dudas antes de viajar? Estamos aquí para ayudarte a resolverlas y que vivas tu experiencia con total tranquilidad.</p>
									</blockquote>
									<p className="color-grey">Consulta nuestras preguntas frecuentes para obtener respuestas rápidas sobre reservas, pagos, políticas de equipaje y más. Queremos que tu único plan sea disfrutar el viaje.</p>
									<Link href="/fqa" className="button scroll-link medium bkg-blue border-hover-blue color-white color-hover-blue text-uppercase">Ver Preguntas Frecuentes</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content clearfix">

				<div className="section-block intro-title-2">
					<div className="row">
						<div className="column width-12 center">
							<div className="title-container">
								<div className="title-container-inner color-white">
									<h1 className="title-large mb-30">Registro</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-block pb-0">
					<div className="row">
						<div className="column width-10 offset-1 center">
							<p className="lead weight-regular mb-70">Regístrate y comienza a planear tu viaje con nosotros. Tendrás acceso a ofertas exclusivas, recordatorios personalizados y una experiencia más rápida en cada paso. ¡Tu próxima aventura empieza aquí!</p>
						</div>
						<div className="column width-12">
							<hr className="mb-70"/>
						</div>
					</div>
				</div>
				<div class="section-block replicable-content bkg-grey-ultralight">
            		<div class="row">
						<div class="column width-12">
							<p className="lead weight-semi-bold mb-50">¡Regístrate ya!</p>

							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="firstName"
										className="form-element large"
										placeholder="Nombre*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="lastName"
										className="form-element large"
										placeholder="Apellido(s)*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="date"
										name="birthDate"
										className="form-element large"
										placeholder="Fecha de nacimiento*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<select
										name="gender"
										className="form-element large"
										required
										>
										<option value="">Sexo*</option>
										<option value="male">Masculino</option>
										<option value="female">Femenino</option>
										</select>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="RFC"
										className="form-element large"
										placeholder="RFC*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="email"
										name="email"
										className="form-element large"
										placeholder="Correo electrónico*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="password"
										name="password"
										className="form-element large"
										placeholder="Contraseña*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="phone"
										className="form-element large"
										placeholder="Teléfono*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="street"
										className="form-element large"
										placeholder="Calle*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="city"
										className="form-element large"
										placeholder="Ciudad*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="state"
										className="form-element large"
										placeholder="Estado*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="country"
										className="form-element large"
										placeholder="País*"
										required
										/>
									</div>
									</div>
									<div className="column width-6">
									<div className="field-wrapper">
										<input
										type="text"
										name="zipCode"
										className="form-element large"
										placeholder="Código Postal*"
										required
										/>
									</div>
									</div>
								</div>
								<div className="column width-12">
									<input
									type="submit"
									value="Registrarse"
									className="form-submit button medium bkg-theme bkg-hover-theme color-white color-hover-white"
									/>
								</div>
								</form>


							
							</div>
						</div>
					</div>
				</div>
			
    </Layout>
    
  );
}

function Cards(){
  return(
    <>
    <div className="grid-item development">
									<div className="thumbnail overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity=".3">
										<a className="overlay-link lightbox-link" data-group="project-7" data-caption="Banana Republik" data-image-url="http://sartre.thememountain.com/images/design-agency/portfolio/grid/no-margins/project-7-square.jpg" href="images/design-agency/portfolio/grid/no-margins/project-7-square.jpg" data-lightbox-animation="slideInBottom">
											<div className="img-adjust">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg" alt=""/>
											</div>
                      <span className="overlay-info">
												<span>
													<span>
														<div className="bkg-white">
                              <span className="project-title">The Adventure</span>
															<span className="project-description">identity/illustration</span>
														</div>
													</span>
												</span>
											</span>
										</a>
									</div>
								</div>
								<div className="grid-item grid-sizer design">
									<div className="thumbnail overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity=".3">
										<a className="overlay-link lightbox-link" data-group="project-1" data-caption="The Adventure" data-image-url="http://sartre.thememountain.com/images/design-agency/portfolio/grid/no-margins/project-1-square.jpg" href="images/design-agency/portfolio/grid/no-margins/project-1-square.jpg" data-lightbox-animation="slideInBottom">
											<div className="img-adjust">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/St_Georges_Grenada_Fort_-_panoramio.jpg" alt=""/>
											</div>
                      <span className="overlay-info center">
												<span>
													<span>
														<div className="bkg-white" >
                            	<span className="project-title">The Adventure</span>
															<span className="project-description">identity/illustration</span>
														</div>
													</span>
												</span>
											</span>
										</a>
									</div>
								</div>
								<div className="grid-item illutration">
									<div className="thumbnail overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity=".3">
										<a className="overlay-link lightbox-link" data-group="project-2" data-caption="I Travel - The Travel App" data-image-url="http://sartre.thememountain.com/images/design-agency/portfolio/grid/no-margins/project-2-square.jpg" href="images/design-agency/portfolio/grid/no-margins/project-2-square.jpg" data-lightbox-animation="slideInBottom">
											<div className="img-adjust">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg" alt=""/>
											</div>
                      <span className="overlay-info">
												<span>
													<span>
														<div className="bkg-white">
															<span className="project-title">I Travel</span>
															<span className="project-description">iOS app</span>
														</div>
													</span>
												</span>
											</span>
										</a>
									</div>
								</div>
								<div className="grid-item design illustration">
									<div className="thumbnail overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity=".3">
										<a className="overlay-link lightbox-link" data-group="project-3" data-caption="Miller Jackson Clothing" data-image-url="http://sartre.thememountain.com/images/design-agency/portfolio/grid/no-margins/project-3-square.jpg" href="images/design-agency/portfolio/grid/no-margins/project-3-square.jpg" data-lightbox-animation="slideInBottom">
											<div className="img-adjust">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" alt=""/>
											</div>
                      <span className="overlay-info">
												<span>
													<span>
														<div className="bkg-white">
															<span className="project-title">Miller Jackson</span>
															<span className="project-description">identity</span>
														</div>
													</span>
												</span>
											</span>
										</a>
									</div>
								</div>
								<div className="grid-item illustration">
									<div className="thumbnail overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity=".3">
										<a className="overlay-link lightbox-link" data-group="project-4" data-caption="Rockabilly - Barber New York City" data-image-url="http://sartre.thememountain.com/images/design-agency/portfolio/grid/no-margins/project-4-square.jpg" href="images/design-agency/portfolio/grid/no-margins/project-4-square.jpg" data-lightbox-animation="slideInBottom">
											<div className="img-adjust">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg" alt=""/>
											</div>
                      <span className="overlay-info">
												<span>
													<span>
														<div className="bkg-white">
															<span className="project-title">Rockabilly</span>
															<span className="project-description">identity</span>
														</div>
													</span>
												</span>
											</span>
										</a>
									</div>
								</div>
								<div className="grid-item design">
									<div className="thumbnail overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity=".3">
										<a className="overlay-link lightbox-link" data-group="project-5" data-caption="Bstrd Clothing Company" data-image-url="http://sartre.thememountain.com/images/design-agency/portfolio/grid/no-margins/project-5-square.jpg" href="images/design-agency/portfolio/grid/no-margins/project-5-square.jpg" data-lightbox-animation="slideInBottom">
											<div className="img-adjust">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg" alt=""/>
											</div>
                      <span className="overlay-info">
												<span>
													<span>
														<div className="bkg-white">
															<span className="project-title">BSTRDS</span>
															<span className="project-description">illustration</span>
														</div>
													</span>
												</span>
											</span>
										</a>
									</div>
								</div>
								<div className="grid-item development">
									<div className="thumbnail overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity=".3">
										<a className="overlay-link lightbox-link" data-group="project-6" data-caption="Weird I Am - Clothing" data-image-url="http://sartre.thememountain.com/images/design-agency/portfolio/grid/no-margins/project-6-square.jpg" href="images/design-agency/portfolio/grid/no-margins/project-6-square.jpg" data-lightbox-animation="slideInBottom">
											<div className="img-adjust">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg" alt=""/>
											</div>
                      <span className="overlay-info">
												<span>
													<span>
														<div className="bkg-white">
															<span className="project-title">Weird I Am</span>
															<span className="project-description">identity</span>
														</div>
													</span>
												</span>
											</span>
										</a>
									</div>
								</div>
								<div className="grid-item illustration">
									<div className="thumbnail overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity=".3">
										<a className="overlay-link lightbox-link" data-group="project-8" data-caption="Epic Logo Swiss Made" data-image-url="http://sartre.thememountain.com/images/design-agency/portfolio/grid/no-margins/project-8-square.jpg" href="images/design-agency/portfolio/grid/no-margins/project-8-square.jpg" data-lightbox-animation="slideInBottom">
											<div className="img-adjust">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg" alt=""/>
											</div>
                      <span className="overlay-info">
												<span>
													<span>
														<div className="bkg-white">
															<span className="project-title">Epic</span>
															<span className="project-description">identity</span>
														</div>
													</span>
												</span>
											</span>
										</a>
									</div>
								</div>
    
    </>
  )
}