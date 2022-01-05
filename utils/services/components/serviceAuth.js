export class ServiceAuth {
  constructor(app) {
    this.context = app;
  }

  async signup(params) {
    try {
      const answer = await this.context.$api.user.signup(params);
      this.context.$showMessage(answer);

      return answer;
    } catch (error) {
      this.context.$showError(error);
    }
  }

  async login(user) {
    try {
      const answer = await this.context.$api.user.login(user);
      this.context.$showMessage(answer);

      return answer;
    } catch (error) {
      this.context.$showError(error);
    }
  }

  async logout() {
    try {
      const answer = await this.context.$api.user.logout();
      this.context.$showMessage(answer);

      return answer;
    } catch (error) {
      this.context.$showError(error);
    }
  }
}
