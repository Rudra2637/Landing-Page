import Image from "next/image";
import styles from "./WhyOneWay.module.css";

const rentalPoints = [
  "Skilled Chauffeurs: Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India's roads for a seamless travel experience.",
  "Dedicated Oneway Cab Service: We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient.",
  "Well-Maintained Car Rental Fleet: Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride, whether you opt for a car hire, taxi service, or outstation car rental.",
  "Transparent Pricing for Car Hire: Our GPS-based billing system ensures fair pricing by eliminating any chances of kilometer tampering by the driver. With real-time distance measurement and live location tracking, you get transparency and peace of mind when using our car rental services.",
  "24/7 Customer Support for Car Rentals: Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience throughout your journey in India.",
];

const leftPoints = [
  "Instant booking & confirmation",
  "Confirmed booking immediately",
  "No return fare for one-way trip",
  "Clean & professional cab services",
  "Transparent billing with GPS based billing system",
];

const rightPoints = [
  "Pick-up from your house",
  "Dedicated cab just for you",
  "Drop to your desired destination",
  "Completed more than 20,000+ oneway trips",
  "Multiple payment option including credit card.",
];

export default function WhyOneWay() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.ribbon}>
          <span>CAR RENTAL IN INDIA - BOOK RELIABLE VEHICLES FOR ALL YOUR NEEDS</span>
        </div>

        <div className={styles.copyCard}>
          <p>
            Choosing a chauffeur-driven car rental over a self-drive car hire
            option in India offers several benefits with Yatri Car Rental:
          </p>

          <div className={styles.pointList}>
            {rentalPoints.map((point, index) => {
              const [title, ...rest] = point.split(": ");

              return (
                <p key={title}>
                  <strong>{index + 1}. {title}:</strong> {rest.join(": ")}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.choiceSection}>
        <h2>
          WHY CHOOSE ONE WAY CAB?
        </h2>

        <div className={styles.choiceGrid}>
          <div className={styles.infoCard}>
            <ul>
              {leftPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className={styles.illustrationCard}>
            <Image
              src="/carMoving.gif"
              alt="One way cab illustration"
              width={420}
              height={230}
              className={styles.illustration}
            />
          </div>

          <div className={styles.infoCard}>
            <ul>
              {rightPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.tagline}>
          Discover affordable travel with our seamless <span>intercity car rental</span> in India - where excellence meets affordability with standardized rates in every city. Unleash your journey!
        </p>
      </div>
    </section>
  );
}
