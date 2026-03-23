"use client";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Highlights from "@/components/highlights/Highlights";
import WhyYatri from "@/components/whyyatri/WhyYatri";
import WhyOneWay from "@/components/whyoneway/WhyOneWay";
import RoadTrip from "@/components/roadtrip/RoadTrip";
import WhyChooseRental from "@/components/whychooseRental/Index";
import FinalCta from "@/components/finalcta/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <WhyYatri />
      <WhyOneWay />
      <RoadTrip />
      <WhyChooseRental />
      <FinalCta />
    </>
  );
}
