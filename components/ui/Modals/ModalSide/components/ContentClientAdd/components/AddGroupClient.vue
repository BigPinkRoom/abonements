<template>
  <fieldset class="client-main__fieldset">
    <card-table class="card-table__wrapper--green">
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
            <tr>
              <td class="card-table__table-td card-table__name">
                Неличка <span class="card-table__name--surname">Алексеева</span>
              </td>
              <td class="card-table__table-td">3 года</td>
              <td class="card-table__table-td"><img src="@/static/icons/girl.svg" alt="" /></td>
              <td class="card-table__table-td">
                <img class="card-table__edit" src="@/static/icons/edit.svg" alt="" />
              </td>
            </tr>
            <tr>
              <td class="card-table__table-td card-table__name">
                Зайка <span class="card-table__name--surname">Степашкина</span>
              </td>
              <td class="card-table__table-td">3 года</td>
              <td class="card-table__table-td"><img src="@/static/icons/girl.svg" alt="" /></td>
              <td class="card-table__table-td">
                <img class="card-table__edit" src="@/static/icons/edit.svg" alt="" />
              </td>
            </tr>
            <tr>
              <td colspan="4" class="card-table__add">
                <button class="card-table__button card-table__button--add" @click.prevent="addOneMoreChildren">
                  + Добавить ребёнка
                </button>
              </td>
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
    </card-table>
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
    addOneMoreChildren() {
      this.$emit('addOneMoreChildren');
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
.card-table {
  &__table-title-td {
    font-size: 1.4rem;
  }
  &__name {
    &--surname {
      font-size: 1.2rem;
    }
  }
  &__button {
    &--add {
      font-size: 1.4rem;
    }
  }
}
</style>
