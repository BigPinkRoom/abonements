import { getDaysOfMonth } from '@/helpers/luxon';
import { DateTime } from 'luxon';

export class RowsBodyEvents {
  constructor(rawRows, eventsMonth, eventsYear) {
    this._rawRows = rawRows;
    this._month = eventsMonth;
    this._year = eventsYear;

    this._rowsBodyEvents = this._createBodyEventsModel({
      rawRows: this._rawRows,
      month: this._month,
      year: this._year,
    });
  }

  _createBodyEventsModel({ rawRows, month, year }) {
    const days = getDaysOfMonth({ month, year });

    const rows = rawRows.map((row) => {
      const eventsDays = {};

      row.events.forEach((event) => {
        const eventDay = DateTime.fromISO(event.date).day;

        if (!eventsDays[eventDay]) {
          eventsDays[eventDay] = [];
        }

        eventsDays[eventDay].push(event.value);
      });

      return {
        columns: days.map((day) => {
          const dayValue = eventsDays[day] ? eventsDays[day].join(',') : '';

          return {
            text: dayValue,
          };
        }),
      };
    });

    console.log('rows body events', rows);

    return rows;
  }

  getModel() {
    return this._rowsBodyEvents;
  }
}
