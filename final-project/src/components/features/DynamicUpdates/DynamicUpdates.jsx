import React from 'react';
import './DynamicUpdates.css';

// 节日日期列表
const holidayDates = [
  { date: '2024-11-28', name: 'Thanksgiving Day' },
  { date: '2024-11-29', name: 'Black Friday' },
  { date: '2024-12-24', name: 'Christmas Eve' },
  { date: '2024-12-25', name: 'Christmas Day' },
  { date: '2025-01-01', name: 'New Year\'s Day' },
];

const DynamicUpdates = () => {
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];

  const isHoliday = holidayDates.find(holiday => holiday.date === formattedToday);

  return (
    <div className="dynamic-updates">
      <h2>Dynamic Updates</h2>
      {isHoliday ? (
        <div className="update-item alert">
          <p>🎉 It's {isHoliday.name}! Holiday prices are 50% higher today.</p>
        </div>
      ) : (
        <div className="update-item info">
          <p>No special holiday pricing today. Regular rates apply.</p>
        </div>
      )}
      <div className="update-item warning">
        <p>📅 Holiday booking slots are filling up fast. Reserve now!</p>
      </div>
    </div>
  );
};

export default DynamicUpdates;
