import React from "react";
import styles from "./Hero.module.scss"
import whale from "../../../../img/whale.png"
export function Hero() {
    return(
        <section className={styles.banner}>
            <div className={styles.container}>
                <h1 className={`${styles.title} font-45`}>
                    Ласкаво просимо на головну сторінку Head Hunters League!
                </h1>
                <h3 className={`${styles.text} font-18`}>
                    Ми - команда фахівців, зосереджених на створенні сильних команд для успішних підприємств. У Head Hunters League
                    ми не просто знаходимо кандидатів, ми будуємо мости між талантами та компаніями, створюючи стійкі та надихаючі
                    команди. Наша місія - ваш успіх, і ми готові бути вашими надійними партнерами в управлінні персоналом. Познайомтеся
                    з нашими послугами, дізнайтеся, як ми можемо допомогти вам досягти нових висот у бізнесі!
                </h3>
            </div>
            <img src={whale} className={styles.whale} alt=""/>
        </section>
    )
}