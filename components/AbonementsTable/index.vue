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
      const abonementsFullModel = await this.$services.abonementsFull.get();

      return abonementsFullModel;
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
