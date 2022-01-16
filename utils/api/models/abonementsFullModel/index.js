import Model from '../../model';
import { AbonementsFullDecoder as DecodedResponse } from './components/decode/';
import { RowsHead as RowsHeadModel } from './components/model/rowsHead';
import { RowsBody as RowsBodyModel } from './components/model/rowsBody';
import { RowsBodyEvents as RowsBodyEventsModel } from './components/model/rowsBodyEvents';
import { RowsHeadEvents as RowsHeadEventsModel } from './components/model/rowsHeadEvents';

export class AbonementsFullModel extends Model {
  constructor({ response = null, columnsOrder = [], eventsMonth = [], eventsYear = [] } = {}) {
    super();

    if (response) {
      this._decodedResponse = new DecodedResponse(response).getDecodedResponse();

      this._rowsHead = new RowsHeadModel(this._decodedResponse, columnsOrder).getModel();
      this._rowsBody = new RowsBodyModel(this._decodedResponse, columnsOrder).getModel();
      this._rowsHeadEvents = new RowsHeadEventsModel(eventsMonth, eventsYear).getModel();
      this._rowsBodyEvents = new RowsBodyEventsModel(this._decodedResponse, eventsMonth, eventsYear).getModel();
    }
  }

  getModel() {
    return {
      rowsHead: this._rowsHead,
      rowsBody: this._rowsBody,
      rowsHeadEvents: this._rowsHeadEvents,
      rowsBodyEvents: this._rowsBodyEvents,
    };
  }

  getEmptyModel() {
    return {
      rowsHead: [],
      rowsBody: [],
      rowsHeadEvents: [],
      rowsBodyEvents: [],
    };
  }
}
