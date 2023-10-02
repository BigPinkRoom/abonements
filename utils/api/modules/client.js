import ApiModule from '../module';
// import ApiResponse from '../response';

export default class Client extends ApiModule {
  constructor(app) {
    super();

    this.context = app;
  }

  async getClients(params) {
    return await this.request('/clients/list', 'post', params);
  }

  async setClient(client) {
    return await this.request('clients/add', 'post', client);
  }
}
