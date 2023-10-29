import React from 'react';
import DatePicker from 'react-datepicker';
import styles from '../../styles/DateRangePicker.module.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateRangePicker({ startDate, endDate, handleStartDateChange, handleEndDateChange }) {
  return (
    <div className={styles.dateContainer}>
      <label>Ordena por fechas:</label>
      <DatePicker selected={startDate} onChange={handleStartDateChange} selectsStart startDate={startDate} endDate={endDate} />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
}
