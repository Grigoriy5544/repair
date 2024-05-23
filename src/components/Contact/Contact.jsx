import React, {useEffect, useState} from 'react';
import styles from "./Contact.module.scss"
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import {settings} from "../../settings.js";
import InputMask from 'react-input-mask';

async function sendTgMessage(phoneNumber) {
    try {
        const text = `Новая заявка! Номер телефона: ${phoneNumber}`

        const api = "https://api.telegram.org/bot"
            + import.meta.env.VITE_TG_TOKEN
            + "/sendMessage?chat_id="
            + import.meta.env.VITE_TG_USER_ID
            + "&text=";

        await fetch((api + text), {
            method: "POST",
        });
    } catch (e) {
        console.error("Error: ", e)
    }
    return true
}

const validPhone = num => {
    return num.replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1($2)$3-$4-$5')
}

const Contact = () => {
    const [mapWidth, setMapWidth] = useState(700)
    const [value, onChange] = useState("")

    useEffect(() => {
        if (window.innerWidth > 1400 && mapWidth !== 700) {
            setMapWidth(700)
        }
        if (window.innerWidth <= 1400) {
            setMapWidth("100%")
        }
    }, [mapWidth])


    return (
        <section id="contact" className={styles.Contact}>
            <YMaps query={{lang: 'ru_RU'}}>
                <Map
                    height={500}
                    width={mapWidth}
                    defaultState={{
                        center: [56.822631, 60.61783],
                        zoom: 16,
                    }}
                >
                    <Placemark geometry={[56.822631, 60.61783]}/>
                </Map>
            </YMaps>
            <div>
                <h3>Контактная информация</h3>
                <p>Портнов Антон Алексеевич</p>
                <p>ИНН 165 048 512 487</p>
                <a href={"tel:+" + settings.info.tel}>{validPhone(settings.info.tel)}</a>
                <p className={styles.adress}>ул. Белинского 86, Екатеринбург</p>
                <p className={styles.applicationText}>Оставить заявку</p>
                <div className={styles.application}>
                    <InputMask
                        mask="+7 (999)-999-99-99"
                        placeholder="+7 (___)-___-__-__"
                        value={value}
                        onChange={e => onChange(e.target.value)}
                    />
                    <button disabled={value.includes("_") || !value} onClick={() => sendTgMessage(value)}>Заказать звонок</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;