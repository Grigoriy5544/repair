import React from 'react';
import styles from "./Hero.module.scss"
import {settings} from "../../settings.js";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div>
                <h1 className={styles.mainText}>Ремонт бытовой техники на дому c годовой гарантией</h1>
                <button>
                    <a href={"tel:+" + settings.info.tel}>Позвонить</a>
                </button>
            </div>
        </div>
    );
};

export default Hero;