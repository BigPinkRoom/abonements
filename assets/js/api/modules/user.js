import ApiModule from '../module';

class User extends ApiModule {
  async signup(params) {
    return await this.request('api/v1/signup', 'post', params);
  }

  async logout() {
    return await this.request('api/v1/logout', 'get');
  }
}

export default new User();
