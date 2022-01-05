import { ServicesCommon } from '@/utils/services/common/servicesCommon';
import { AbonementsFullModel } from '@/utils/api/models/abonementsFullModel';
import { isEmptyObject } from '@/helpers/checkTypes';
import { columnsHeadersEnums } from '@/constants/enums/abonementsTableFull';

export class ServiceAbonementsFull extends ServicesCommon {
  constructor(app) {
    super();

    this.context = app;
  }

  async get({ month = null, year = null, sortings = [], filters = {}, columnsOrder = [] }) {
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

      console.log('this', this.context); // TODO

      const response = await this.context.$api.abonement.getAbonementsFull({
        params,
      });

      const options = {
        response,
        columnsOrder,
        month,
        year,
      };

      if (!options.columnsOrder.length) {
        options.columnsOrder = columnsHeadersEnums;
      }

      if (!options.year) {
        options.year = this._getCurrentYear();
      }

      if (!options.month) {
        options.month = this._getCurrentMonth();
      }

      const abonementsFullModel = new AbonementsFullModel(options).getModel();

      return abonementsFullModel;
    } catch (error) {
      this.context.$showError(error);
    }
  }
}
