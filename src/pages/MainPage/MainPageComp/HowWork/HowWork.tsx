import styles from "./HowWork.module.scss"

export function HowWork() {
    const Item = (props: any) => (

        <div className={styles.contentItem}>
            <div className={styles.contentNum}>
                <span className="font-30">{props.itemNum}</span>
            </div>
            <div className={styles.contentInfo}>
                <div className={styles.contentTitle}>{props.itemContentTitle}</div>
                <div className={styles.contentDescription}>{props.itemContentDescription}</div>
            </div>
        </div>
    )

    const ItemWrap = (props: { items: any[]; })  => {
        return <div className={styles.content}>
            {props.items.map((data) => (
                <Item itemNum={data.itemNum} itemContentTitle={data.itemContentTitle}
                      itemContentDescription={data.itemContentDescription}/>
            ))}
            <div className={styles.arrow}></div>
        </div>;
    }
    const itemsData = [
        {itemNum: "1", itemContentTitle: "Знайомство з HR, заявка від Замовника", itemContentDescription: "опис діяльності компанії, цілі на майбутнє:\n\n" +
                "опис корпоративної культури, команди " +
                "конкурентні переваги для кандидатів " +
                "вимоги щодо досвіду, hard і soft skills " +
                "умови роботи під час і після випробувального терміну"},
        {itemNum: "2", itemContentTitle: "Аналіз ринку", itemContentDescription: "аналізуємо відповідних претендентів у межах ЗП\n" +
                "  аналізуємо пропозиції конкурентів, щоб оцінити потенціал вакансії для закриття в терміни\n" +
                "  за результатом складаємо звіт з рекомендаціями"},
        {itemNum: "3", itemContentTitle: "Розміщення вакансії", itemContentDescription: "складання тексту вакансії, що продає\n" +
                "  формулювання ціннісної пропозиції компанії для залучення цільових кандидатів\n" +
                "  узгодження тексту з клієнтом\n" +
                "  внесення коригувань\n" +
                "  розміщення на обраному джерелі"},
        {itemNum: "4", itemContentTitle: "Скринінг резюме", itemContentDescription: "відбір отриманих відгуків за загальними вимогами: ЗП, досвід роботи, вік, стать тощо.\n" +
                "  підбір резюме релевантних претендентів із внутрішньої бази"},
        {itemNum: "5", itemContentTitle: "Телефонне інтерв'ю", itemContentDescription: "оцінка загальної адекватності кандидата\n" +
                "  підтвердження досвіду\n" +
                "  уточнення специфічних вимог і готовності до наступного етапу"},
        {itemNum: "6", itemContentTitle: "Тестове завдання", itemContentDescription: "проводиться за наявності його у замовника і необхідності оцінювання професійних знань (Hard skills)"},
        {itemNum: "7", itemContentTitle: "Направлення резюме Замовнику", itemContentDescription: "узгодження із Замовником потенційних кандидатів для призначення інтерв'ю\n" +
                "  отримання зворотного зв'язку від Замовника"},
        {itemNum: "8", itemContentTitle: "Відправка резюме Замовнику", itemContentDescription: "формат інтерв'ю обирає Замовник\n" +
                "  узгодження дати та часу співбесіди з обома сторонами\n" +
                "  призначення інтерв'ю з кандидатом\n" +
                "  підтвердження інтерв'ю не менше ніж за 1 день"},
        {itemNum: "9", itemContentTitle: " Організація інтерв'ю із Замовником", itemContentDescription: "перевірка обраного Клієнтом кандидата\n" +
                "  кадровий супровід оформлення співробітника\n" +
                "  супровід адаптації\n" +
                "  надання гарантії на підібраного співробітника\n" +
                "  надання звіту: конкурентний аналіз ринку, ємність ринку за потенційними претендентами, воронка підбору за весь період підбору, рекомендації щодо кадрового резерву"},
        {itemNum: "10", itemContentTitle: "Підведення результатів", itemContentDescription: "Якщо кандидат, якого ви найняли через Head Hunters League, пропрацював у вас менше ніж місяць і звільнився/був звільнений, ми скасуємо плату за найм цього кандидата"},
    ]
    return (
        <section className={styles.howWork}>
            <div className={styles.container}>
                <h2 className="font-40">Етапи підбіру персонала що ми надаємо або як ми працюємо
                </h2>
                <ItemWrap items={itemsData}/>
            </div>
        </section>
    )
}