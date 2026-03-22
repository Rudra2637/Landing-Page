"use client";

import { useDispatch, useSelector } from "react-redux";
import { setPickup } from "@/redux/bookingSlice";

export default function Home() {
  const dispatch = useDispatch();
  const pickup = useSelector((state) => state.booking.pickup);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Test</h1>

      <input
        type="text"
        placeholder="Enter pickup"
        value={pickup}
        onChange={(e) => dispatch(setPickup(e.target.value))}
      />

      <p>Pickup: {pickup}</p>
    </div>
  );
}