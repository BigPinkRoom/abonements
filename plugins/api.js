import Api from '~/utils/api';

export default ({ app }, inject) => {
  inject('api', () => {
    return new Api(app);
  });
};
