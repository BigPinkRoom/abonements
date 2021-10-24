import Model from '../../model';
import { AbonementsFullDecoder as DecodedResponse } from './components/decode/';
import { RowsHead as RowsHeadModel } from './components/model/rowsHead';
import { RowsBody as RowsBodyModel } from './components/model/rowsBody';
import { RowsBodyEvents as RowsBodyEventsModel } from './components/model/rowsBodyEvents';
import { RowsHeadEvents as RowsHeadEventsModel } from './components/model/rowsHeadEvents';
// import  from './components/model/rowsHeadEvents';

export class AbonementsFullModel extends Model {
  constructor({ response, columnsOrder, month, year }) {
    super();

    this._decodedResponse = new DecodedResponse(response).getDecodedResponse();

    this._rowsHead = new RowsHeadModel(this._decodedResponse, columnsOrder).getModel();
    this._rowsBody = new RowsBodyModel(this._decodedResponse, columnsOrder).getModel();
    this._rowsHeadEvents = new RowsHeadEventsModel(month, year).getModel();
    this._rowsBodyEvents = new RowsBodyEventsModel(this._decodedResponse, month, year).getModel();
    console.log('rows head', this._rowsBodyEvents);
  }

  getModel() {
    return {
      rowsHead: this._rowsHead,
      rowsBody: this._rowsBody,
      rowsHeadEvents: this._rowsHeadEvents,
      rowsBodyEvents: this._rowsBodyEvents,
    };
  }
}
