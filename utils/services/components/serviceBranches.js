import { BranchesModel } from '@/utils/api/models/branches';

export class ServiceBranches {
  constructor(app) {
    this.context = app;
  }

  async getSelect({ sortings = [], filters = {} } = {}) {
    try {
      const params = {};

      if (!sortings.length) {
        params.sortings = [{ name: 'branch_id', type: 'ASC' }];
      }

      const response = await this.context.$api.branch.getBranches({ params });

      const options = {
        response,
      };

      const branchSelectModel = new BranchesModel(options).getSelectModel();

      return branchSelectModel;
    } catch (error) {
      this.context.$showError(error);
    }
  }
}
