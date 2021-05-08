import React from "react";
import { ButtonSubscrible } from "../ButtonSubscrible";

import styles from './styles.module.scss'

export function Content() {
    return(
        <div className={styles.container}>
            <img src="/images/home.png"/>
            <section className={styles.form}>
                <h1 className={styles.title}>Subscrible in Astronaut</h1>
                <strong className={styles.price}>for $9,90 month</strong>
                <ButtonSubscrible />    
            </section>
        </div>
    );
}