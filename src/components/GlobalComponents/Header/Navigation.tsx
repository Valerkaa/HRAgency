import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../../img/logo.png";
import styles from "./Header.module.scss"
import "./Header.scss"

export function Navigation() {
    const [activeLink, setActiveLink] = useState<string>('');

    const handleClick = (to: string) => {
        setActiveLink(to);
    };
    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerRow}>
                    <div className={styles.headerRowLogo}>
                        <Link to="/" onClick={() => handleClick('')}><img src={logo} alt=""/></Link>
                    </div>
                    <div className={styles.headerRowRight}>
                        <div className={styles.headerRowCenterWrapper}>
                            <div className={styles.headerRowCenter}>
                                <div className={styles.wrap2}>
                                    <Link className={`headerNavLink ${activeLink === '/' && "active"}`}to="/"
                                          onClick={() => handleClick('/')}>Головна</Link>
                                    <Link className={`headerNavLink ${activeLink === '/employer' ? "active" : ''}`}
                                          to="/employer" onClick={() => handleClick('/employer')}>Для роботодавця</Link>
                                    <Link className={`headerNavLink ${activeLink === '/worker' ? "active" : ''}`}
                                          to="/worker" onClick={() => handleClick('/worker')}>Для шукача</Link>
                                    <Link className={`headerNavLink ${activeLink === '/contact' ? "active" : ''}`}
                                          to="/contact" onClick={() => handleClick('/contact')}>Контакти</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}