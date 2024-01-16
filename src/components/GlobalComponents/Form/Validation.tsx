import {ChangeEvent} from "react";
import styles from "./form.module.scss";

// @ts-ignore
const setValidClass = (event) => {
    event.target.classList.add(`${styles.activeBad}`)
    event.target.classList.remove(`${styles.activeGood}`)
    console.log(event.target.value.length)
}
const setInvalidClass = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    event.target.classList.add(`${styles.activeBad}`)
    event.target.classList.remove(`${styles.activeGood}`)
}

export function validNaming(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > 2) {
        setValidClass(event)
        return;
    }
    setInvalidClass(event)
}

export function validEmail(event: ChangeEvent<HTMLInputElement>) {
    // eslint-disable-next-line
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        validEmail = pattern.test(String(event.target.value).toLowerCase());
    if (validEmail) {
        setValidClass(event)
        return;
    }
    setInvalidClass(event)
}

export function validPhone(value: string, data: {}, event: ChangeEvent<HTMLInputElement>) {
    let pattern = /^\+?3?8?(0\d{9})$/;
    if (pattern.test(value)) {
        setValidClass(event)
        return;
    }
    setInvalidClass(event)
    return;
}

export function validSelect(event: ChangeEvent<HTMLSelectElement>) {
    if (event.target.value) {
        setValidClass(event)
        return;
    }
    setInvalidClass(event)
}
