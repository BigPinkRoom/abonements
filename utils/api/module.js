// import axios from 'axios';
import ApiResponse from './response';

export default class ApiModule {
  async request(url, method, data) {
    const request = {
      method,
      url,
      withCredentials: true,
    };

    if (method === 'get') {
      request.params = data;
    } else {
      request.data = data;
    }

    try {
      const response = await this.context.$axios(request);

      if (response.status) {
        return new ApiResponse(response).result;
      } else {
        throw new Error(response);
      }
    } catch (error) {
      const errorMessage = error.response.data.error.message;
      const errorStatus = error.response.status;

      const messageCheck = [errorMessage !== 'undefined', errorMessage !== null, errorMessage !== ''].every(
        (condition) => condition === true
      );

      if (messageCheck) {
        throw new Error(`status: ${errorStatus}, ${errorMessage}.`);
      } else {
        throw new Error(`Unknown error (${errorStatus}).`); // TODO
      }
    }
  }
}
