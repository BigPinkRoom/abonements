<template>
  <fieldset class="client-main__fieldset">
    <card-table class="card-table__wrapper--green">
      <template #title>
        <legend class="card-table__title card-table__title--green">
          {{ $t(`forms.client.add.fieldsets.client.label`) }}
        </legend>
      </template>
      <template #table-title>
        <div class="card-table__table-title card-table__table-title--green">
          <div class="card-table__table-tr">
            <div class="card-table__table-title-td card-table__table-title--name card-table__table-title-td--green">
              Имя / фамилия
            </div>
            <div class="card-table__table-title-td card-table__table-title--age card-table__table-title-td--green">
              Возраст
            </div>
            <div class="card-table__table-title-td card-table__table-title--gender card-table__table-title-td--green">
              Пол
            </div>
            <div class="card-table__table-title-td card-table__table-title--actions card-table__table-title-td--green">
              Действия
            </div>
          </div>
          <div class="card-table__table-tr">
            <div class="card-table__table-td card-table--name">
              Неличка <span class="card-table__name--surname">Алексеева</span>
            </div>
            <div class="card-table__table-td card-table--age">3 года</div>
            <div class="card-table__table-td card-table--gender"><img src="@/static/icons/girl.svg" alt="" /></div>
            <div class="card-table__table-td card-table--actions">
              <img class="card-table__actions" src="@/static/icons/edit.svg" alt="" />
            </div>
          </div>
          <div class="card-table__table-tr">
            <div class="card-table__table-td card-table--name">
              Зайка <span class="card-table__name--surname">Степашкина</span>
            </div>
            <div class="card-table__table-td card-table--age">3 года</div>
            <div class="card-table__table-td card-table--gender"><img src="@/static/icons/girl.svg" alt="" /></div>
            <div class="card-table__table-td card-table--actions">
              <img class="card-table__actions" src="@/static/icons/edit.svg" alt="" />
            </div>
          </div>
          <div class="card-table__table-tr">
            <div class="card-table__table-td card-table__table-td--edit" colspan="4">
              <div class="card-table__name-title">
                Алексей
                <div class="card-table__name-title--surname">Иванов</div>
              </div>
              <div class="card-table__actions">
                <img src="/icons/arrow_down_icon.svg" alt="" class="card-table__actions-img" />
                <img src="/icons/ok_icon.svg" alt="" class="card-table__actions-img" />
              </div>
              <div class="card-table__field">
                <label class="card-table__label" :for="`clientSurname_${uuid}`">{{
                  $t(`forms.client.add.fieldsets.client.fields.surname.label`)
                }}</label>
                <v-input
                  :id="`clientSurname_${uuid}`"
                  type="text"
                  :placeholder="$t(`forms.client.add.fieldsets.client.fields.surname.placeholder`)"
                ></v-input>
              </div>
              <div class="card-table__field">
                <label class="card-table__label" :for="`clientName_${uuid}`">{{
                  $t(`forms.client.add.fieldsets.client.fields.name.label`)
                }}</label>
                <v-input
                  :id="`clientName_${uuid}`"
                  type="text"
                  :placeholder="$t(`forms.client.add.fieldsets.client.fields.name.placeholder`)"
                ></v-input>
              </div>
              <div class="card-table__field">
                <label class="card-table__label" :for="`clientPatronymic_${uuid}`">{{
                  $t(`forms.client.add.fieldsets.client.fields.patronymic.label`)
                }}</label>
                <v-input
                  :id="`clientPatronymic_${uuid}`"
                  type="text"
                  :placeholder="$t(`forms.client.add.fieldsets.client.fields.patronymic.placeholder`)"
                ></v-input>
              </div>
              <div class="card-table__field">
                <label class="card-table__label" :for="`clientBirthday_${uuid}`">{{
                  $t(`forms.client.add.fieldsets.client.fields.birthday.label`)
                }}</label>
                <v-input
                  :id="`clientBirthday_${uuid}`"
                  type="text"
                  :placeholder="$t(`forms.client.add.fieldsets.client.fields.birthday.placeholder`)"
                ></v-input>
              </div>
              <v-radio-button name="genderType" :input-data="inputData" class="card-table__radio" />
            </div>
          </div>
          <tr>
            <div colspan="4" class="card-table__add">
              <button class="card-table__button card-table__button--add" @click.prevent="addOneMoreChildren">
                + Добавить ребёнка
              </button>
            </div>
          </tr>
        </div>
      </template>
      <template #content>
        <div class="client-main__close" v-if="closeButton">
          <v-close-button @click="close" />
        </div>
      </template>
    </card-table>
  </fieldset>
</template>

<script>
import vInput from '@/components/ui/Fields/InputTable';
import vRadioButton from '@/components/ui/RadioButtons/MainRadioButton';
import { uuid } from 'vue-uuid';
import vCloseButton from '@/components/ui/Buttons/ButtonClose.vue';
import CardTable from '@/components/Common/CardTable.vue';

export default {
  name: 'MainGroupClient',
  components: {
    vInput,
    vCloseButton,
    CardTable,
    vRadioButton,
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
      inputData: [
        {
          id: 0,
          value: 0,
          label: 'Мальчик',
        },
        {
          id: 1,
          value: 1,
          label: 'Девочка',
        },
      ],
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
    padding: 0.4rem 0;

    font-size: 1.4rem;
    white-space: nowrap;

    border-left: 0;
    &:first-child {
      padding-left: 1.8rem;

      text-align: left;
    }
  }
  &__table-title {
    &--name {
      width: 17.6rem;
    }
    &--age {
      width: 7rem;
    }
    &--gender {
      width: 5.2rem;
    }
    &--actions {
      width: 9.4rem;
    }
  }

  &__table-tr {
    display: flex;
    align-items: center;
  }

  &__table-td {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3.8rem;

    border-top: 0;
    border-left: 0;

    &:last-child {
      border-right: 0;
    }

    &--edit {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 1.2rem 1.4rem;

      border-left: 6px solid var(--color-main-light);
    }
  }
  &--name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 17.6rem;
    padding-left: 1.8rem;

    &--surname {
      font-size: 1.2rem;
    }
  }
  &--age {
    width: 7rem;
  }
  &--gender {
    width: 5.2rem;
  }
  &--actions {
    width: 9.4rem;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
  }

  &__name-title {
    width: 17.6rem;
    margin-bottom: 1.4rem;

    text-align: left;
    font-size: 14px;
    font-weight: 700;

    &--surname {
      font-size: 12px;
      font-weight: 500;
    }
  }

  &__actions {
    &-img {
      margin-right: 10px;
      margin-bottom: 10px;

      cursor: pointer;
    }
  }

  &__field {
    position: relative;

    width: 17.1rem;

    margin-bottom: 3.2rem;
    // margin-right: 12px;
  }
  &__label {
    position: absolute;
    top: -0.7rem;
    left: 1rem;

    display: flex;
    padding: 0 0.3rem;

    font-size: 1.2rem;
    text-align: left;

    background-color: var(--color-white);
  }

  &__radio {
    display: flex;
    align-items: center;
  }

  &__button {
    &--add {
      font-size: 1.4rem;
    }
  }
}
</style>
