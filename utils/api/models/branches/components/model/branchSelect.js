export class BranchSelect {
  constructor(rawBranches) {
    this._rawBranches = rawBranches;
    this._branches = this._createSelectBranchesModel(this._rawBranches);
  }

  _createSelectBranchesModel(rawBranches) {
    const branches = rawBranches.map((branch) => {
      return {
        idName: 'branch-options',
        value: branch.branchId,
        text: branch.name,
        disabled: false,
        selected: false,
      };
    });

    return branches;
  }

  getModel() {
    return this._branches;
  }
}
