import styles from "./form.module.scss"
import {FC, ReactElement} from "react";
interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
}
export default function Modal(props: ModalProps): ReturnType<FC> {
    return (
        <div className={`${styles.modal} ${props.open ? styles.displayblock : styles.displaynone}`}>
            <div className={styles.modalmain}>
                <div className={styles.modalbody}>
                    {props.children}
                </div>
                <div className={styles.btncontainer}>
                    <button type="button" className={styles.btn} onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}