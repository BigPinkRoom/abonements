import ApiModule from '../module';
// import ApiResponse from '../response';

export default class User extends ApiModule {
  constructor(app) {
    super();

    this.context = app;
  }

  async signup(params) {
    return await this.request('/auth/signup', 'post', params);
  }

  // TODO remove (here need to only api)?
  async logout() {
    await this.context.$auth.logout();

    const answer = 'Succussefully logged out';

    return answer;
  }

  // TODO remove (here need to only api)?
  async login(user) {
    await this.context.$auth.loginWith('cookie', {
      data: user,
    });

    const answer = 'User is logged';

    return answer;
  }

  async getCurrent() {
    const answer = await this.request('/auth/user', 'get');

    return answer;
  }
}
