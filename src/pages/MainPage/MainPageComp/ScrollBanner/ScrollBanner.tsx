import styles from "./ScrollBanner.module.scss"



export function ScrollBanner() {
    return(
        <section className={styles.scrollWrapper}>
            <div className={styles.scrollBanner}>
               <span className='font-40'> &nbsp;&sdot;&nbsp;Head Hunters знають, що ви шукаєте &nbsp;&sdot;&nbsp;Ми допоможемо знайти найкращіх!&nbsp;&sdot;&nbsp;Head Hunters знають, що ви шукаєте &nbsp;&sdot;&nbsp;Ми допоможемо знайти найкращіх!</span>
            </div>
        </section>
    )
}