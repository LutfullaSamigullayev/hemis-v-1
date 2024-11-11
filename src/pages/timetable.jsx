export function Timetable() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const hours = [
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
  ];

  return (
    <div className="schedule-container">
      <h2>Daily Schedule Timetable</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            {daysOfWeek.map((day, index) => (
              <th key={index} className={day === "Sunday" ? "highlight" : ""}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, index) => (
            <tr key={index}>
              <td className="time-column">{hour}</td>
              {daysOfWeek.map((day, dayIndex) => (
                <td key={dayIndex} className="schedule-cell"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
