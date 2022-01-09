export class Branch {
  constructor(rawBranches) {
    console.log('raw branches', rawBranches);
    this._rawBranches = rawBranches;
    this._branches = this._createBranchesModel(this._rawBranches);
  }

  _createBranchesModel(rawBranches) {
    const branches = rawBranches.map((branch) => {
      return {
        branchId: branch.branchId,
        name: branch.name,
        address: branch.address,
        telephone: branch.telephone,
      };
    });

    return branches;
  }

  getModel() {
    return this._branches;
  }
}
