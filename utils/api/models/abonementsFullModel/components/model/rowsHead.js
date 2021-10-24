export class RowsHead {
  constructor(rawRows, columnsOrder) {
    this._rawRows = rawRows;
    this._columnsOrder = columnsOrder;

    this._rowsHead = this._createHeadsModel({
      rawRows: this._rawRows,
      columnsOrder: this._columnsOrder,
    });
  }

  _createHeadsModel({ rawRows, columnsOrder }) {
    const rows = [
      {
        columns: columnsOrder.map((columnName) => {
          return {
            code: columnName,
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
