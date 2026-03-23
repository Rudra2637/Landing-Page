"use client";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveField,
  setDate,
  setDestination,
  setIsLoadingSuggestions,
  setPickup,
  setReturnDate,
  setSelectedTab,
  setSuggestions,
  setTime,
  setTrip,
  setTripType,
} from "@/redux/bookingSlice";
import styles from "./Booking.module.css";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.inlineIcon}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="1.5" />
      <path d="M7 3.5v4M17 3.5v4M3.5 9.5h17" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.inlineIcon}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.5 2" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.inlineIcon}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function MinusCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.inlineIcon}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 12h8" />
    </svg>
  );
}

export default function BookingForm() {
  const dispatch = useDispatch();
  const {
    selectedTab,
    tripType,
    pickup,
    destination,
    trip,
    date,
    returnDate,
    time,
    suggestions,
    activeField,
    isLoadingSuggestions,
  } = useSelector((state) => state.booking);

  const tabs = ["Outstation", "Local", "Airport"];
  const requestTimeoutRef = useRef(null);

  const formFields = {
    Outstation: [
      {
        label: "FROM",
        placeholder: "Input Text",
        autocomplete: true,
        value: pickup,
        action: setPickup,
      },
      {
        label: "TO",
        placeholder: "Input Text",
        className: styles.toField,
        autocomplete: true,
        value: destination,
        action: setDestination,
      },
      {
        label: "Pickup Date",
        placeholder: "",
        type: "date",
        className: styles.dateField,
        value: date,
        action: setDate,
      },
      {
        label: "Return Date",
        placeholder: "",
        type: "date",
        className: styles.dateField,
        value: returnDate,
        action: setReturnDate,
      },
      {
        label: "Pickup Time",
        placeholder: "",
        type: "time",
        className: styles.timeField,
        value: time,
        action: setTime,
      },
    ],
    Local: [
      {
        label: "FROM",
        placeholder: "Input Text",
        autocomplete: true,
        value: pickup,
        action: setPickup,
      },
      {
        label: "TO",
        placeholder: "Input Text",
        autocomplete: true,
        value: destination,
        action: setDestination,
      },
      {
        label: "Pickup Date",
        placeholder: "",
        type: "date",
        className: styles.dateField,
        value: date,
        action: setDate,
      },
      {
        label: "Pickup Time",
        placeholder: "",
        type: "time",
        className: styles.timeField,
        value: time,
        action: setTime,
      },
    ],
    Airport: [
      {
        label: "FROM",
        placeholder: "Input Text",
        autocomplete: true,
        value: pickup,
        action: setPickup,
      },
      {
        label: "TRIP",
        placeholder: "Input Text",
        autocomplete: true,
        value: trip,
        action: setTrip,
      },
      {
        label: "PICKUP DATE",
        placeholder: "",
        type: "date",
        className: styles.dateField,
        value: date,
        action: setDate,
      },
      {
        label: "PICKUP TIME",
        placeholder: "",
        type: "time",
        className: styles.timeField,
        value: time,
        action: setTime,
      },
    ],
  };

  const currentFields = formFields[selectedTab];
  const getFieldKey = (label) => `${selectedTab}-${label}`;

  useEffect(() => {
    return () => {
      if (requestTimeoutRef.current) {
        clearTimeout(requestTimeoutRef.current);
      }
    };
  }, []);

  const handleFieldChange = (field, value) => {
    const fieldKey = getFieldKey(field.label);
    dispatch(field.action(value));

    if (!field.autocomplete) {
      return;
    }

    dispatch(setActiveField(fieldKey));

    if (requestTimeoutRef.current) {
      clearTimeout(requestTimeoutRef.current);
    }

    if (!value.trim()) {
      dispatch(setSuggestions([]));
      dispatch(setIsLoadingSuggestions(false));
      return;
    }

    requestTimeoutRef.current = setTimeout(async () => {
      try {
        dispatch(setIsLoadingSuggestions(true));
        const response = await fetch(
          `/api/cities?q=${encodeURIComponent(value.trim())}`
        );
        const data = await response.json();
        dispatch(setSuggestions(data.cities || []));
      } catch {
        dispatch(setSuggestions([]));
      } finally {
        dispatch(setIsLoadingSuggestions(false));
      }
    }, 180);
  };

  const handleSuggestionSelect = (field, city) => {
    dispatch(field.action(city));
    dispatch(setActiveField(""));
    dispatch(setSuggestions([]));
    dispatch(setIsLoadingSuggestions(false));
  };

  return (
    <div className={styles.form}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={selectedTab === tab ? styles.active : ""}
            onClick={() => dispatch(setSelectedTab(tab))}
          >
            {tab}
          </button>
        ))}
      </div>

      {selectedTab !== "Airport" && (
        <div className={styles.tripType}>
          <label className={tripType === "One Way" ? styles.activeRadio : ""}>
            <input
              type="radio"
              name="trip"
              checked={tripType === "One Way"}
              onChange={() => dispatch(setTripType("One Way"))}
            />
            <span>One Way</span>
          </label>

          <label
            className={tripType === "Round Trip" ? styles.activeRadio : ""}
          >
            <input
              type="radio"
              name="trip"
              checked={tripType === "Round Trip"}
              onChange={() => dispatch(setTripType("Round Trip"))}
            />
            <span>Round Trip</span>
          </label>
        </div>
      )}

      <div className={styles.grid}>
        {currentFields.map((field) => (
          <div
            key={field.label}
            className={`${styles.field} ${field.className || ""}`}
          >
            <label>{field.label}</label>
            <input
              type={field.type || "text"}
              placeholder={field.placeholder}
              value={field.value || ""}
              onChange={(event) =>
                handleFieldChange(field, event.target.value)
              }
              onFocus={() => {
                if (
                  field.autocomplete &&
                  field.value?.trim() &&
                  suggestions.length
                ) {
                  dispatch(setActiveField(getFieldKey(field.label)));
                }
              }}
              onBlur={() => {
                window.setTimeout(() => {
                  dispatch(setActiveField(""));
                  dispatch(setSuggestions([]));
                  dispatch(setIsLoadingSuggestions(false));
                }, 120);
              }}
            />

            {field.autocomplete &&
              activeField === getFieldKey(field.label) &&
              (suggestions.length > 0 || isLoadingSuggestions) && (
                <div className={styles.suggestionBox}>
                  {isLoadingSuggestions && (
                    <div className={styles.suggestionState}>Loading...</div>
                  )}

                  {!isLoadingSuggestions &&
                    suggestions.map((city) => (
                      <button
                        key={city}
                        type="button"
                        className={styles.suggestionItem}
                        onMouseDown={() => handleSuggestionSelect(field, city)}
                      >
                        {city}
                      </button>
                    ))}
                </div>
              )}

            {field.className === styles.dateField && (
              <span className={styles.iconWrap}>
                <CalendarIcon />
              </span>
            )}

            {field.className === styles.timeField && (
              <span className={`${styles.iconWrap} ${styles.leftIconWrap}`}>
                <ClockIcon />
              </span>
            )}

            {field.className === styles.toField && (
              <div className={styles.tripActions}>
                <span className={styles.actionIcon}>
                  <MinusCircleIcon />
                </span>
                <span className={styles.actionIcon}>
                  <PlusCircleIcon />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className={styles.searchBtn}>EXPLORE CABS</button>
    </div>
  );
}