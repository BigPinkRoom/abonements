import Api from '~/utils/api';

export default ({ app }, inject) => {
  inject('api', new Api(app));
};
