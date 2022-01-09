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
      const errorMessage = error.response.data.error.message;
      const errorStatus = error.response.status;

      const messageCheck = [errorMessage !== 'undefined', errorMessage !== null, errorMessage !== ''].every(
        (contain) => contain === true
      );

      if (messageCheck) {
        this.context.$showError(`status: ${errorStatus}, ${errorMessage}.`);
      } else {
        this.context.$showError(`Unknown error (${errorStatus}).`);
      }
    }
  }

  async logout() {
    try {
      const answer = await this.context.$api.user.logout();
      this.context.$showMessage(answer);

      return answer;
    } catch (error) {
      const errorMessage = error.response.data.error.message;
      const errorStatus = error.response.status;

      const messageCheck = [errorMessage !== 'undefined', errorMessage !== null, errorMessage !== ''].every(
        (contain) => contain === true
      );

      if (messageCheck) {
        this.context.$showError(`status: ${errorStatus}, ${errorMessage}.`);
      } else {
        this.context.$showError(`Unknown error (${errorStatus}).`);
      }
    }
  }
}
