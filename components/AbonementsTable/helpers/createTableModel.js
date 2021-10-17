// import { DateTime } from 'luxon';
import { getDaysOfMonth } from '@/helpers/luxon';
import { DateTime } from 'luxon';

export function createTableRowsModel(options) {
  this.bodyRows.length = 0;

  options.rows.forEach((row, rowIndex) => {
    const columnsOrder = options.columnsHeadersEnums;

    this.$set(this.bodyRows, rowIndex, {});
    this.$set(this.bodyRows[rowIndex], 'columns', []);

    columnsOrder.forEach((columnName, columnIndex) => {
      this.$set(this.bodyRows[rowIndex].columns, columnIndex, { text: '' });

      if (columnName === 'clients') {
        processingClientColumn.call(this, { row, rowIndex, columnName, columnIndex });
      } else {
        this.$set(this.bodyRows[rowIndex].columns[columnIndex], 'text', row[columnName]);
      }
    });
  });

  function processingClientColumn({ row, rowIndex, columnName, columnIndex }) {
    if (row[columnName].length > 1) {
      const fullNames = [];

      row[columnName].forEach((item, itemIndex) => {
        const fullName = `${row[columnName][itemIndex].clientName} ${row[columnName][itemIndex].clientSurname}`;

        fullNames.push(fullName);
      });

      this.$set(this.bodyRows[rowIndex].columns[columnIndex], 'text', fullNames.join(','));
    } else {
      const fullName = `${row[columnName][0].clientName} ${row[columnName][0].clientSurname}`;

      this.$set(this.bodyRows[rowIndex].columns[columnIndex], 'text', fullName);
    }
  }
}

export function createTableEventsRowsModel(options) {
  this.bodyRowsEvents.length = 0;

  const days = getDaysOfMonth({ year: options.year, month: options.month });

  options.rows.forEach((row, rowIndex) => {
    this.$set(this.bodyRowsEvents, rowIndex, {});
    this.$set(this.bodyRowsEvents[rowIndex], 'columns', []);

    const eventsDays = {};

    row.events.forEach((event) => {
      const eventDay = DateTime.fromISO(event.date).day;
      if (!eventsDays[eventDay]) {
        eventsDays[eventDay] = [];
      }

      eventsDays[eventDay].push(event.value);
    });

    days.forEach((day, dayIndex) => {
      const dayValues = eventsDays[day] ? eventsDays[day] : null;

      if (dayValues) {
        this.$set(this.bodyRowsEvents[rowIndex].columns, dayIndex, { text: '' });
        this.$set(this.bodyRowsEvents[rowIndex].columns[dayIndex], 'text', dayValues.join(','));
      } else {
        this.$set(this.bodyRowsEvents[rowIndex].columns, dayIndex, { text: '' });
      }
    });
  });
}

export function createTableHeadersModel(options) {
  this.headRows.length = 0;

  const columnsOrder = options.columnsHeadersEnums;
  this.$set(this.headRows, 0, {});
  this.$set(this.headRows[0], 'columns', []);

  columnsOrder.forEach((columnName, columnIndex) => {
    this.$set(this.headRows[0].columns, columnIndex, { text: '' });
    this.$set(this.headRows[0].columns[columnIndex], 'code', columnName);
  });
}

export function createTableEventsHeadersModel(options) {
  const days = getDaysOfMonth({ year: options.year, month: options.month });

  this.$set(this.headRowsEvents, 0, {});
  this.$set(this.headRowsEvents[0], 'columns', []);

  days.forEach((element, index) => {
    this.$set(this.headRowsEvents[0].columns, index, { text: '' });
    this.$set(this.headRowsEvents[0].columns[index], 'text', element);
  });
}
