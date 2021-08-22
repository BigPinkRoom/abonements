<template>
  <div class="container">
    <modal-side
      :active="modalSideActive"
      v-show="modalSideActive"
      sticky
      position="left"
      @close="closeModalSide"
      title="Client edit"
    >
      <template #content><client-edit title="Client edit" /></template>
    </modal-side>
    <abonements-table @newClient="openAddNewClient" />
  </div>
</template>

<script>
import AbonementsTable from '@/components/AbonementsTable';
import ModalSide from '@/components/ui/Modals/ModalSide';
import ClientEdit from '@/components/ui/Modals/ModalSide/components/ClientEdit';

export default {
  name: 'Index',
  middleware: 'auth-employee-access',
  components: {
    AbonementsTable,
    ModalSide,
    ClientEdit,
  },
  data() {
    return {
      modalSideActive: false,
    };
  },
  async fetch() {},
  computed: {},
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

  background-color: var(--color-test);
}
</style>
