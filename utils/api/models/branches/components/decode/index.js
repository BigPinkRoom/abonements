import { Decoder } from '@/utils/api/decoder';

export class BranchesDecoder extends Decoder {
  constructor(response) {
    super();

    this._decodedResponse = this._decodeResponse(response);
  }

  _decodeResponse(response) {
    if (this.createArray(response)) {
      return response.map((responseElement) => {
        return {
          branchId: this.createInteger(responseElement.branch_id),
          name: this.createString(responseElement.name),
          address: this.createString(responseElement.address),
          telephone: this.createString(responseElement.telephone),
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
