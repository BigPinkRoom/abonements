<template>
  <div class="abonements-table">
    <div class="abonements-table__wrapper">
      <div class="abonements-table__main-table">
        <v-table :rowsHead="rowsHead" rowsHeadI18n="tables.abonementTableFull.columns" :rowsBody="rowsBody" />
      </div>

      <div class="abonements-table__secondary-table">
        <v-table :rowsHead="rowsHeadEvents" :rowsBody="rowsBodyEvents" />
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
import { AbonementsFullModel } from '@/utils/api/models/abonementsFullModel';
import { columnsHeadersEnums } from '@/constants/enums/abonementsTableFull';

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
      rowsHead: [],
      rowsBody: [],
      rowsHeadEvents: [],
      rowsBodyEvents: [],
    };
  },
  async fetch() {},
  computed: {},
  methods: {
    testCliack() {
      this.rowsBody[0].columns[3].text++;
    },
    setCurrentDate() {
      this.year = DateTime.local().year;
      this.month = DateTime.local().month;
    },
    setTableRows(options) {
      this.rowsHead = options.rowsHead;
      this.rowsBody = options.rowsBody;
      this.rowsHeadEvents = options.rowsHeadEvents;
      this.rowsBodyEvents = options.rowsBodyEvents;
    },
    emitNewClient() {
      this.$emit('newClient');
    },
    async getAbonementsFull() {
      try {
        const response = await this.$api.abonement.getAbonementsFull({
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

        const options = {
          response,
          columnsOrder: columnsHeadersEnums,
          month: this.month,
          year: this.year,
        };

        // this.$nuxt.$router.replace({ path: '/' });

        const abonementsFullModel = new AbonementsFullModel(options).getModel();

        return abonementsFullModel;
      } catch (error) {
        this.$showError(error);
      }
    },
  },
  async mounted() {
    this.setCurrentDate();

    const abonementsTableRows = await this.getAbonementsFull();
    this.setTableRows(abonementsTableRows);
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
