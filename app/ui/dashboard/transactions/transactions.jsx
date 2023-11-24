import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headers}>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noavatar.png"}
                                    height={40}
                                    width={40}
                                    alt="UserImage"
                                    className={styles.userImage}
                                />
                                <span>Jhon Doe</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>14-08-2023</td>
                        <td>$5200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noavatar.png"}
                                    height={40}
                                    width={40}
                                    alt="UserImage"
                                    className={styles.userImage}
                                />
                                <span>Jhon Doe</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Done
                            </span>
                        </td>
                        <td>14-08-2023</td>
                        <td>$5200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noavatar.png"}
                                    height={40}
                                    width={40}
                                    alt="UserImage"
                                    className={styles.userImage}
                                />
                                <span>Jhon Doe</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>14-08-2023</td>
                        <td>$5200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={"/noavatar.png"}
                                    height={40}
                                    width={40}
                                    alt="UserImage"
                                    className={styles.userImage}
                                />
                                <span>Jhon Doe</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>14-08-2023</td>
                        <td>$5200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
