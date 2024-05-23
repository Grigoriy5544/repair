import React from 'react';
import styles from "./Services.module.scss"

const Services = () => {
    return (
        <section id="services" className={styles.Services + " noselect"}>
            <h1>Услуги</h1>

            <div>
                <div>
                    <img src="/IMG_8842.png" alt=""/>
                    <h3>Стиральные машины</h3>
                    <p>Осуществляем базовый и сложный ремонт стиральных машин</p>
                </div>
                <div>
                    <img src="/IMG_8838.png" alt=""/>
                    <h3>Кондиционеры</h3>
                    <p>Ремонтируем неисправные кондиционеры. Не холодит?</p>
                </div>
                <div>
                    <img src="/IMG_8841.png" alt=""/>
                    <h3>Посудомоечные машины</h3>
                    <p>Ремонтируем, восстанавливаем, меняем, чистим, настраиваем и устраняем практически все неисправности.</p>
                </div>
                <div>
                    <img src="/IMG_8843.png" alt=""/>
                    <h3>Кофемашины</h3>
                    <p>Осуществляем качественный ремонт кофемашин любых производителей.</p>
                </div>
                <div>
                    <img src="/IMG_8844.png" alt=""/>
                    <h3>Варочные панели</h3>
                    <p>Оказываем полный комплекс профессиональных услуг по ремонту варочных панелей и духовых шкафов</p>
                </div>
                <div>
                    <img src="/IMG_8845.png" alt=""/>
                    <h3>Водонагреватели</h3>
                    <p>Ремонт водонагревателей любых производителей c предварительной диагностикой и последующим восстановлением.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;