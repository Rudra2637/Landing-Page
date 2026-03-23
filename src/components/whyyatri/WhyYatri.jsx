import Image from "next/image";
import styles from "./WhyYatri.module.css";

const features = [
  {
    title: "FAST RESPONSE TIME",
    description:
      "Experience the best car rental service with driver for local or outstation trips. Enjoy prompt response times and seamless car hire service, ensuring you get on the road quickly.",
    image: "/bolt.png",
    alt: "Fast response time",
  },
  {
    title: "VAST FLEET",
    description:
      "We offer a wide range of rental cars including sedans, SUVs, MUVs, premium sedans, and tempo travellers to meet all your car hire needs.",
    image: "/people.png",
    alt: "Vast fleet",
  },
  {
    title: "EASY TO ORDER",
    description:
      "Easily book a cab online through our user-friendly website, mobile application, or by calling our customer support team.",
    image: "/easyToOrder.png",
    alt: "Easy to order",
  },
  {
    title: "GREAT TARIFFS",
    description:
      "Rent a car at the lowest rates. Our car hire tariffs are highly competitive compared to other operators. Book online cabs at the best prices with Yatri car rental.",
    image: "/paid.png",
    alt: "Great tariffs",
  },
];

const fareRows = [
  {
    type: "AC Sedans",
    model: "Etios, Amaze, Dzire etc.",
    passengers: "4 Pax",
    ideal: "Comfortable trips with small families",
    fare: "Rs.11/KM",
  },
  {
    type: "AC Hatchbacks",
    model: "Wagon R, Celerio, Micra etc.",
    passengers: "4 Pax",
    ideal: "Budget trips over short distances",
    fare: "Rs.11/KM",
  },
  {
    type: "AC SUV",
    model: "Ertiga, Xylo etc.",
    passengers: "6-7 Pax",
    ideal: "Premium trips with large families",
    fare: "Rs.13/KM",
  },
];

export default function WhyYatri() {
  return (
    <section className={styles.section}>
      <div className={styles.topPanel}>
        <div className={styles.carVisual}>
          <Image
            src="/car.png"
            alt="Yatri cab"
            width={520}
            height={310}
            className={styles.carImage}
          />
        </div>

        <div className={styles.content}>
          <h2>
            WHY <span>YATRI</span> ?
          </h2>

          <div className={styles.featureList}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={44}
                    height={44}
                  />
                </div>
                <div className={styles.featureText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>CAR TYPE</div>
          <div>MODEL INCLUDES</div>
          <div>PASSENGERS</div>
          <div>IDEAL FOR</div>
          <div>FARE</div>
        </div>

        <div className={styles.tableBody}>
          {fareRows.map((row) => (
            <div key={row.type} className={styles.tableRow}>
              <div data-label="CAR TYPE">{row.type}</div>
              <div data-label="MODEL INCLUDES">{row.model}</div>
              <div data-label="PASSENGERS">{row.passengers}</div>
              <div data-label="IDEAL FOR">{row.ideal}</div>
              <div data-label="FARE">{row.fare}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomPanel}>
        <div className={styles.bottomText}>
          <h2>
            WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <span>ONE-WAY</span> JOURNEY?
          </h2>
          <p>
            Our oneway car rental service is cheaper than AC bus and 2-tier AC
            train ticket fares. It reduces your travel time, and you travel in
            your own private space, allowing you to fully enjoy your journey.
            Our one way taxi will come to your doorstep and take you to your
            desired destination. Book your cheapest one way cab from Lucknow to
            Gorakhpur or Varanasi to Ayodhya with our reliable oneway car rental
            service with driver. Experience the convenience of our taxi service,
            where you can rent a car effortlessly and enjoy seamless cab
            booking. Choose our car hire option for a hassle-free and
            comfortable travel experience.
          </p>
        </div>

        <div className={styles.bottomVisual}>
          <Image
            src="/carLocation.gif"
            alt="Cab location illustration"
            width={430}
            height={290}
            className={styles.locationImage}
          />
        </div>
      </div>
    </section>
  );
}
