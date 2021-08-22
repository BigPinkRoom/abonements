<template>
  <div class="abonements-table">
    <div class="abonements-table__add">
      <vue-button text="Add new client" @click="emitNewClient" />
    </div>
    <div class="abonements-table__wrapper">
      <div class="abonements-table__main-table">
        <vue-table :headRows="headRows" :bodyRows="bodyRows" />
      </div>

      <div class="abonements-table__secondary-table">
        <vue-table :headRows="headRowsSecondary" :bodyRows="bodyRowsSecondary" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/ui/Tables/MainTable';
import Button from '@/components/ui/Buttons/MainButton';

export default {
  name: 'AbonementsTable',
  middleware: 'auth-employee-access',
  components: {
    VueButton: Button,
    VueTable: Table,
  },
  data() {
    return {
      headRowsSecondary: [
        {
          columns: [
            { text: '1' },
            { text: '2' },
            { text: '3' },
            { text: '4' },
            { text: '5' },
            { text: '6' },
            { text: '7' },
            { text: '8' },
            { text: '9' },
            { text: '10' },
            { text: '11' },
            { text: '12' },
            { text: '13' },
            { text: '14' },
            { text: '15' },
            { text: '16' },
            { text: '17' },
            { text: '18' },
            { text: '19' },
            { text: '20' },
            { text: '21' },
            { text: '22' },
            { text: '23' },
            { text: '24' },
            { text: '25' },
            { text: '26' },
            { text: '27' },
            { text: '28' },
            { text: '29' },
            { text: '30' },
            { text: '31' },
          ],
        },
      ],
      bodyRowsSecondary: [
        {
          columns: [
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
            { text: '1' },
          ],
        },
      ],
      headRows: [
        {
          columns: [
            { text: 'Дата активации' },
            { text: 'Ф.И. Ребенка' },
            { text: 'Всего занятий' },
            { text: 'Осталось занятий' },
            { text: '№ абонемента' },
          ],
        },
      ],
      bodyRows: [
        {
          columns: [{ text: '01.01.2021' }, { text: 'Иванов Андрей' }, { text: '8' }, { text: '4' }, { text: '710' }],
        },
      ],
    };
  },
  async fetch() {},
  computed: {},
  methods: {
    emitNewClient() {
      this.$emit('newClient');
    },
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
