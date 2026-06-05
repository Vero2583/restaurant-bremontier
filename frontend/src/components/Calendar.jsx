import { useState, useEffect } from "react";
import { Calendar } from "@demark-pro/react-booking-calendar";
import horairesmidi from "../data/horairesmidi";
import horairessoir from "../data/horairessoir";

import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";

export default function BookingCalendar() {
  const [selected, setSelected] = useState([null, null]);
  const [startHour, setStartHour] = useState(null);

  function handleCalendarChange(e) {
    console.log(e);
    setSelected(e);
  }

  function handleHourChange(e) {
    console.log(e);
    setStartHour(e.target.value);
  }

  useEffect(() => {
    console.log(selected, startHour);
  }, [selected, startHour]);

  return (
    <>
      <div className="calendrier">
        <Calendar
          selected={selected}
          reserved={[
            {
              startDate: new Date(2030, 4, 12, 14, 0),
              endDate: new Date(2030, 4, 14, 10, 0),
            },
          ]}
          onChange={handleCalendarChange}
        />

        <section>
          <h2>Nos horaires de restauration :</h2>

          <div className="booking-calendar-list-wrapper">
            <ul className="booking-calendar-hours">
              {horairesmidi.map(({ start, end }) => (
                <div key={start}>
                  <input
                    type="radio"
                    name="startHour"
                    value={start}
                    id={start}
                    onChange={handleHourChange}
                  />
                  <label htmlFor={start}>
                    {start} - {end}
                  </label>
                </div>
              ))}
            </ul>
            <ul>
              {horairessoir.map(({ start, end }) => (
                <div key={start}>
                  <input
                    type="radio"
                    name="startHour"
                    value={start}
                    id={start}
                    onChange={handleHourChange}
                  />
                  <label htmlFor={start}>
                    {start} - {end}
                  </label>
                </div>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
