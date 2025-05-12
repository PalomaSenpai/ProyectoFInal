'use client';
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('widgets'); // Widgets activo por defecto como en la imagen
  const [collapsedMenus, setCollapsedMenus] = useState({
    dashboard: false,
    base: false,
    sidebarLayouts: false,
    forms: false,
    tables: false,
    maps: false,
    charts: false,
    submenu: false,
    subnav1: false,
    subnav2: false,
  });

  const toggleMenu = (menu) => {
    setCollapsedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className={styles.sidebar} data-background-color="dark">
      <div className={styles['logo-header']}>
        <Link href="/" className={styles.logo}>
          <img
            src="/assets/img/kaiadmin/logo_light.svg"
            alt="navbar brand"
            className={styles['navbar-brand']}
            height="20"
          />
          <span>kaiadmin</span>
        </Link>
        <div className={styles['nav-toggle']}>
          <button className={styles['btn-toggle']}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <div className={`${styles['sidebar-wrapper']} ${styles.scrollbar} ${styles['scrollbar-inner']}`}>
        <div className={styles['sidebar-content']}>
          <ul className={`${styles.nav} ${styles['nav-secondary']}`}>
            {/* Dashboard */}
            <li className={`${styles['nav-item']} ${activeMenu === 'dashboard' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('dashboard')} aria-expanded={collapsedMenus.dashboard}>
                <i className="fas fa-tachometer-alt"></i> {/* Ícono ajustado */}
                <p>Dashboard</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.dashboard ? styles.show : ''}`}>
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('dashboard')}>
                      <span className={styles['sub-item']}>Dashboard 1</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Components Section */}
            <li className={styles['nav-section']}>
              <span className={styles['sidebar-mini-icon']}>
                <i className="fas fa-ellipsis-h"></i>
              </span>
              <h4 className={styles['text-section']}>Components</h4>
            </li>

            {/* Base */}
            <li className={`${styles['nav-item']} ${activeMenu === 'base' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('base')}>
                <i className="fas fa-cubes"></i> {/* Ícono ajustado */}
                <p>Base</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.base ? styles.show : ''}`}>
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Avatars</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Buttons</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Grid System</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Panels</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Notifications</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Sweet Alert</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Font Awesome Icons</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Simple Line Icons</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('base')}>
                      <span className={styles['sub-item']}>Typography</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Sidebar Layouts */}
            <li className={`${styles['nav-item']} ${activeMenu === 'sidebarLayouts' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('sidebarLayouts')}>
                <i className="fas fa-th-large"></i> {/* Ícono ajustado */}
                <p>Sidebar Layouts</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.sidebarLayouts ? styles.show : ''}`}>
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('sidebarLayouts')}>
                      <span className={styles['sub-item']}>Sidebar Style 2</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('sidebarLayouts')}>
                      <span className={styles['sub-item']}>Icon Menu</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Forms */}
            <li className={`${styles['nav-item']} ${activeMenu === 'forms' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('forms')}>
                <i className="fas fa-edit"></i> {/* Ícono ajustado */}
                <p>Forms</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.forms ? styles.show : ''}`}>
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('forms')}>
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
              <div className={`${styles.collapse} ${collapsedMenus.tables ? styles.show : ''}`}>
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('tables')}>
                      <span className={styles['sub-item']}>Basic Table</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('tables')}>
                      <span className={styles['sub-item']}>Datatables</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Maps */}
            <li className={`${styles['nav-item']} ${activeMenu === 'maps' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('maps')}>
                <i className="fas fa-map"></i> {/* Ícono ajustado */}
                <p>Maps</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.maps ? styles.show : ''}`}>
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('maps')}>
                      <span className={styles['sub-item']}>Google Maps</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('maps')}>
                      <span className={styles['sub-item']}>Jsvectormap</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Charts */}
            <li className={`${styles['nav-item']} ${activeMenu === 'charts' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('charts')}>
                <i className="fas fa-chart-pie"></i> {/* Ícono ajustado */}
                <p>Charts</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.charts ? styles.show : ''}`}>
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('charts')}>
                      <span className={styles['sub-item']}>Chart Js</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setActiveMenu('charts')}>
                      <span className={styles['sub-item']}>Sparkline</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Widgets */}
            <li className={`${styles['nav-item']} ${activeMenu === 'widgets' ? styles.active : ''}`}>
              <Link href="#" onClick={() => setActiveMenu('widgets')}>
                <i className="fas fa-th"></i> {/* Ícono ajustado */}
                <p>Widgets</p>
                <span className={`${styles.badge} ${styles['badge-success']}`}>4</span>
              </Link>
            </li>

            {/* Documentation */}
            <li className={`${styles['nav-item']} ${activeMenu === 'documentation' ? styles.active : ''}`}>
              <Link href="#" onClick={() => setActiveMenu('documentation')}>
                <i className="fas fa-book"></i> {/* Ícono ajustado */}
                <p>Documentation</p>
                <span className={`${styles.badge} ${styles['badge-secondary']}`}>1</span>
              </Link>
            </li>

            {/* Menu Levels */}
            <li className={`${styles['nav-item']} ${activeMenu === 'submenu' ? styles.active : ''}`}>
              <a onClick={() => toggleMenu('submenu')}>
                <i className="fas fa-stream"></i> {/* Ícono ajustado */}
                <p>Menu Levels</p>
                <span className={styles.caret}></span>
              </a>
              <div className={`${styles.collapse} ${collapsedMenus.submenu ? styles.show : ''}`}>
                <ul className={`${styles.nav} ${styles['nav-collapse']}`}>
                  <li>
                    <a onClick={() => toggleMenu('subnav1')}>
                      <span className={styles['sub-item']}>Level 1</span>
                      <span className={styles.caret}></span>
                    </a>
                    <div className={`${styles.collapse} ${collapsedMenus.subnav1 ? styles.show : ''}`}>
                      <ul className={`${styles.nav} ${styles['nav-collapse']} ${styles.subnav}`}>
                        <li>
                          <a href="#" onClick={() => setActiveMenu('submenu')}>
                            <span className={styles['sub-item']}>Level 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => setActiveMenu('submenu')}>
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
                    <div className={`${styles.collapse} ${collapsedMenus.subnav2 ? styles.show : ''}`}>
                      <ul className={`${styles.nav} ${styles['nav-collapse']} ${styles.subnav}`}>
                        <li>
                          <a href="#" onClick={() => setActiveMenu('submenu')}>
                            <span className={styles['sub-item']}>Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" onClick={() => setActiveMenu('submenu')}>
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