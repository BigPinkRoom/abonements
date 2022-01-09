const { DateTime } = require('luxon');

export class ServicesCommon {
  constructor() {
    this._currentMonth = DateTime.local().month;
    this._currentYear = DateTime.local().year;
  }

  _getCurrentMonth() {
    return this._currentMonth;
  }

  _getCurrentYear() {
    return this._currentYear;
  }
}
