import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Twenty-Five Twenty-One</h2>
                    <h3 className={styles.hero__genre}>Drama, Comedy, Romance</h3>
                    <p className={styles.hero__description}>
                    "Twenty-Five, Twenty-One" tells a love story between Na Hee-Do (Kim Tae-Ri) and Back Yi-Jin (Nam Joo-Hyuk)..
                    </p>
                    <button className={styles.hero__button}>Watch Now</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src="https://picsum.photos/600/400" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;