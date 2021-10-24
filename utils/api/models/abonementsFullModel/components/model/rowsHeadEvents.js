import { getDaysOfMonth } from '@/helpers/luxon';

export class RowsHeadEvents {
  constructor(month, year) {
    this._month = month;
    this._year = year;

    this._rowsHead = this._createHeadsEventsModel(this._month, this._year);
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
    return this._rowsHead;
  }
}
