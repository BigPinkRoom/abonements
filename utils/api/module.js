import axios from 'axios';
import ApiResponse from './response';

export default class ApiModule {
  async request(url, method, data) {
    const request = {
      method,
      baseURL: this.context.$config.baseURL,
      // baseURL: 'http://localhost:4000/api/v1',
      url,
      withCredentials: true,
    };

    if (method === 'get') {
      request.params = data;
    } else {
      request.data = data;
    }

    try {
      const response = await axios(request);

      console.log('response', await response);

      if (response.status) {
        return new ApiResponse(response).result;
      } else {
        throw new Error(response);
      }
    } catch (error) {
      const errorMessage = error.response.data.error.message;
      const errorStatus = error.response.status;

      const messageCheck = [errorMessage !== 'undefined', errorMessage !== null, errorMessage !== ''].every(
        (contain) => contain === true
      );

      console.log('error', error.response);

      if (messageCheck) {
        throw new Error(`status: ${errorStatus}, ${errorMessage}.`);
      } else {
        throw new Error(`Unknown error (${errorStatus}).`); // TODO
      }
    }
  }
}
