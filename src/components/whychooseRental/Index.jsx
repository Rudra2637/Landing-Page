"use client";

import styles from "./Index.module.css";

const introPoints = [
  {
    title:
      "Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi services since 2014.",
    description:
      "Our primary goal is to offer our clients an exceptional car rental and cab booking experience, and we take great pride in our commitment to safety, reliability, and experienced drivers. These qualities are evident across all our car rental services, making us the preferred choice for those seeking rental cars and taxi services in India.",
  },
  {
    title: "Service You Can Trust",
    description:
      "At Yatri Car Rental, we are dedicated to providing dependable services in India. We guarantee that we won't cancel any bookings without advance notification, and our rental cars are meticulously maintained to ensure a seamless and stress-free journey for our clients.",
  },
  {
    title: "Safety Is Our Priority",
    description:
      "Safety and comfort are paramount at Yatri Car Rental in India. We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations. Our drivers are committed to delivering excellent customer service and ensuring a comfortable and stress-free travel experience for passengers.",
  },
  {
    title: "Expert Chauffeurs At Your Service",
    description:
      "Yatri Car Rental takes pride in selecting only the most skilled, knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our clients.",
  },
  {
    title: "Extensive Industry Experience",
    description:
      "With over 10 years of industry expertise, Yatri Car Rental is your go-to choice for premium car hire services.",
  },
  {
    title: "Proven Track Record",
    description:
      "We place a strong emphasis on transparency in our billing system and consistently strive to provide a seamless and satisfactory experience for our customers. Our commitment to customer comfort and satisfaction is evident in our outstanding Google ratings, where we consistently receive ratings of 4.8 stars or higher.",
  },
];

const testimonials = [
  {
    rating: "*****",
    text: "I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved. The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional.",
    name: "Vikram Kulkarni",
    location: "Kanpur, Uttar Pradesh",
  },
  {
    rating: "*****",
    text: "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, everything was transparent and real-time. It gave me complete peace of mind.",
    name: "Rajesh Kumawat",
    location: "Kanpur, Uttar Pradesh",
  },
  {
    rating: "*****",
    text: "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route.",
    name: "Anjali Mishra",
    location: "Gorakhpur, Uttar Pradesh",
  },
  {
    rating: "*****",
    text: "As a frequent business traveler, finding a reliable one-way cab service that doesn't charge for a return journey is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler.",
    name: "Siddharth Vaidya",
    location: "Noida, Delhi",
  },
];

export default function WhyChooseRental() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.ribbon}>
          <span>WHY CHOOSE YATRI CAR RENTAL?</span>
        </div>

        <div className={styles.copyCard}>
          <ul>
            {introPoints.map((point) => (
              <li key={point.title}>
                <strong>{point.title}</strong>
                <span> - {point.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.testimonialsSection}>
        <div className={styles.testimonialsInner}>
          <h2>Customer Testimonials</h2>

          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <article key={item.name} className={styles.testimonialCard}>
                <p className={styles.rating}>{item.rating}</p>
                <p className={styles.quote}>{item.text}</p>
                <p className={styles.author}>{item.name}</p>
                <p className={styles.location}>{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
