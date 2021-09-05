<template>
  <table class="common-table" :class="styleType">
    <thead>
      <tr v-for="row in headRows" :key="row.id" :class="row.class">
        <th v-for="column in row.columns" :key="column.id">
          {{ column.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in bodyRows" :key="row.id" :class="row.class">
        <td v-for="column in row.columns" :key="column.id" :class="column.class">
          {{ column.text }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    styleType: {
      type: String,
    },
    headRows: {
      type: Array,
    },
    bodyRows: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.common-table {
  white-space: nowrap;

  border-spacing: 0;

  & th {
    padding: 0.4rem;

    border: 1px solid green;
  }

  & td {
    border: 1px solid green;
  }
}

.main-table {
}
</style>
