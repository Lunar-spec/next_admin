import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Arctic Cicada
            </div>
            <div className={styles.text}>
                All rights reserved.
            </div>
            <div className={styles.copyright}>
                ©Arctic Cicada 2023
            </div>
        </div>
    )
}

export default Footer