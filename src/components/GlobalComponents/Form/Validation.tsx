import {ChangeEvent} from "react";
import styles from "./form.module.scss";

export function validNaming(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value.length)
    if (event.target.value.length > 2){
        event.preventDefault()
        event.target.classList.add(`${styles.activeGood}`)
        event.target.classList.remove(`${styles.activeBad}`)
        console.log("Goof")
    }else{
        event.preventDefault()
        console.log("boot")
        event.target.classList.add(`${styles.activeBad}`)
        event.target.classList.remove(`${styles.activeGood}`)
    }
}
export function validEmail(event: ChangeEvent<HTMLInputElement>){
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    validEmail = pattern.test(String(event.target.value).toLowerCase());
    if (validEmail === true){
        event.preventDefault()
        event.target.classList.add(`${styles.activeGood}`)
        event.target.classList.remove(`${styles.activeBad}`)
        console.log("Goof")
    }else{
        event.preventDefault()
        console.log("boot")
        event.target.classList.add(`${styles.activeBad}`)
        event.target.classList.remove(`${styles.activeGood}`)
    }
}
export function validPhone(value:string,data:{},event: ChangeEvent<HTMLInputElement>){
    let pattern = /^\+?3?8?(0\d{9})$/;
    console.log("Bul test",pattern.test(value))
    console.log("value",value)
    if (pattern.test(value)){
        event.target.classList.add(`${styles.activeGood}`)
        event.target.classList.remove(`${styles.activeBad}`)
        console.log("Goof")
    }else{
        console.log("boot")
        event.target.classList.add(`${styles.activeBad}`)
        event.target.classList.remove(`${styles.activeGood}`)
    }
}