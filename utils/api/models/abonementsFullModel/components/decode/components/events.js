import { Decoder } from '../../../../../decoder';

export class EventsDecoder extends Decoder {
  constructor(response) {
    super();

    this._decodedResponse = this._decodeResponse(response);
  }

  _decodeResponse(response) {
    if (this.createObject(response)) {
      return {
        eventId: this.createInteger(response.event_id),
        date: this.createString(response.date),
        eventType: this.createString(response.event_type),
        value: this.createInteger(response.value),
      };
    } else {
      return null;
    }
  }

  getDecodedResponse() {
    return this._decodedResponse;
  }
}
