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
    // return await this.request('/auth/logout', 'get');
    await this.context.$auth.logout();

    const answer = 'Succussefully logged out';

    return answer;
  }

  // TODO remove (here need to only api)?
  async login(user) {
    console.log('user login', user);

    await this.context.$auth.loginWith('cookie', {
      data: user,
    });
    const answer = 'User is logged';

    // answer = new ApiResponse(answer);

    return answer;
  }
}
