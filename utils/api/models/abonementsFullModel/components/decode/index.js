import { Decoder } from '@/utils/api/decoder';
import { ClientsDecoder as ComponentClientsDecoder } from './components/clients';
import { EventsDecoder as ComponentEventsDecoder } from './components/events';

export class AbonementsFullDecoder extends Decoder {
  constructor(response) {
    super();

    this._decodedResponse = this._decodeResponse(response);
  }

  _decodeResponse(response) {
    if (this.createArray(response)) {
      return response.map((responseElement) => {
        return {
          abonementId: this.createInteger(responseElement.abonement_id),
          clients: this.createModel(responseElement.clients, ComponentClientsDecoder),
          dateCreate: this.createDate(responseElement.date_create),
          dateEnd: this.createDate(responseElement.date_end),
          dateStart: this.createDate(responseElement.date_start),
          events: this.createModel(responseElement.events, ComponentEventsDecoder),
          number: this.createInteger(responseElement.number),
          statusType: this.createString(responseElement.status_type),
          userCreatedId: this.createInteger(responseElement.user_created_id),
          visitsQuantity: this.createInteger(responseElement.visits_quantity),
        };
      });
    } else {
      return null;
    }
  }

  getDecodedResponse() {
    return this._decodedResponse;
  }
}
