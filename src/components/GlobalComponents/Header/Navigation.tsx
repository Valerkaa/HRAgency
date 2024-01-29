import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../../img/logo.png";
import styles from "./Header.module.scss"
import "./Header.scss"

export function Navigation() {
    const [activeLink, setActiveLink] = useState<string>('');
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const activeLinkF = (to: string) => {
        setActiveLink(to);
        setIsBurgerActive(false)
    };
    const activeBurger = () => {
        setIsBurgerActive(!isBurgerActive);
    };
    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerRow}>
                    <div className={styles.headerRowLogo}>
                        <Link to="/" onClick={() => activeLinkF('')}><img src={logo} alt=""/></Link>
                    </div>
                    <div className={styles.headerRowRight}>
                        <div className={`${styles.headerRowCenterWrapper} ${isBurgerActive && styles.active}`}>
                            <div className={styles.headerRowCenter}>
                                <div className={styles.wrap2}>
                                    <Link className={`headerNavLink ${activeLink === '/' && "active"}`}to="/"
                                          onClick={() => activeLinkF('/')}>Головна</Link>
                                    <Link className={`headerNavLink ${activeLink === '/employer' && "active"}`}
                                          to="/employer" onClick={() => activeLinkF('/employer')}>Для роботодавця</Link>
                                    <Link className={`headerNavLink ${activeLink === '/worker' && "active"}`}
                                          to="/worker" onClick={() => activeLinkF('/worker')}>Для шукача</Link>
                                    {/*<Link className={`headerNavLink ${activeLink === '/contact' && "active"}`}*/}
                                    {/*      to="/contact" onClick={() => activeLinkF('/contact')}>Контакти</Link>*/}
                                </div>
                            </div>
                        </div>
                        <div onClick={activeBurger} className={`${styles.headerRowRightBurger} ${isBurgerActive && styles.active}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}