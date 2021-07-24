// import axios from 'axios';
import user from './api/modules/user';

class Api {
  constructor() {
    this.user = user;
  }
}

export default new Api();
