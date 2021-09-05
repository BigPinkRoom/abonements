<template>
  <form>
    <fieldset>
      <label for="mainName">{{ $t(`forms.client.${actionType}.fields.name.label`) }}</label>
      <v-input
        id="mainName"
        type="text"
        :placeholder="$t(`forms.client.${actionType}.fields.name.placeholder`)"
      ></v-input>

      <label for="mainSurname">{{ $t(`forms.client.${actionType}.fields.surname.label`) }}</label>
      <v-input
        id="mainSurname"
        type="text"
        :placeholder="$t(`forms.client.${actionType}.fields.surname.placeholder`)"
      ></v-input>

      <label for="mainPatronymic">{{ $t(`forms.client.${actionType}.fields.patronymic.label`) }}</label>
      <v-input
        id="mainPatronymic"
        type="text"
        :placeholder="$t(`forms.client.${actionType}.fields.patronymic.placeholder`)"
      ></v-input>
    </fieldset>
  </form>
</template>

<script>
import vInput from '@/components/ui/Fields/Input';

export default {
  name: 'ClientEdit',
  components: {
    vInput,
  },
  props: {
    clientData: {
      type: Object,
    },
  },
  computed: {
    actionType() {
      return this.clientData ? 'edit' : 'add';
    },
  },
};
</script>

<style lang="scss" scoped></style>
