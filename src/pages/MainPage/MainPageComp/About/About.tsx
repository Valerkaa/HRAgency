import React from "react";
import styles from "./About.module.scss"
import {Cards} from "./Cards";

export function About() {
    return(
        <section className={styles.container}>
            <div className={styles.whatsItAll}>
                <div className={styles.content}>
                    <h2 className={`${styles.title} font-40`}>
                        Чому саме ми?
                    </h2>
                    <br/>
                    <h3 className={`${styles.subtitle} font-30`}>За що наші клієнти нас поважають?</h3>
                    <Cards/>
                </div>
            </div>
        </section>
    )
}