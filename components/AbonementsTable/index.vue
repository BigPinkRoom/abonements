<template>
  <div class="abonements-table">
    <div class="abonements-table__wrapper">
      <div class="abonements-table__main-table">
        <v-table :headRows="headRows" headRowsI18n="tables.abonementTableFull.columns" :bodyRows="bodyRows" />
      </div>

      <div class="abonements-table__secondary-table">
        <v-table :headRows="headRowsEvents" :bodyRows="bodyRowsEvents" />
      </div>
    </div>

    <div class="abonements-table__add">
      <v-button text="Add new client" @click="emitNewClient" />
    </div>

    <button @click="testCliack">test</button>
  </div>
</template>

<script>
import { DateTime } from 'luxon';
import Table from '@/components/ui/Tables/TableMain';
import Button from '@/components/ui/Buttons/ButtonMain';
import AbonementFullModel from '@/utils/api/models/abonementFullModel';
import { columnsHeadersEnums } from '@/constants/enums/abonementsTableFull';
import {
  createTableRowsModel,
  createTableHeadersModel,
  createTableEventsHeadersModel,
  createTableEventsRowsModel,
} from './helpers/createTableModel';

export default {
  name: 'AbonementsTable',
  middleware: 'auth-employee-access',
  components: {
    vButton: Button,
    vTable: Table,
  },
  data() {
    return {
      year: null,
      month: null,
      headRowsEvents: [
        {
          columns: [],
        },
      ],
      bodyRowsEvents: [
        {
          columns: [],
        },
      ],
      headRows: [],
      bodyRows: [],
    };
  },
  async fetch() {},
  computed: {},
  methods: {
    testCliack() {
      this.bodyRows[0].columns[3].text++;
    },
    emitNewClient() {
      this.$emit('newClient');
    },
    async getAbonementsFull() {
      try {
        const answer = await this.$api.abonement.getAbonementsFull({
          params: {
            filters: {
              year: this.year,
              month: this.month,
            },
            sortings: [
              { name: 'number', type: 'ASC' },
              // { name: 'surname', type: 'ASC' },
            ],
          },
        });

        const abonementFull = new AbonementFullModel(answer);
        // this.$nuxt.$router.replace({ path: '/' });
        return abonementFull.getModel();
      } catch (error) {
        this.$showError(error);
      }
    },
  },
  async mounted() {
    this.year = DateTime.local().year;
    this.month = DateTime.local().month;

    const rows = await this.getAbonementsFull();

    createTableRowsModel.call(this, { rows, columnsHeadersEnums });

    createTableHeadersModel.call(this, { rows, columnsHeadersEnums });

    createTableEventsHeadersModel.call(this, { rows, columnsHeadersEnums, year: this.year, month: this.month });

    createTableEventsRowsModel.call(this, { rows, columnsHeadersEnums, year: this.year, month: this.month });
  },
};
</script>

<style lang="scss" scoped>
.abonements-table {
  flex-direction: column;

  overflow-x: hidden;

  &__wrapper {
    display: flex;
    flex-direction: row;
  }

  &__add {
    margin-bottom: 1rem;
  }

  &__secondary-table {
    overflow-x: auto;
  }
}
</style>
