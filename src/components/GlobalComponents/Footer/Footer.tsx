import styles from "./Footer.module.scss"
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
    const [activeLink, setActiveLink] = useState<string>('');

    const activeLinkF = (to: string) => {
        setActiveLink(to);
    };
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.docs}>
                        <Link className={`headerNavLink ${activeLink === '/' && "active"}`}to="/"
                              onClick={() => activeLinkF('/')}>Головна</Link>
                        <Link className={`headerNavLink ${activeLink === '/employer' && "active"}`}
                              to="/employer" onClick={() => activeLinkF('/employer')}>Для роботодавця</Link>
                        <Link className={`headerNavLink ${activeLink === '/worker' && "active"}`}
                              to="/worker" onClick={() => activeLinkF('/worker')}>Для шукача</Link>
                        {/*<Link className={`headerNavLink ${activeLink === '/contact' && "active"}`}*/}
                        {/*      to="/contact" onClick={() => activeLinkF('/contact')}>Контакти</Link>*/}
                    </div>
                    <div className={styles.about}>
                        <p>Ви можете зв'язатися з нами в будь-який час, наша команда завжди на зв'язку!</p>
                        <div className="">
                            <a href="tel:+380 66 392 86 44">+380 66 392 86 44</a>
                            <a href="mailto:info@head-hunters-league.com">info@head-hunters-league.com</a>
                            <ul className={styles.social}>
                                <a href=""><li><FontAwesomeIcon icon={faInstagram} /></li></a>
                                <a href=""><li><FontAwesomeIcon icon={faLinkedinIn}/></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}