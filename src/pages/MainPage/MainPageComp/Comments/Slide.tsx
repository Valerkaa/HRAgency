import slideStyles from "./slider.module.scss";

// @ts-ignore
export function Slide({slide, previous}) {

    return (
        <div
            className={slideStyles.slide}
            data-previous={previous || undefined}
        >
            <div className={slideStyles.slideName}>{slide.name}</div>
            <img alt="" className={slideStyles.slideImage} src={slide.image}/>
            {slide.quote && <div className={slideStyles.slideQuote}>{slide.quote}</div>}

        </div>
    );
}