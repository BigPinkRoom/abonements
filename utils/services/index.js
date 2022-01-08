import { ServiceAuth } from './components/serviceAuth';
import { ServiceBranches } from './components/serviceBranches';
import { ServiceAbonementsFull } from './components/serviceAbonementsFull';

export default class Services {
  constructor(app) {
    this.auth = new ServiceAuth(app);
    this.branches = new ServiceBranches(app);
    this.abonementsFull = new ServiceAbonementsFull(app);
  }
}
