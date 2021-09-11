<template>
  <form class="client-main">
    <fieldset-client :action-type="actionType" />
    <fieldset-abonements :action-type="actionType" />
    <fieldset-relatives :action-type="actionType" />
  </form>
</template>

<script>
import FieldsetClient from './components/MainGroupClient';
import FieldsetAbonements from './components/MainGroupAbonements';
import FieldsetRelatives from './components/MainGroupRelatives';

export default {
  name: 'ClientEdit',
  components: {
    FieldsetClient,
    FieldsetAbonements,
    FieldsetRelatives,
  },
  props: {
    selectedClientData: {
      type: Object,
    },
  },
  computed: {
    actionType() {
      return this.selectedClientData ? 'edit' : 'add';
    },
  },
};
</script>

<style lang="scss" scoped>
.client-main__fieldset {
  padding: 0.75rem;
}

.client-main-abonement {
  &__row {
    display: flex;
    flex-direction: row;
    flex-grow: 0;
  }

  &__column {
    display: flex;
    flex-direction: column;
    width: 50%;

    margin-right: 0.75rem;
  }

  &__column:last-child {
    margin-right: 0;
  }
}
</style>
