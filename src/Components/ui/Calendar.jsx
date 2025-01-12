import React, { useState } from "react";

const Calendar = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Get the current month and year
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Get the first day of the month and the number of days in the month
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const totalDaysInMonth = lastDay.getDate();

  // Generate an array for the days in the month
  const daysInMonth = [];
  for (let i = 1; i <= totalDaysInMonth; i++) {
    daysInMonth.push(i);
  }

  // Function to change the month
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(month + direction);
    setCurrentDate(newDate);
  };

  // Handle date selection
  const handleDateSelect = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  return (
    <div className={`calendar ${className} rounded-lg border bg-white shadow-md`}>
      <div className="calendar-header flex items-center justify-between p-4 bg-gray-100 rounded-t-lg">
        <button
          onClick={() => changeMonth(-1)}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          &lt;
        </button>
        <div className="month-year text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </div>
        <button
          onClick={() => changeMonth(1)}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          &gt;
        </button>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-2 p-4">
        {/* Weekdays Header */}
        <div className="text-center font-semibold text-gray-600">Sun</div>
        <div className="text-center font-semibold text-gray-600">Mon</div>
        <div className="text-center font-semibold text-gray-600">Tue</div>
        <div className="text-center font-semibold text-gray-600">Wed</div>
        <div className="text-center font-semibold text-gray-600">Thu</div>
        <div className="text-center font-semibold text-gray-600">Fri</div>
        <div className="text-center font-semibold text-gray-600">Sat</div>

        {/* Days of the Month */}
        {Array.from({ length: firstDay.getDay() }).map((_, index) => (
          <div key={`empty-${index}`} className="text-center"></div>
        ))}
        {daysInMonth.map((day) => (
          <button
            key={day}
            className={`w-10 h-10 text-center rounded-full flex items-center justify-center transition-all duration-300 ${
              selectedDate?.getDate() === day
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => handleDateSelect(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Calendar };
