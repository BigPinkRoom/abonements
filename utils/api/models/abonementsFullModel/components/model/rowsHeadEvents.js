import { getDaysOfMonth } from '@/helpers/luxon';

export class RowsHeadEvents {
  constructor(eventsMonth, eventsYear) {
    this._year = eventsYear;
    this._month = eventsMonth;

    this._rowsHeadEvents = this._createHeadsEventsModel(this._month, this._year);
  }

  _createHeadsEventsModel(month, year) {
    const days = getDaysOfMonth({ year, month });

    const rows = [
      {
        columns: days.map((dayValue) => {
          return {
            text: dayValue,
          };
        }),
      },
    ];

    return rows;
  }

  getModel() {
    return this._rowsHeadEvents;
  }
}
