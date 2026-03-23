import styles from "./Hero.module.css";
import BookingForm from "../bookingform/BookingForm";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      
      {/* LEFT TEXT */}
      <div className={styles.left}>
        <h1>
          <span className={styles.topLine}>
            INDIA&apos;S <span className={styles.highlight}>LEADING</span>
          </span>
          <span className={`${styles.breakLine} ${styles.highlight}`}>
            ONE WAY INTERCITY
          </span>
        
        </h1>
        <p>CAB SERVICE PROVIDER</p>
      </div>

      {/* RIGHT FORM */}
      <div className={styles.right}>
        <BookingForm />
      </div>

      {/* BOTTOM STRIP */}
      <div className={styles.bottomStrip}>
        <div>
          <h3>Transparent Billing</h3>
          <p>GPS Based Billing | No Km Tampering</p>
        </div>

        <div>
          <h3>Download Now!</h3>
          <Image src="/appstore.png" alt="appstore" width={120} height={40} />
          <Image src="/playstore.png" alt="playstore" width={120} height={40} />
        </div>

        <div>
          <h3>No return fare</h3>
          <p>Oneway Cab Fare | No Hidden Charges</p>
        </div>
      </div>

    </section>
  );
}