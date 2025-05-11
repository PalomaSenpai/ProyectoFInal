
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [collapsedMenus, setCollapsedMenus] = useState({
    dashboard: false,
    base: false,
    sidebarLayouts: false,
    forms: false,
    tables: false,
    maps: false,
    charts: false,
    submenu: false
  });

  const toggleMenu = (menu) => {
    setCollapsedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className={`${styles.sidebar} ${styles['data-background-color']}`}>
      <div className={styles['sidebar-logo']}>
        <div className={`${styles['logo-header']} ${styles['data-background-color']}`}>
          <Link href="/" className={styles.logo}>
            <img
              src="/assets/img/kaiadmin/logo_light.svg"
              alt="navbar brand"
              className={styles['navbar-brand']}
              height="20"
            />
          </Link>
          <div className={styles['nav-toggle']}>
            <button className={`${styles.btn} ${styles['btn-toggle']} ${styles['toggle-sidebar']}`}>
              <i className="gg-menu-right"></i>
            </button>
            <button className={`${styles.btn} ${styles['btn-toggle']} ${styles['sidenav-toggler']}`}>
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className={`${styles.topbarToggler} ${styles.more}`}>
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>

      <div className={`${styles['sidebar-wrapper']} ${styles.scrollbar} ${styles['scrollbar-inner']}`}>
        <div className={styles['sidebar-content']}>
          <ul className={`${styles.nav} ${styles['nav-secondary']}`}>
            {/* Dashboard */}
            <li className={`${styles['nav-item']} ${activeMenu === 'dashboard' ? styles.active : ''}`}>
              <a
                onClick={() => toggleMenu('dashboard')}
                className={collapsedMenus.dashboard ? '' : styles.collapsed}
                aria-expanded={!collapsedMenus.dashboard}
              >
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.dashboard ? styles.show : ''}`} id="dashboard">
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="/dashboard">
                      <span className={styles['sub-item']}>Dashboard 1</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Components Section */}
            <li className={styles['nav-section']}>
              <span className={styles['sidebar-mini-icon']}>
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className={styles['text-section']}>Components</h4>
            </li>

            {/* Base */}
            <li className={`${styles['nav-item']} ${activeMenu === 'base' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('base')}>
                <i className="fas fa-layer-group"></i>
                <p>Base</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.base ? styles.show : ''}`} id="base">
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="/components/avatars">
                      <span className={styles['sub-item']}>Avatars</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/buttons">
                      <span className={styles['sub-item']}>Buttons</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/gridsystem">
                      <span className={styles['sub-item']}>Grid System</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/panels">
                      <span className={styles['sub-item']}>Panels</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/notifications">
                      <span className={styles['sub-item']}>Notifications</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/sweetalert">
                      <span className={styles['sub-item']}>Sweet Alert</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/font-awesome-icons">
                      <span className={styles['sub-item']}>Font Awesome Icons</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/simple-line-icons">
                      <span className={styles['sub-item']}>Simple Line Icons</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/typography">
                      <span className={styles['sub-item']}>Typography</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Sidebar Layouts */}
            <li className={`${styles['nav-item']} ${activeMenu === 'sidebarLayouts' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('sidebarLayouts')}>
                <i className="fas fa-th-list"></i>
                <p>Sidebar Layouts</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.sidebarLayouts ? styles.show : ''}`} id="sidebarLayouts">
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="/sidebar-style-2">
                      <span className={styles['sub-item']}>Sidebar Style 2</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/icon-menu">
                      <span className={styles['sub-item']}>Icon Menu</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Forms */}
            <li className={`${styles['nav-item']} ${activeMenu === 'forms' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('forms')}>
                <i className="fas fa-pen-square"></i>
                <p>Forms</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.forms ? styles.show : ''}`} id="forms">
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="/forms/forms">
                      <span className={styles['sub-item']}>Basic Form</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Tables */}
            <li className={`${styles['nav-item']} ${activeMenu === 'tables' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('tables')}>
                <i className="fas fa-table"></i>
                <p>Tables</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.tables ? styles.show : ''}`} id="tables">
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="/tables/tables">
                      <span className={styles['sub-item']}>Basic Table</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tables/datatables">
                      <span className={styles['sub-item']}>Datatables</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Maps */}
            <li className={`${styles['nav-item']} ${activeMenu === 'maps' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('maps')}>
                <i className="fas fa-map-marker-alt"></i>
                <p>Maps</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.maps ? styles.show : ''}`} id="maps">
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="/maps/googlemaps">
                      <span className={styles['sub-item']}>Google Maps</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/maps/jsvectormap">
                      <span className={styles['sub-item']}>Jsvectormap</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Charts */}
            <li className={`${styles['nav-item']} ${activeMenu === 'charts' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('charts')}>
                <i className="far fa-chart-bar"></i>
                <p>Charts</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.charts ? styles.show : ''}`} id="charts">
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="/charts/charts">
                      <span className={styles['sub-item']}>Chart Js</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/charts/sparkline">
                      <span className={styles['sub-item']}>Sparkline</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Widgets */}
            <li className={styles['nav-item']}>
              <Link href="/widgets">
                <i className="fas fa-desktop"></i>
                <p>Widgets</p>
                <span className={`${styles.badge} ${styles['badge-success']}`}>4</span>
              </Link>
            </li>

            {/* Documentation */}
            <li className={styles['nav-item']}>
              <Link href="/documentation">
                <i className="fas fa-file"></i>
                <p>Documentation</p>
                <span className={`${styles.badge} ${styles['badge-secondary']}`}>1</span>
              </Link>
            </li>

            {/* Menu Levels */}
            <li className={`${styles['nav-item']} ${activeMenu === 'submenu' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('submenu')}>
                <i className="fas fa-bars"></i>
                <p>Menu Levels</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.submenu ? styles.show : ''}`} id="submenu">
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <a onClick={() => toggleMenu('subnav1')}>
                      <span className={styles['sub-item']}>Level 1</span>
                      <span className={styles.caret}></span>
                    </a>
                    <div className={`${styles.collapse} ${collapsedMenus.subnav1 ? styles.show : ''}`} id="subnav1">
                      <ul className={`${styles.nav} ${styles['nav-collapse']} ${styles.subnav}`}>
                        <li>
                          <a href="#">
                            <span className={styles['sub-item']}>Level 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className={styles['sub-item']}>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a onClick={() => toggleMenu('subnav2')}>
                      <span className={styles['sub-item']}>Level 1</span>
                      <span className={styles.caret}></span>
                    </a>
                    <div className={`${styles.collapse} ${collapsedMenus.subnav2 ? styles.show : ''}`} id="subnav2">
                      <ul className={`${styles.nav} ${styles['nav-collapse']} ${styles.subnav}`}>
                        <li>
                          <a href="#">
                            <span className={styles['sub-item']}>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <span className={styles['sub-item']}>Level 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;