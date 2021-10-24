import User from './modules/user';
import Client from './modules/client';
import Abonement from './modules/abonement';

export default class Api {
  constructor(app) {
    this.user = new User(app);
    this.client = new Client(app);
    this.abonement = new Abonement(app);
  }
}
