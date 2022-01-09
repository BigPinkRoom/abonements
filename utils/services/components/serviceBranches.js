import { BranchesModel } from '@/utils/api/models/branches';

export class ServiceBranches {
  constructor(app) {
    this.context = app;
  }

  getSelect(branches) {
    const branchSelectModel = new BranchesModel({ stateData: branches }).getSelectModel();

    return branchSelectModel;
  }

  async get({ sortings = [], filters = {} } = {}) {
    try {
      const params = {};

      if (!sortings.length) {
        params.sortings = [{ name: 'branch_id', type: 'ASC' }];
      }

      const response = await this.context.$api.branch.getBranches({ params });

      const branchModel = new BranchesModel({ response }).getModel();

      return branchModel;
    } catch (error) {
      this.context.$showError(error);
    }
  }
}
