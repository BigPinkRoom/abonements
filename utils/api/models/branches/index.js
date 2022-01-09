import Model from '../../model';
import { BranchesDecoder as DecodedResponse } from './components/decode/';
import { BranchSelect as BranchesSelectModel } from './components/model/branchSelect';
import { Branch as BranchesFullModel } from './components/model/branch';

export class BranchesModel extends Model {
  constructor({ response, stateData }) {
    super();

    if (response) {
      this._decodedResponse = new DecodedResponse(response).getDecodedResponse();
      this._branches = new BranchesFullModel(this._decodedResponse).getModel();
    }

    if (stateData) {
      this._stateData = stateData;
      this._branchesSelect = new BranchesSelectModel(this._stateData).getModel();
    }
  }

  getModel() {
    return this._branches;
  }

  getSelectModel() {
    return this._branchesSelect;
  }
}
