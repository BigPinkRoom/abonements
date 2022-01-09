import { BranchesModel } from '@/utils/api/models/branches';

export const state = () => ({
  branches: [],
});

export const mutations = {
  SET_BRANCHES(state, payload) {
    state.branches = payload;
  },
};

export const actions = {
  async setBranches({ commit }) {
    const branches = await this.$services.branch.get();

    commit('SET_BRANCHES', branches);
  },
};

export const getters = {
  branches(state) {
    return state.branches;
  },
  branchesSelectList(state) {
    const branchSelectModel = new BranchesModel({ stateData: state.branches }).getSelectModel();
    return branchSelectModel;
  },
};
