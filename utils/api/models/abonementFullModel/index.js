import Model from '../../model';
import ComponentClientsModel from './components/clients';
import ComponentEventsModel from './components/events';

export default class AbonementModel extends Model {
  constructor(response) {
    super();

    this.model = [];

    if (this.createArray(response)) {
      response.forEach((responseElement) => {
        this.model.push({
          abonementId: this.createInteger(responseElement.abonement_id),
          clients: this.createModel(responseElement.clients, ComponentClientsModel),
          dateCreate: this.createDate(responseElement.date_create),
          dateEnd: this.createDate(responseElement.date_end),
          dateStart: this.createDate(responseElement.date_start),
          events: this.createModel(responseElement.events, ComponentEventsModel),
          number: this.createInteger(responseElement.number),
          statusType: this.createString(responseElement.status_type),
          userCreatedId: this.createInteger(responseElement.user_created_id),
          visitsQuantity: this.createInteger(responseElement.visits_quantity),
        });
      });
    }
  }

  getModel() {
    return this.model;
  }
}
