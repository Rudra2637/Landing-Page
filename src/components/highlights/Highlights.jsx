import Image from "next/image";
import styles from "./Highlights.module.css";

const highlights = [
  {
    title: "RETURN FARE, NOT FAIR!",
    description:
      "Why pay for a return journey when you are travelling one way? Get discounted AC taxi at just half of the round trip cost for your one way travel.",
    image: "/hand.png",
    imageAlt: "Return fare benefit",
  },
  {
    title: "GPS BASED BILLING SYSTEM",
    description:
      "Since the GPS data captures the actual distance and time travelled, it reduces the chance of kilometer tampering or discrepancies in billing.",
    image: "/Location.png",
    imageAlt: "GPS billing",
  },
  {
    title: "NOW AVAILABLE ROUTES ARE:",
    description:
      "Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly",
    image: "/driving.png",
    imageAlt: "Available routes",
  },
];

export default function Highlights() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {highlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.iconWrap}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={76}
                height={76}
                className={styles.icon}
              />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.statement}>
        <h3>INDIA&apos;S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h3>
        <p>
          At Yatri Cabs, we pride ourselves on being a top-tier online oneway
          cab booking service, delivering reliable and premium intercity and
          local taxi services. With over a decade of experience, we have become
          the leading driver-driven one way car rental company in India,
          renowned for our extensive coverage across the country.
        </p>
      </div>
    </section>
  );
}
