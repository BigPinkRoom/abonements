import Model from '../../model';
import { BranchesDecoder as DecodedResponse } from './components/decode/';
import { BranchSelect as BranchesSelectModel } from './components/model/branchSelect';

export class BranchesModel extends Model {
  constructor({ response }) {
    super();

    this._decodedResponse = new DecodedResponse(response).getDecodedResponse();

    this._branchesSelect = new BranchesSelectModel(this._decodedResponse).getModel();
  }

  getSelectModel() {
    return this._branchesSelect;
  }
}
