import React from 'react';
import styles from './Header.module.scss'
import {settings} from "../../settings.js";

const Header = () => {
    return (
        <header className={styles.header + " noselect"}>
            <div>
                <img src="/repair.svg" alt=""/>
                <span>{settings.info.name}</span>
            </div>
            <ul>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
            <button>
                <a href={"tel:+" + settings.info.tel}>Позвонить</a>
            </button>
        </header>
    );
};

export default Header;