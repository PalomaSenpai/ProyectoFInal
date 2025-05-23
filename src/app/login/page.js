import '@/styles/css_sattre/core.min.css';
import '@/styles/css_sattre/skin-design-agency.css';

import Head from "next/head";
import Script from 'next/script';
export default function Home() {
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
	<div className="overlay-navigation-wrapper" data-no-scrollbar data-animation="scale-in">
		<div className="overlay-navigation-scroll-pane">
			<div className="overlay-navigation-inner">
				<div className="v-align-middle">
					<div className="overlay-navigation-header row collapse full-width">
						<div className="column width-12">
							<div className="navigation-hide overlay-nav-hide">
								<a href="#">
									<span className="icon-cancel"></span>
								</a>
							</div>
						</div>
					</div>
					<div className="row collapse full-width">
						<div className="column width-12">
							<nav className="overlay-navigation nav-block center">
								<ul>
									<li className="current">
										<a href="#" className="contains-sub-menu">Demos</a>
										<ul className="sub-menu">
											<li>
												<a href="index-mobile-application.html" className="contains-sub-menu">Mobile Application</a>
												<ul className="sub-menu">
													<li>
														<a href="index-mobile-application.html">Original</a>
													</li>
													<li>
														<a href="index-mobile-application-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-mobile-application-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-mobile-application-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="index-web-application.html" className="contains-sub-menu">Web Application</a>
												<ul className="sub-menu">
													<li>
														<a href="index-web-application.html">Original</a>
													</li>
													<li>
														<a href="index-web-application-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-web-application-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-web-application-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="index-barber-shop.html" className="contains-sub-menu">Barber Shop</a>
												<ul className="sub-menu">
													<li>
														<a href="index-barber-shop.html">Original</a>
													</li>
													<li>
														<a href="index-barber-shop-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-barber-shop-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-barber-shop-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li className="current">
												<a href="index-design-agency.html" className="contains-sub-menu">Agency</a>
												<ul className="sub-menu">
													<li className="current">
														<a href="index-agency.html">Original</a>
													</li>
													<li>
														<a href="index-agency-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-agency-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-agency-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="index-travel-agency.html" className="contains-sub-menu">Travel Agency</a>
												<ul className="sub-menu">
													<li>
														<a href="index-travel-agency.html">Original</a>
													</li>
													<li>
														<a href="index-travel-agency-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-travel-agency-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-travel-agency-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="index-restaurant.html" className="contains-sub-menu">Restaurant</a>
												<ul className="sub-menu">
													<li>
														<a href="index-restaurant.html">Original</a>
													</li>
													<li>
														<a href="index-restaurant-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-restaurant-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-restaurant-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="index-resume.html" className="contains-sub-menu">Resume</a>
												<ul className="sub-menu">
													<li>
														<a href="index-resume.html">Original</a>
													</li>
													<li>
														<a href="index-resume-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-resume-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-resume-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="index-photo-studio.html" className="contains-sub-menu">Photo Studio</a>
												<ul className="sub-menu">
													<li>
														<a href="index-photo-studio.html">Original</a>
													</li>
													<li>
														<a href="index-photo-studio-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-photo-studio-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-photo-studio-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="index-architecture.html" className="contains-sub-menu">Architecture</a>
												<ul className="sub-menu">
													<li>
														<a href="index-architecture.html">Original</a>
													</li>
													<li>
														<a href="index-architecture-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-architecture-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-architecture-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" className="contains-sub-menu">Pages</a>
										<ul className="sub-menu">
											<li>
												<a href="about-style-one.html">About Original</a>
											</li>
											<li>
												<a href="about-style-two.html">About Style 2</a>
											</li>
											<li>
												<a href="about-style-three.html">About Style 3</a>
											</li>
											<li>
												<a href="services-style-one.html">Services Original</a>
											</li>
											<li>
												<a href="services-style-two.html">Services Style 2</a>
											</li>
											<li>
												<a href="services-style-three.html">Services Style 3</a>
											</li>
											<li>
												<a href="contact-style-one.html">Contact Original</a>
											</li>
											<li>
												<a href="contact-style-two.html">Contact Style 2</a>
											</li>
											<li>
												<a href="contact-style-three.html">Contact Style 3</a>
											</li>
											<li>
												<a href="404.html">404</a>
											</li>
											<li>
												<a href="500.html">500</a>
											</li>
											<li>
												<a href="maintenance.html">Maintenance</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" className="contains-sub-menu">Blog</a>
										<ul className="sub-menu">
											<li>
												<a href="blog.html">3 Column Grid</a>
											</li>
											<li>
												<a href="blog-four-columns-full-width.html">4 Column Full Width Grid</a>
											</li>
											<li>
												<a href="blog-sidebar-right-with-media.html">Blog Index Sidebar Right</a>
											</li>
											<li>
												<a href="blog-sidebar-left-with-media.html">Blog Index Sidebar Left</a>
											</li>
											<li>
												<a href="blog-wide-no-sidebar.html">Blog Without Sidebar</a>
											</li>
											<li>
												<a href="blog-masonry-creative.html">Blog Creative</a>
											</li>
											<li>
												<a href="blog-masonry-creative-with-parallax.html">Blog Creative 2</a>
											</li>
											<li>
												<a href="blog-single-post-sidebar-right.html">Single Post Sidebar Right</a>
											</li>
											<li>
												<a href="blog-single-post-sidebar-left.html">Single Post Sidebar Left</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" className="contains-sub-menu">Shop</a>
										<ul className="sub-menu">
											<li>
												<a href="shop-grid.html">Shop Grid</a>
											</li>
											<li>
												<a href="shop-creative.html">Shop Creative</a>
											</li>
											<li>
												<a href="shop-sidebar-right.html">Shop Sidebar Right</a>
											</li>
											<li>
												<a href="single-product-with-gallery.html">Product With Gallery</a>
											</li>
											<li>
												<a href="single-product-with-header.html">Product With Header</a>
											</li>
											<li>
												<a href="single-product-with-parallax.html">Product With Parallax</a>
											</li>
											<li>
												<a href="single-product-on-sale.html">Product On Sale</a>
											</li>
											<li>
												<a href="single-product-no-stock.html">Product Out Of Stock</a>
											</li>
											<li>
												<a href="cart.html">Cart</a>
											</li>
											<li>
												<a href="checkout.html">Checkout</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#" className="contains-sub-menu">Folio</a>
										<ul className="sub-menu">
											<li>
												<a href="portfolio-three-columns.html">3 Column Grid Default</a>
											</li>
											<li>
												<a href="portfolio-three-columns-alternative.html">3 Column Grid Alt</a>
											</li>
											<li>
												<a href="portfolio-three-columns-full-width.html">3 Column Grid Full Width</a>
											</li>
											<li>
												<a href="portfolio-three-columns-full-width-no-margins.html">3 Column Grid Full Width No Margins</a>
											</li>
											<li>
												<a href="portfolio-four-columns-full-width-alternative.html">4 Column Grid Full Width Alt</a>
											</li>
											<li>
												<a href="portfolio-four-columns-full-width-no-margins.html">4 Column Grid Full Width No Margins</a>
											</li>
											<li>
												<a href="portfolio-masonry-grid.html">Full Width Masonry Grid</a>
											</li>
											<li>
												<a href="portfolio-masonry-grid-no-margins.html">Full Width Masonry Grid No Margins</a>
											</li>
											<li>
												<a href="project-style-one.html">Project Style One</a>
											</li>
											<li>
												<a href="project-style-two.html">Project Style Two</a>
											</li>
											<li>
												<a href="project-style-three.html">Project Style Three</a>
											</li>
											<li>
												<a href="project-style-four.html">Project Style Four</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="elements-accordions.html">Elements</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div className="overlay-navigation-footer row full-width center">
						<div className="column width-12 no-padding">
							<p className="copyright">&copy; 2014 THEMEMOUNTAIN. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="wrapper reveal-side-navigation">
		<div className="wrapper-inner">
			<header className="header header-absolute header-transparent header-fixed-on-mobile" data-sticky-threshold="0" data-bkg-threshold="100">
				<div className="header-inner">
					<div className="row nav-bar">
						<div className="column width-12 nav-bar-inner">
							<div className="logo">
								<div className="logo-inner">
									<a href="index.html"><img src="images/design-agency/logo-dark.png" alt="Sartre Logo" /></a>
									<a href="index.html"><img src="images/design-agency/logo.png" alt="Sartre Logo" /></a>
								</div>
							</div>
							<nav className="navigation nav-block secondary-navigation nav-right">
								<ul>
									<li>
										<div className="dropdown">
											<a href="#" className="nav-icon search button no-page-fade"><span className="icon-magnifying-glass"></span></a>
											<div className="dropdown-list custom-content cart-overview">
												<div className="search-form-container site-search">
													<form action="#" method="get" noValidate>
														<div className="row">
															<div className="column width-12">
																<div className="field-wrapper">
																	<input type="text" name="search" className="form-search form-element no-margin-bottom" placeholder="type &amp; hit enter..."/>
																	<span className="border"></span>
																</div>
															</div>
														</div>
													</form>
													<div className="form-response"></div>
												</div>
											</div>
										</div>
									</li> 
									<li>
										<div className="v-align-middle">
											<ul className="social-list list-horizontal">
												<li><a href="#" className="nav-icon"><span className="icon-twitter small"></span></a></li>
												<li><a href="#" className="nav-icon"><span className="icon-facebook small"></span></a></li>
											</ul>
										</div>
									</li>
									<li className="aux-navigation hide">
										<a href="#" className="navigation-show overlay-nav-show nav-icon">
											<span className="icon-menu"></span>
										</a>
									</li>
								</ul>
							</nav>
							<nav className="navigation nav-block primary-navigation nav-right">
								<ul>
									<li className="current">
										<a href="index.html">Demos</a>
										<ul className="sub-menu">
											<li className="contains-sub-menu">
												<a href="index-mobile-application.html">Mobile Application</a>
												<ul className="sub-menu">
													<li>
														<a href="index-mobile-application.html">Original</a>
													</li>
													<li>
														<a href="index-mobile-application-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-mobile-application-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-mobile-application-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu">
												<a href="index-web-application.html">Web Application</a>
												<ul className="sub-menu">
													<li>
														<a href="index-web-application.html">Original</a>
													</li>
													<li>
														<a href="index-web-application-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-web-application-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-web-application-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu">
												<a href="index-barber-shop.html">Barber Shop</a>
												<ul className="sub-menu">
													<li>
														<a href="index-barber-shop.html">Original</a>
													</li>
													<li>
														<a href="index-barber-shop-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-barber-shop-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-barber-shop-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu current">
												<a href="index-design-agency.html">Agency</a>
												<ul className="sub-menu">
													<li className="current">
														<a href="index-design-agency.html">Original</a>
													</li>
													<li>
														<a href="index-design-agency-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-design-agency-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-design-agency-one-page.html">One Page</a>
													</li>
													<li>
														<a href="index-design-agency-one-page-2.html">One Page 2(Renard) <span className="label bkg-theme color-white pull-right">New</span></a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu">
												<a href="index-travel-agency.html">Travel Agency</a>
												<ul className="sub-menu">
													<li>
														<a href="index-travel-agency.html">Original</a>
													</li>
													<li>
														<a href="index-travel-agency-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-travel-agency-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-travel-agency-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu">
												<a href="index-restaurant.html">Restaurant</a>
												<ul className="sub-menu">
													<li>
														<a href="index-restaurant.html">Original</a>
													</li>
													<li>
														<a href="index-restaurant-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-restaurant-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-restaurant-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu">
												<a href="index-resume.html">Resume</a>
												<ul className="sub-menu">
													<li>
														<a href="index-resume.html">Original</a>
													</li>
													<li>
														<a href="index-resume-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-resume-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-resume-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu">
												<a href="index-photo-studio.html">Photo Studio</a>
												<ul className="sub-menu">
													<li>
														<a href="index-photo-studio.html">Original</a>
													</li>
													<li>
														<a href="index-photo-studio-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-photo-studio-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-photo-studio-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu">
												<a href="index-architecture.html">Architecture</a>
												<ul className="sub-menu">
													<li>
														<a href="index-architecture.html">Original</a>
													</li>
													<li>
														<a href="index-architecture-2.html">Variation 2</a>
													</li>
													<li>
														<a href="index-architecture-3.html">Variation 3</a>
													</li>
													<li>
														<a href="index-architecture-one-page.html">One Page</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<a href="about-style-one.html">Pages</a>
										<ul className="sub-menu">
											<li>
												<a href="about-style-one.html">About Original</a>
											</li>
											<li>
												<a href="about-style-two.html">About Style 2</a>
											</li>
											<li>
												<a href="about-style-three.html">About Style 3</a>
											</li>
											<li>
												<a href="services-style-one.html">Services Original</a>
											</li>
											<li>
												<a href="services-style-two.html">Services Style 2</a>
											</li>
											<li>
												<a href="services-style-three.html">Services Style 3</a>
											</li>
											<li>
												<a href="contact-style-one.html">Contact Original</a>
											</li>
											<li>
												<a href="contact-style-two.html">Contact Style 2</a>
											</li>
											<li>
												<a href="contact-style-three.html">Contact Style 3</a>
											</li>
											<li>
												<a href="404.html">404</a>
											</li>
											<li>
												<a href="500.html">500</a>
											</li>
											<li>
												<a href="maintenance.html">Maintenance</a>
											</li>
										</ul>
									</li>
									<li className="contains-mega-sub-menu">
										<a href="portfolio-three-columns.html">Folio</a>
										<ul className="mega-sub-menu">
											<li>
												<a href="portfolio-three-columns.html">3 Column Grids</a>
												<ul>
													<li>
														<a href="portfolio-three-columns.html">3 Column Grid Default</a>
													</li>
													<li>
														<a href="portfolio-three-columns-alternative.html">3 Column Grid Alt</a>
													</li>
													<li>
														<a href="portfolio-three-columns-full-width.html">3 Column Grid Full Width</a>
													</li>
													<li>
														<a href="portfolio-three-columns-full-width-no-margins.html">3 Column Grid Full Width No Margins</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="portfolio-four-columns-full-width-alternative.html">4 Column Grids</a>
												<ul>
													<li>
														<a href="portfolio-four-columns-full-width-alternative.html">4 Column Grid Full Width Alt</a>
													</li>
													<li>
														<a href="portfolio-four-columns-full-width-no-margins.html">4 Column Grid Full Width No Margins</a>
													</li>
													<li>
														<a href="portfolio-masonry-grid.html">Full Width Masonry Grid</a>
													</li>
													<li>
														<a href="portfolio-masonry-grid-no-margins.html">Full Width Masonry Grid No Margins</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="project-style-one.html">Project Pages</a>
												<ul>
													<li>
														<a href="project-style-one.html">Project Style One</a>
													</li>
													<li>
														<a href="project-style-two.html">Project Style Two</a>
													</li>
													<li>
														<a href="project-style-three.html">Project Style Three</a>
													</li>
													<li>
														<a href="project-style-four.html">Project Style Four</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<a href="blog.html">Blog</a>
										<ul className="sub-menu">
											<li>
												<a href="blog.html">3 Column Grid</a>
											</li>
											<li>
												<a href="blog-four-columns-full-width.html">4 Column Full Width Grid</a>
											</li>
											<li>
												<a href="blog-sidebar-right-with-media.html">Blog Index Sidebar Right</a>
											</li>
											<li>
												<a href="blog-sidebar-left-with-media.html">Blog Index Sidebar Left</a>
											</li>
											<li>
												<a href="blog-wide-no-sidebar.html">Blog Without Sidebar</a>
											</li>
											<li>
												<a href="blog-masonry-creative.html">Blog Creative</a>
											</li>
											<li>
												<a href="blog-masonry-creative-with-parallax.html">Blog Creative 2</a>
											</li>
											<li>
												<a href="blog-single-post-sidebar-right.html">Single Post Sidebar Right</a>
											</li>
											<li>
												<a href="blog-single-post-sidebar-left.html">Single Post Sidebar Left</a>
											</li>
										</ul>
									</li>
									<li className="sub-menu-right">
										<a href="shop-grid.html">Shop</a>
										<ul className="sub-menu">
											<li className="contains-sub-menu">
												<a href="shop-grid.html">Shop Layouts</a>
												<ul className="sub-menu">
													<li>
														<a href="shop-grid.html">Shop Grid</a>
													</li>
													<li>
														<a href="shop-creative.html">Shop Creative</a>
													</li>
													<li>
														<a href="shop-sidebar-right.html">Shop Sidebar Right</a>
													</li>
												</ul>
											</li>
											<li className="contains-sub-menu">
												<a href="single-product.html">Single Product</a>
												<ul className="sub-menu">
													<li>
														<a href="single-product-with-gallery.html">Product With Gallery</a>
													</li>
													<li>
														<a href="single-product-with-header.html">Product With Header</a>
													</li>
													<li>
														<a href="single-product-with-parallax.html">Product With Parallax</a>
													</li>
													<li>
														<a href="single-product-on-sale.html">Product On Sale</a>
													</li>
													<li>
														<a href="single-product-no-stock.html">Product Out Of Stock</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="cart.html">Cart</a>
											</li>
											<li>
												<a href="checkout.html">Checkout</a>
											</li>
										</ul>
									</li>
									<li className="contains-mega-sub-menu">
										<a href="elements-accordions.html">Elements</a>
										<ul className="mega-sub-menu">
											<li>
												<ul>
													<li>
														<a href="elements-accordions.html"><span className="icon-menu"></span> Accordions</a>
													</li>
													<li>
														<a href="elements-buttons.html"><span className="icon-grid"></span> Buttons</a>
													</li>
													<li>
														<a href="elements-feature-columns.html"><span className="icon-text"></span> Feature Columns</a>
													</li>
													<li>
														<a href="elements-footers.html"><span className="icon-document-landscape"></span> Footers</a>
													</li>
													<li>
														<a href="elements-forms.html"><span className="icon-email"></span> Forms</a>
													</li>
												</ul>
											</li>
											<li>
												<ul>
													<li>
														<a href="elements-lightbox.html"><span className="icon-images"></span> Lightbox</a>
													</li>
													<li>
														<a href="elements-maps.html"><span className="icon-map"></span> Maps</a>
													</li>
													<li>
														<a href="elements-pricing-tables.html"><span className="icon-credit"></span> Pricing Tables</a>
													</li>
													<li>
														<a href="elements-progress-bars.html"><span className="icon-progress-one"></span> Progress Bars</a>
													</li>
													<li>
														<a href="elements-rollovers.html"><span className="icon-mouse-pointer"></span> Rollovers</a>
													</li>
												</ul>
											</li>
											<li>
												<ul>
													<li>
														<a href="elements-signup-forms.html"><span className="icon-newsletter"></span> Subscribe Forms</a>
													</li>
													<li>
														<a href="elements-slider.html"><span className="icon-browser"></span> Slider</a>
													</li>
													<li>
														<a href="elements-tabs.html"><span className="icon-unread"></span> Tabs</a>
													</li>
													<li>
														<a href="elements-testimonials.html"><span className="icon-quote"></span> Testimonials</a>
													</li>
													<li>
														<a href="elements-video.html"><span className="icon-video"></span> Video</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<div className="content clearfix">



				<section id="about" className="section-block hero-5 hero-5-3 window-height right bkg-white  ">
					<div className="media-column width-6"></div>
					<div className="row">
						<div className="column width-5">
							<div className="hero-content split-hero-content">
								<div className="hero-content-inner left horizon" data-animate-in="preset:slideInLeftShort;duration:1000ms;" data-threshold="0.5">
									<h2 className="mb-30">Inicia Sesión</h2>
									<form>
										
										<div className="column width-12">
											<div className="field-wrapper">
											<input
												type="email"
												name="email"
												className="form-email form-element large"
												placeholder="Correo*"
												tabIndex="3"
												required
											/>
											</div>
										</div>
										<div className="column width-12">
											<div className="field-wrapper">
											<input
												type="password"
												name="password"
												className="form-password form-element large"
												placeholder="Constraseña*"
												tabIndex="3"
												required
											/>
											</div>
										</div>
										<div class="column width-12">
											<input
											type="submit"
											value="Enviar"
											className="button  medium bkg-blue border-hover-blue color-white color-hover-blue "
											/>
										</div>
									</form>
									
								</div>
							</div>
						</div>
					</div>
				</section>

				

			</div>
			<footer className="footer">
				<div className="footer-top">
					<div className="row flex">
						<div className="column width-5">
							<div className="widget">
								<h4 className="widget-title">Sartre Studio</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
							</div>
						</div>
						<div className="column width-3 offset-1">
							<div className="widget">
								<h4 className="widget-title">Links</h4>
								<ul>
									<li>
										<a href="#">About the Firm</a>
									</li>
									<li>
										<a href="#">Recent Work</a>
									</li>
									<li>
										<a href="#">Firm Affiliations</a>
									</li>
									<li>
										<a href="#">Awards</a>
									</li>
									<li>
										<a href="#">Contact Us</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="column width-3">
							<div className="widget">
								<h4 className="widget-title">Come Visit Us</h4>
								<address>
									126-130 Crosby Street, Soho<br/>
									New York City, NY 10012, U.S.
								</address>
								<p className="no-margin-bottom">
									<a href="mailto:#">info@sartrestudio.com</a>
								</p>
								<ul className="social-list list-horizontal no-margin-bottom">
									<li><a className="no-margin-right" href="#">Twitter</a> |</li>
									<li><a href="#">Facebook</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="row">
						<div className="column width-12">
							<p className="copyright pull-left">
								&copy; ThemeMountain. All Rights Reserved.
							</p>
						</div>
					</div>
				</div>
			</footer>

		</div>
	</div>
	</main>
      
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
	</>
    
  );
}


