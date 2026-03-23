import Image from "next/image";
import styles from "./FinalCta.module.css";

const cities = [
  "Lucknow",
  "Ayodhya",
  "Gorakhpur",
  "Varanasi",
  "Allahabad (Prayagraj)",
  "Kanpur",
];

const footerLinks = [
  "Home",
  "About",
  "Services",
  "Career",
  "Contact",
  "Privacy Policy",
  "Terms & Condition",
];

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.promoPanel}>
        <div className={styles.appPromo}>
          <div className={styles.phoneStack}>
            <Image
              src="/Phone.png"
              alt="Yatri Cabs mobile app"
              width={180}
              height={240}
              className={styles.phoneBack}
            />
            <Image
              src="/Phone.png"
              alt="Yatri Cabs mobile app screen"
              width={180}
              height={240}
              className={styles.phoneFront}
            />
          </div>

          <div className={styles.appCopy}>
            <h2>
              GET YOUR <span>YATRI CABS</span> APP NOW!
            </h2>
            <p>
              USE CODE <strong>WELCOMEYATRI</strong> AND GET <strong>FLAT 05%</strong> OFF ON YOUR FIRST INTERCITY RIDE
            </p>
            <h3>Download Now!</h3>

            <div className={styles.storeRow}>
              <Image
                src="/playstore.png"
                alt="Get it on Google Play"
                width={128}
                height={38}
              />
              <Image
                src="/appstore.png"
                alt="Download on the App Store"
                width={128}
                height={38}
              />
            </div>
          </div>
        </div>

        <div className={styles.partnerPromo}>
          <h2>
            BECOME A <span>DRIVER</span> PARTNER
          </h2>
          <p>
            Join <strong>Yatri Car Rental</strong> And Attach Your Car To Our
            Platform. Earn More By Serving Our Passengers And Benefit From Our
            Extensive Customer Base.
          </p>
          <button className={styles.downloadButton}>DOWNLOAD THE APP</button>
        </div>
      </div>

      <div className={styles.cityStrip}>
        <span className={styles.cityLabel}>Operational Cities :</span>
        <div className={styles.cityList}>
          {cities.map((city) => (
            <span key={city} className={styles.cityItem}>
              {city}
            </span>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerLogoWrap}>
          <Image src="/logo.png" alt="Yatri Cabs" width={92} height={32} />
        </div>

        <div className={styles.footerLinks}>
          {footerLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>

        <p className={styles.copyright}>
          All Copyrights are reserved by YATRI CABS
        </p>
      </footer>
    </section>
  );
}
