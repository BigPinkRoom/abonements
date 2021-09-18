import User from './modules/user';
import Client from './modules/client';

export default class Api {
  constructor(app) {
    this.user = new User(app);
    this.client = new Client(app);
  }
}
