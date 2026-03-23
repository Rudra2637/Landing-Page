import { NextResponse } from "next/server";

const fallbackCities = [
  "Prayagraj",
  "Pune",
  "Patna",
  "Panipat",
  "Puri",
  "Panchkula",
  "Palanpur",
  "Porbandar",
  "Pimpri-Chinchwad",
  "Phagwara",
  "Puducherry",
  "Pithoragarh",
  "Pali",
  "Panna",
  "Parbhani",
  "Palakkad",
  "Purnia",
  "Pithampur",
  "Port Blair",
  "Patan",
  "Lucknow",
  "Ayodhya",
  "Gorakhpur",
  "Varanasi",
  "Kanpur",
  "Delhi",
  "Noida",
  "Ghaziabad",
  "Agra",
  "Jaipur",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Ahmedabad",
  "Surat",
  "Bhopal",
  "Indore",
  "Nagpur",
  "Nashik",
  "Amritsar",
  "Chandigarh",
  "Dehradun",
  "Haridwar",
  "Mathura",
  "Meerut",
  "Bareilly",
  "Jhansi",
  "Raebareli",
  "Sultanpur",
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  if (!query) {
    return NextResponse.json({ cities: [] });
  }

  if (query.length < 2) {
    const matches = fallbackCities
      .filter((city) => city.toLowerCase().startsWith(query))
      .slice(0, 8);

    return NextResponse.json({ cities: matches, source: "fallback" });
  }

  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        query
      )}&count=8&language=en&countryCode=IN&format=json`,
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`Open-Meteo request failed: ${response.status}`);
    }

    const data = await response.json();
    const matches = (data.results || []).map((item) => {
      const parts = [item.name, item.admin1, item.country].filter(Boolean);
      return parts.join(", ");
    });

    return NextResponse.json({ cities: matches, source: "open-meteo" });
  } catch {
    const matches = fallbackCities
      .filter((city) => city.toLowerCase().includes(query))
      .slice(0, 8);

    return NextResponse.json({ cities: matches, source: "fallback" });
  }
}
