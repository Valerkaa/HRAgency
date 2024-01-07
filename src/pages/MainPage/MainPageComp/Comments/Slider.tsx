import React, {useMemo, useState} from "react";
// @ts-ignore
import {Slide} from "./Slide"
import styles from "./slider.module.scss"
import {dmutro, ekaterina, irina, oleg, roman} from "../../../../img";


const slides = [{
    image: oleg,
    name: "Бойко O.",
    quote: "Ми вдячні за професійну допомогу у вирішенні рекрутингових питань, а саме: пошук і заохочення висококваліфікованих кандидатів, ретельний відбір кандидатів відповідно до вимог нашої компанії. ",

},
    {
        image: irina,
        name: "Степаненко І.",
        quote: "Поставлене завдання виконали в раніше обумовлені терміни, результат дуже якісний і за розумну ціну. Співпрацювати з такою командою було дуже приємно",

    },
    {
        image: dmutro,
        name: "Коваленко Д.",
        quote: "Дуже відповідальний і професійний підхід з першого етапу їхньої роботи. Відразу видно, що команда працює на результат!",

    },
    {
        image: ekaterina,
        name: "Мельник К.",
        quote: "Рекрутери які працюють в компанії Head Hunters League мають гарні знання в області IT",

    },
    {
        image: roman,
        name: "Коваль Р.",
        quote: "Ми звернулися до конпанії Head Hunters League і дуже задоволені результатами цієї команди.",

    },

];


export function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [prevSlideIndex, setPrevSlideIndex] = useState(null);
    const activeSlide = useMemo(() => slides[slideIndex], [slideIndex]);
// @ts-ignore
    const prevSlide = useMemo(() => slides[prevSlideIndex], [prevSlideIndex]);

    function nextSlide() {
        // @ts-ignore
        setPrevSlideIndex(slideIndex);
        setSlideIndex((slideIndex + 1) % slides.length);
    }

    // @ts-ignore
    return (
        <section className={styles.comment}>
            <div className={styles.title}>
                <h1 className={`${styles.titleFlex} font-40`}>Відгуки клієнтів нашої компанії</h1>
            </div>
            <div className={styles.container}>
            <div className={styles.sliderWrap}>
                    <svg
                        viewBox="0 0 100 100"
                        className={styles.dashes}
                        fill="none"
                        stroke="var(--color-purple)"
                        strokeDasharray="2 4 4 3 2 3 8 2 3 5">
                        <circle r="45" cx="50" cy="50"/>
                    </svg>
                    <Slide slide={activeSlide} key={slideIndex} previous={undefined}/>
                    {prevSlide && (
                        <Slide slide={prevSlide} key={prevSlideIndex + "prev"} previous/>
                    )}
                    <button
                        className={`${styles.button} ${styles.Next}`}
                        onClick={() => {
                            nextSlide();
                        }}
                    >
                        Наступний
                        <br/>
                        коментар
                    </button>
                </div>
            </div>
        </section>
    )
}