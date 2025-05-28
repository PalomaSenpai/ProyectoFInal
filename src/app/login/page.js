import '@/styles/css_sattre/core.min.css';
import '@/styles/css_sattre/skin-design-agency.css';
import TopNavBar from "@/components/navbar.user.top";
import Navbar from "@/components/navbar.user";

import Footer from "@/components/user.footer";
import Link from 'next/link';
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
	<main >
	
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
										<div className="column width-12">
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
			<Footer/>

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


