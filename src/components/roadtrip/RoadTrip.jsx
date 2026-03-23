import Image from "next/image";
import styles from "./RoadTrip.module.css";

const introPoints = [
  "Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We're passionate about making car hire accessible and enjoyable for everyone.",
  "Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our luxury car rental services.",
  "We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service.",
  "No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.",
  "Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at 7860663399 for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.",
  "Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip.",
];

const cards = [
  {
    title: "For Any Budget",
    description:
      "Choose from hatchbacks, sedans, mini SUVs, prime SUVs, and mini buses like tempo travellers 12-seater to 25-seater to find a ride within your budget and at your convenience with our car rental and cab service options.",
    image: "/image1.png",
    alt: "Budget travel cab",
  },
  {
    title: "For Any Distance",
    description:
      "Book daily rides with multiple stops within the city or travel to your favourite destinations across the country with our oneway or round trip outstation cab service. Enjoy seamless cab booking for all your travel needs.",
    image: "/image2.png",
    alt: "Distance travel cab",
  },
  {
    title: "For Any Duration",
    description:
      "Plan a day out with our hourly-based packages for local city tours or book our car rental services with a driver for long or multiple-day trips. Our taxi service ensures reliable transportation tailored to your car hire needs.",
    image: "/image3.png",
    alt: "Duration based travel cab",
  },
];

export default function RoadTrip() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.ribbon}>
          <span>
            EXPLORING INDIA&apos;S AMAZING LANDSCAPES, FROM THE MOUNTAINS TO THE
            BEACHES, ONE MEMORABLE ROAD TRIP AT A TIME
          </span>
        </div>

        <div className={styles.copyCard}>
          <ul>
            {introPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={card.image}
                alt={card.alt}
                width={120}
                height={120}
                className={styles.cardImage}
              />
            </div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
