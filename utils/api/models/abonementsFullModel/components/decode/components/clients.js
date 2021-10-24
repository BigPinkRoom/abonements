import { Decoder } from '../../../../../decoder';

export class ClientsDecoder extends Decoder {
  constructor(response) {
    super();

    this._decodedResponse = this._decodeResponse(response);
  }

  _decodeResponse(response) {
    if (this.createObject(response)) {
      return {
        clientId: this.createInteger(response.client_id),
        clientSurname: this.createString(response.client_surname),
        clientName: this.createString(response.client_name),
        clientPatronymic: this.createString(response.client_patronymic),
        clientBirthday: this.createDate(response.client_birthday),
      };
    } else {
      return null;
    }
  }

  getDecodedResponse() {
    return this._decodedResponse;
  }
}
