const { DateTime } = require('luxon');

export class Services {
  constructor() {
    this._currentMonth = DateTime.local().month;
    this._currentYear = DateTime.local().month;
  }

  _getCurrentMonth() {
    return this._currentMonth;
  }

  _getCurrentYear() {
    return this._currentYear;
  }
}
