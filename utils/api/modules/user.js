import ApiModule from '../module';

export default class User extends ApiModule {
  constructor(app) {
    super();

    this.context = app;
  }

  async signup(params) {
    return await this.request('/auth/signup', 'post', params);
  }

  async logout() {
    return await this.request('/auth/logout', 'get');
  }
}
