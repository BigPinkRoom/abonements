// import axios from 'axios';
import User from './modules/user';

export default class Api {
  constructor(app) {
    this.user = new User(app);
  }
}
