import ApiModule from '../module';
// import ApiResponse from '../response';

export default class Branch extends ApiModule {
  constructor(app) {
    super();

    this.context = app;
  }

  async getBranches(params) {
    return await this.request('/branches/list', 'post', params);
  }
}
