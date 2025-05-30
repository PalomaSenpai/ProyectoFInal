
import Head from "next/head";
import Script from 'next/script';
import Link from 'next/link';
import '@/styles/css_sattre/core.min.css';
import '@/styles/css_sattre/skin.css';
import Footer from "@/components/user.footer";
import TopNavBar from "@/components/navbar.user.top";
import Navbar from "@/components/navbar.user";

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
        		<div className="section-block grid-container fade-in-progressively full-width no-margins no-padding" data-layout-mode="masonry" data-grid-ratio="0" data-animate-filter-duration="700" data-set-dimensions data-animate-resize data-animate-resize-duration="0.8">
					<div className="row">
						<div className="column width-12">
							<div className="row grid content-grid-4">
								<Cards/>
							</div>
						</div>
					</div>
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


function Cards(){
  return(
    <>
		
		
    </>
  )
}