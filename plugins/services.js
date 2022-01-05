import Services from '~/utils/services';

export default ({ app }, inject) => {
  inject('services', new Services(app));
};
