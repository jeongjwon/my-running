import React, { useState } from "react";
import { format, subMonths, addMonths } from "date-fns";
import { startOfMonth, startOfWeek, endOfMonth, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Summary from "../Summary/Summary";
import {
  CalendarHeader,
  CalendarDays,
  CalendarBody,
  CalendarContainer,
} from "./Calendar.styled";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <CalendarHeader>
      <button onClick={prevMonth}>
        <FaChevronLeft />
      </button>

      <div className="title col col-center">
        <span className="text">
          {format(currentMonth, "yyyy")}
          <span className="text month">{format(currentMonth, "M")}월</span>
        </span>
      </div>
      <button onClick={nextMonth}>
        {/* <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth}/> */}
        <FaChevronRight />
      </button>
    </CalendarHeader>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col" key={i}>
        {date[i]}
      </div>
    );
  }
  return <CalendarDays>{days}</CalendarDays>;
};

const RenderCells = ({ records, currentMonth, selectedDate, onDateClick }) => {
  const recordDay = records.map((record) =>
    Number(record.date.split("-")[1]).toString() === format(currentMonth, "M")
      ? Number(record.date.split("-")[2])
      : 0
  );

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : //   : isSameDay(day, selectedDate)
              recordDay.includes(Number(formattedDate))
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
          //   onClick={() => onDateClick(parse(cloneDay))}
        >
          <span
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
            }
          >
            {formattedDate}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <CalendarBody>{rows}</CalendarBody>;
};

const Calendar = ({ records }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const monthlyRecord = records.filter((record) =>
   Number(record.date.split("-")[1]).toString() === format(currentMonth, "M")
  ? Number(record.date.split("-")[2])
  : 0 );

  return (
    <CalendarContainer>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <Summary monthlyRecord={monthlyRecord} />

      <RenderDays />
      <RenderCells
        records={records}
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </CalendarContainer>
  );
};
export default Calendar;
