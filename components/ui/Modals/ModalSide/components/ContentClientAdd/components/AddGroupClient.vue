<template>
  <fieldset class="client-main__fieldset">
    <CardTable class="card-table__wrapper--green">
      <template #title>
        <legend class="card-table__title card-table__title--green">
          {{ $t(`forms.client.add.fieldsets.client.label`) }}
        </legend>
      </template>
      <template #table-title>
        <table class="card-table__table-title card-table__table-title--green">
          <tbody>
            <tr>
              <td class="card-table__table-title-td card-table__table-title-td--green">Имя / фамилия</td>
              <td class="card-table__table-title-td card-table__table-title-td--green">Возраст</td>
              <td class="card-table__table-title-td card-table__table-title-td--green">Пол</td>
              <td class="card-table__table-title-td card-table__table-title-td--green">Действия</td>
            </tr>
          </tbody>
        </table>
      </template>
      <template #content>
        <div class="client-main__close" v-if="closeButton">
          <v-close-button @click="close" />
        </div>

        <label :for="`clientSurname_${uuid}`">{{ $t(`forms.client.add.fieldsets.client.fields.surname.label`) }}</label>
        <v-input
          :id="`clientSurname_${uuid}`"
          type="text"
          :placeholder="$t(`forms.client.add.fieldsets.client.fields.surname.placeholder`)"
        ></v-input>

        <label :for="`clientName_${uuid}`">{{ $t(`forms.client.add.fieldsets.client.fields.name.label`) }}</label>
        <v-input
          :id="`clientName_${uuid}`"
          type="text"
          :placeholder="$t(`forms.client.add.fieldsets.client.fields.name.placeholder`)"
        ></v-input>

        <label :for="`clientPatronymic_${uuid}`">{{
          $t(`forms.client.add.fieldsets.client.fields.patronymic.label`)
        }}</label>
        <v-input
          :id="`clientPatronymic_${uuid}`"
          type="text"
          :placeholder="$t(`forms.client.add.fieldsets.client.fields.patronymic.placeholder`)"
        ></v-input>

        <label :for="`clientBirthday_${uuid}`">{{
          $t(`forms.client.add.fieldsets.client.fields.birthday.label`)
        }}</label>
        <v-input
          :id="`clientBirthday_${uuid}`"
          type="text"
          :placeholder="$t(`forms.client.add.fieldsets.client.fields.birthday.placeholder`)"
        ></v-input>
      </template>
    </CardTable>
  </fieldset>
</template>

<script>
import vInput from '@/components/ui/Fields/Input';
import { uuid } from 'vue-uuid';
import vCloseButton from '@/components/ui/Buttons/ButtonClose.vue';
import CardTable from '@/components/Common/CardTable.vue';

export default {
  name: 'MainGroupClient',
  components: {
    vInput,
    vCloseButton,
    CardTable,
  },
  props: {
    actionType: {
      type: String,
    },
    closeButton: {
      type: Boolean,
    },
  },
  data() {
    return {
      uuid: '',
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
  mounted() {
    this.uuid = uuid.v4();
  },
};
</script>
<style lang="scss" scoped>
.client-main {
  &__fieldset {
    position: relative;
    border: 0;
  }

  &__legend {
    width: 100%;
    display: block;
  }

  &__close {
    position: absolute;
    top: -0.5rem;
    right: 0;
  }
}
</style>
