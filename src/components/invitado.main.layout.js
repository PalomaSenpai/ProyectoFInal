
import '@/styles/css_sattre/core.min.css';
import '@/styles/css_sattre/skin-travel-agency.css';
import '@/styles/css_sattre/skin-design-agency.css';
import '@/styles/custom.css';
import Head from "next/head";
import Script from 'next/script';
import TopNavBar from "@/components/navbar.user.top";
import Navbar from "@/components/navbar.user";
import Footer from "@/components/user.footer";

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700%7COpen+Sans:300,400,600,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
    <main className="shop home-page">
        <TopNavBar/>
        <div className="wrapper reveal-side-navigation">
		<div className="wrapper-inner">
            <header className="header header-absolute header-fixed-on-mobile header-transparent" data-helper-in-threshold="200" data-helper-out-threshold="500" data-sticky-threshold="200" data-bkg-threshold="100" data-compact-threshold="100">

				<div className="header-inner">
					<div className="row nav-bar">
						<div className="column width-12 nav-bar-inner">
							<div className="logo">
								<div className="logo-inner">
									<a href="index.html"><img src="images/travel-agency/logo-dark.png" alt="Sartre Logo" /></a>
									<a href="index.html"><img src="images/travel-agency/logo.png" alt="Sartre Logo" /></a>
								</div>
							</div>
							<nav className="navigation nav-block secondary-navigation nav-right">
								<ul>
									<li className="aux-navigation hide">
										<a href="#" className="navigation-show side-nav-show nav-icon">
											<span className="icon-menu"></span>
										</a>
									</li>
								</ul>
							</nav>
							<nav className="navigation nav-block primary-navigation sub-menu-indicator nav-right no-margin-right">
								<Navbar/>
							</nav>
						</div>
					</div>
				</div>
			</header>
            <div className="content clearfix">

                </div>
                {children}
                </div>
        </div>

        <Footer/>
    </main>

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
    </>
  );
}