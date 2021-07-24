import ApiModule from '../module';

class User extends ApiModule {
  async signup(params) {
    return await this.request('/signup', 'post', params);
  }

  async logout() {
    return await this.request('/logout', 'get');
  }
}

export default new User();
