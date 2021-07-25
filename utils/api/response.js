import responseStatuses from '../../constants/responseStatuses';

export default class apiResponse {
  constructor(response) {
    this.status = response.status;
    this.result = null;
    this.message = null;

    if (responseStatuses.SUCCESS_ARR.find((status) => status === response.status)) {
      this.result = response.data;
    } else {
      this.message = response.message;
    }
  }
}
