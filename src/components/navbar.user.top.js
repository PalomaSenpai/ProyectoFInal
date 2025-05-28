

export default function TopNavBar (){
    return (
        <>
        <aside className="side-navigation-wrapper enter-right" data-no-scrollbar data-animation="push-in">
            <div className="side-navigation-scroll-pane">
                <div className="side-navigation-inner">
                    <div className="side-navigation-header">
                        <div className="navigation-hide side-nav-hide">
                            <a href="#">
                                <span className="icon-cancel medium"></span>
                            </a>
                        </div>
                    </div>
                    <nav className="side-navigation">
                        <ul>
                            <li className="current">
                                <a href="" >Home</a>
                            </li>
                            <li className="">
                                <a href="#" >Vuelos</a>
                            </li>
                            <li className="">
                                <a href="#" >Preguntas frecuentes</a>
                            </li>
                            <li className="">
                                <a href="#" >Contactanos</a>
                            </li>
                            <li className="">
                                <a href="#" >Registrarse</a>
                            </li>
                            <li className="">
                                <a href="#" >Inicia Sesion</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="side-navigation-footer">
                        <ul className="social-list list-horizontal">
                            <li><a href="#"><span className="icon-twitter small"></span></a></li>
                            <li><a href="#"><span className="icon-facebook small"></span></a></li>
                            <li><a href="#"><span className="icon-instagram small"></span></a></li>
                        </ul>
                        <p className="copyright no-margin-bottom">&copy; 2014 THEMEMOUNTAIN.</p>
                    </div>
                </div>
            </div>
        </aside>
        </>
    )
}