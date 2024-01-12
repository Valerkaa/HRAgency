import {ChangeEvent} from "react";
import styles from "./form.module.scss";

export function validNaming(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > 2){
        event.preventDefault()
        event.target.classList.add(`${styles.activeGood}`)
        event.target.classList.remove(`${styles.activeBad}`)
        
    }else{
        event.preventDefault()
        
        event.target.classList.add(`${styles.activeBad}`)
        event.target.classList.remove(`${styles.activeGood}`)
    }
}
export function validEmail(event: ChangeEvent<HTMLInputElement>){
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    validEmail = pattern.test(String(event.target.value).toLowerCase());
    if (validEmail){
        event.preventDefault()
        event.target.classList.add(`${styles.activeGood}`)
        event.target.classList.remove(`${styles.activeBad}`)
        
    }else{
        event.preventDefault()
        
        event.target.classList.add(`${styles.activeBad}`)
        event.target.classList.remove(`${styles.activeGood}`)
    }
}
export function validPhone(value:string,data:{},event: ChangeEvent<HTMLInputElement>){
    let pattern = /^\+?3?8?(0\d{9})$/;
    if (pattern.test(value)){
        event.target.classList.add(`${styles.activeGood}`)
        event.target.classList.remove(`${styles.activeBad}`)
        
    }else{
        
        event.target.classList.add(`${styles.activeBad}`)
        event.target.classList.remove(`${styles.activeGood}`)
    }
}
export function validSelect(event: ChangeEvent<HTMLSelectElement>){
    if (event.target.value){
        event.target.classList.add(`${styles.activeGood}`)
        event.target.classList.remove(`${styles.activeBad}`)

    }else{

        event.target.classList.add(`${styles.activeBad}`)
        event.target.classList.remove(`${styles.activeGood}`)
    }
}