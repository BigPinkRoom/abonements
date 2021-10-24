import ApiModule from '../module';
// import ApiResponse from '../response';

export default class Abonement extends ApiModule {
  constructor(app) {
    super();

    this.context = app;
  }

  async getAbonementsFull(params) {
    return await this.request('/abonements/abonementsFull', 'post', params);
  }
}
