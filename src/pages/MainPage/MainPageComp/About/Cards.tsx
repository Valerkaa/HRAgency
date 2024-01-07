import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
// @ts-ignore
import {st1, st2, st3, st4, st5, st6, st7, st8} from "../../../../img"
import styles from "./Card.module.scss"
export function Cards() {
    const Card = (props: { imgUrl: string | undefined; alt: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (

            <div className={styles.cardSoWrap}>
                <div className={styles.card}>
                    <div className={styles.sideFront}>
                        <img className={styles.cardImg} src={props.imgUrl}
                             alt={props.alt || 'Image'}/>
                    </div>
                    <div className={styles.sideBack}>
                        <p>{props.content}</p>
                    </div>

                </div>
                <h2 className={styles.cardTitle}>{props.title}</h2>
            </div>


        )
    ;
    const CardContainer = (props: { cards: any[]; }) => (
        <div className={styles.cardsWrap}>
            {
                props.cards.map((card) => (
                    <Card title={card.title}
                          content={card.content}
                          imgUrl={card.imgUrl} alt=''/>
                ))
            }

        </div>
    );
    const cardsData = [
        {id: 1, title: 'Підбір персоналу', content: 'HeadHunters - експерти в кадровому менеджменті.', imgUrl: st1},
        {id: 2, title: 'Кандидатський пул', content: 'Широкий вибір претендентів', imgUrl: st2},
        {id: 3, title: 'Контроль плинності', content: 'Компанія пропонує працівникам гарні умови та розвиток.', imgUrl: st3},
        {id: 4, title: 'Атмосфера в кромпанії', content: 'Робоче середовище з вісоким рівнем комфорта та задоволеності', imgUrl: st4},
        {id: 5, title: 'Експертиза та досвід', content: 'Можливість підвищити кваліфікацію', imgUrl: st5},
        {id: 6, title: 'Мотивація персоналу', content: 'Власна мотиваційна сітка для співробітників', imgUrl: st6},
        {id: 7, title: 'Карʼєрний зріст', content: 'Це інвистиція у ваші знання , досвід та забезпечення фінансової стабільності', imgUrl: st7},
        {id: 8, title: 'Стабільний заробіток', content: 'Робота, яка закриватиме всі ваші фінансові потреби', imgUrl: st8},
    ]
    return(
            <CardContainer cards={ cardsData }/>
    )
}