import Layout from "../../src/components/invitado.main.layout";

export default function Home() {
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
								<img data-src="images/design-agency/slider/slide-1-fs.jpg" data-retina src="images/blank.png" alt=""/>
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
								<img data-src="images/design-agency/slider/slide-2-fs.jpg" data-retina src="images/blank.png" alt=""/>
							</li>
							<li className="tms-slide" data-image data-as-bkg-image data-force-fit data-overlay-bkg-color="#15130f" data-overlay-bkg-opacity="0.3" data-animation="slideLeftRight">
								<div className="tms-content">
									<div className="tms-content-inner center v-align-middle">
										<div className="row">
											<div className="column width-12">
												<h1 className="color-white text-uppercase lspacing-small weight-bold">
													<span className="tms-caption" data-no-scale data-animate-in="preset:slideInDownShort;duration:800ms;">Weird&nbsp;</span>
													<span className="tms-caption" data-no-scale data-animate-in="preset:slideInUpShort;duration:800ms;delay:700ms;">I&nbsp;</span>
													<span className="tms-caption" data-no-scale data-animate-in="preset:slideInUpShort;duration:800ms;delay:500ms;">Am&nbsp;</span>
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
								<img data-src="images/design-agency/slider/slide-3-fs.jpg" data-retina src="images/blank.png" alt=""/>
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



        <section className="section-block hero-5 hero-5-1 clear-height show-media-column-on-mobile bkg-theme">
					<div className="media-column width-6 horizon" data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:100ms;" data-threshold="0.5"></div>
					<div className="row">
						<div className="column width-5 push-7">
							<div className="hero-content split-hero-content">
								<div className="hero-content-inner center-on-mobile horizon" data-animate-in="preset:fadeIn;duration:1300ms;" data-threshold="0.5">
									<div className="color-white">
										<h2 className="mb-30">User Stories</h2>
										<p className="lead">Just pack your bags and live an experience you'll never forget.</p>
									</div>
									<p className="color-white opacity-06">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
									<a href="#featured-trips" data-offset="-60" className="button scroll-link medium border-white bkg-hover-charcoal color-white color-hover-white text-uppercase">See Featured Trips</a>
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
										<span className="icon-quote"></span>
										<p>Best travel expierience I've ever had. Wanted something unique and I got exactly that. Excellent!</p>
										<cite>John K. Riley</cite>
									</blockquote>
									<p className="color-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
									<a href="#featured-trips" data-offset="-60" className="button scroll-link medium bkg-theme border-hover-theme color-white color-hover-theme text-uppercase">See Featured Trips</a>
								</div>
							</div>
						</div>
					</div>
				</div>
    </Layout>
    
  );
}
