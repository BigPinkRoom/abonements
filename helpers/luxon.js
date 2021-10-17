import { Interval, DateTime } from 'luxon';

export function getDaysOfMonth(date) {
  const days = [];
  const start = DateTime.local(date.year, date.month).startOf('month');
  const end = DateTime.local(date.year, date.month).endOf('month');

  const interval = Interval.fromDateTimes(start, end);

  let startDay = interval.start.startOf('day');

  while (startDay < interval.end) {
    days.push(startDay.day);

    startDay = startDay.plus({ days: 1 });
  }
  return days;
}
