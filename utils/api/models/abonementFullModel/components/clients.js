import Model from '../../../model';

export default class ClientsModel extends Model {
  constructor(response) {
    super();

    this.model = {};

    if (this.createObject(response)) {
      this.model.clientId = this.createInteger(response.client_id);
      this.model.clientSurname = this.createString(response.client_surname);
      this.model.clientName = this.createString(response.client_name);
      this.model.clientPatronymic = this.createString(response.client_patronymic);
      this.model.clientBirthday = this.createDate(response.client_birthday);
    }
  }

  getModel() {
    return this.model;
  }
}
