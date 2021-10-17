<template>
  <div class="container main-page">
    <modal-side
      :active="modalSideActive"
      v-show="modalSideActive"
      sticky
      position="left"
      @close="closeModalSide"
      :title="$t(`forms.client.${actionType}.title`)"
    >
      <template #content><client-edit :selected-client-data="null" /></template>
      <template #footer>
        <footer-main />
      </template>
    </modal-side>

    <div class="main-page__content">
      <h1 class="main-page__title">{{ $t('tables.abonementTableFull.title') }}</h1>

      <abonements-table @newClient="openAddNewClient" />
    </div>
  </div>
</template>

<script>
import AbonementsTable from '@/components/AbonementsTable';
import ModalSide from '@/components/ui/Modals/ModalSide';
import ClientEdit from '@/components/ui/Modals/ModalSide/components/ContentClientEdit';
import FooterMain from '@/components/ui/Modals/ModalSide/components/FooterMain';

export default {
  name: 'Index',
  middleware: 'auth-employee-access',
  components: {
    AbonementsTable,
    ModalSide,
    ClientEdit,
    FooterMain,
  },
  data() {
    return {
      modalSideActive: false,
      selectedClientData: null,
    };
  },
  async fetch() {},
  computed: {
    actionType() {
      return this.selectedClientData ? 'edit' : 'add';
    },
  },
  methods: {
    openAddNewClient() {
      this.modalSideActive = true;
    },
    closeModalSide() {
      this.modalSideActive = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: calc(100vh - 2.5rem);

  background-color: var(--color-white);
}

.main-page {
  &__content {
    overflow-x: hidden;
  }

  &__title {
    text-align: center;
  }
}
</style>
