import { ServicesCommon } from '@/utils/services/common/servicesCommon';
import { AbonementsFullModel } from '@/utils/api/models/abonementsFullModel';
import { isEmptyObject } from '@/helpers/checkTypes';
import { columnsHeadersEnums } from '@/constants/enums/abonementsTableFull';

export class ServiceAbonementsFull extends ServicesCommon {
  constructor(app) {
    super();

    this.context = app;
  }

  async get({ sortings = [], filters = {}, columnsOrder = [] } = {}) {
    try {
      const params = {};

      if (!sortings.length) {
        params.sortings = [{ name: 'number', type: 'ASC' }];
      }

      if (isEmptyObject(filters)) {
        params.filters = {
          year: this._getCurrentYear(),
          month: this._getCurrentMonth(),
        };
      }

      const response = await this.context.$api.abonement.getAbonementsFull({
        params,
      });

      const options = {
        response,
        columnsOrder: columnsOrder.length ? columnsOrder : columnsHeadersEnums,
        eventsYear: params.filters.year,
        eventsMonth: params.filters.month,
      };

      const abonementsFullModel = new AbonementsFullModel(options).getModel();

      return abonementsFullModel;
    } catch (error) {
      window.onNuxtReady(() => {
        this.context.router.push('/login');
      }); // TODO
      this.context.$showError(error);
      return {
        rowsHead: [],
        rowsBody: [],
        rowsHeadEvents: [],
        rowsBodyEvents: [],
      };
    }
  }
}
