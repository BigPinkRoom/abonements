import ApiModule from '../module';

export default class User extends ApiModule {
  constructor(app) {
    super();

    this.context = app;
  }

  async signup(params) {
    console.log('this', this);
    return await this.request('/signup', 'post', params);
  }

  async logout() {
    return await this.request('/logout', 'get');
  }
}
