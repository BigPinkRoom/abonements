import Model from '../../../model';

export default class EventsModel extends Model {
  constructor(response) {
    super();

    this.model = {};

    if (this.createObject(response)) {
      this.model.eventId = this.createInteger(response.event_id);
      this.model.date = this.createString(response.date);
      this.model.eventType = this.createString(response.event_type);
      this.model.value = this.createInteger(response.value);
    }
  }

  getModel() {
    return this.model;
  }
}
