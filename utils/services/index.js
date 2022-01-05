import { ServiceAuth } from './components/serviceAuth';
import { ServiceAbonementsFull } from './components/serviceAbonementsFull';

export default class Services {
  constructor(app) {
    this.abonementsFull = new ServiceAbonementsFull(app);
    this.auth = new ServiceAuth(app);
  }
}
