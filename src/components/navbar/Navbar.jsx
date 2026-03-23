import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Image
                    src="/logo.png"
                    alt="Yatri Cabs Logo"
                    width={120}
                    height={50}
                    // className={styles.logo}
                />
            </div>

            <div className={styles.center}>
                <Image
                    src="/navbarImage.png"
                    alt="24/7 Info"
                    width={180}
                    height={70}
                    className={styles.logo}
                />
            </div>
            
            <div className={styles.right}>
                <div className={styles.iconBox}>
                    <div className={styles.iconCircleDow}>
                        <Image
                            src="/download.png"
                            alt="24/7 Info"
                            width={15}
                            height={10}
                            className={styles.logo}
                        />
                    </div>
                    <p className={styles.text}>Download App</p>
                    </div>

                    <div className={styles.iconBox}>
                    <div className={styles.iconCircleUser}>
                        <Image
                            src="/profilecircle.png"
                            alt="24/7 Info"
                            width={22}
                            height={20}
                            className={styles.logo}
                        />
                    </div>
                    <p className={styles.text}>Hi, Ravi</p>
                </div>
            </div>
            
        </nav>
    )
}