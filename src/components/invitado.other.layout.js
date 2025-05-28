

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

				
				{children}


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