export class RowsBody {
  constructor(rawRows, columnsOrder) {
    this._rawRows = rawRows;
    this._columnsOrder = columnsOrder;

    this._rowsHeaders = this._createRowsModel({
      rawRows: this._rawRows,
      columnsOrder: this._columnsOrder,
    });
  }

  _createRowsModel({ rawRows, columnsOrder }) {
    const rows = [];

    rawRows.forEach((row, rowIndex) => {
      rows[rowIndex] = {
        columns: columnsOrder.map((columnName) => {
          let text;

          if (columnName === 'clients') {
            text = this._processingClientColumn(row[columnName]);
          } else {
            text = row[columnName];
          }

          return { text };
        }),
      };
    });

    return rows;
  }

  _processingClientColumn(clientColumn) {
    const fullNames = clientColumn.map((item) => {
      return `${item.clientName} ${item.clientSurname}`;
    });

    return fullNames.join(', ');
  }

  getModel() {
    return this._rowsHeaders;
  }
}
