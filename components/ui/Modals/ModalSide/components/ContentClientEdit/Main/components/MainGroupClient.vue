<template>
  <fieldset class="client-main__fieldset">
    <legend>{{ $t(`forms.client.${actionType}.fieldsets.client.label`) }}</legend>

    <label :for="`clientSurname_${uuid}`">{{
      $t(`forms.client.${actionType}.fieldsets.client.fields.surname.label`)
    }}</label>
    <v-input
      :id="`clientSurname_${uuid}`"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.surname.placeholder`)"
    ></v-input>

    <label :for="`clientName_${uuid}`">{{ $t(`forms.client.${actionType}.fieldsets.client.fields.name.label`) }}</label>
    <v-input
      :id="`clientName_${uuid}`"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.name.placeholder`)"
    ></v-input>

    <label :for="`clientPatronymic_${uuid}`">{{
      $t(`forms.client.${actionType}.fieldsets.client.fields.patronymic.label`)
    }}</label>
    <v-input
      :id="`clientPatronymic_${uuid}`"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.patronymic.placeholder`)"
    ></v-input>

    <label :for="`clientBirthday_${uuid}`">{{
      $t(`forms.client.${actionType}.fieldsets.client.fields.birthday.label`)
    }}</label>
    <v-input
      :id="`clientBirthday_${uuid}`"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.birthday.placeholder`)"
    ></v-input>
  </fieldset>
</template>

<script>
import vInput from '@/components/ui/Fields/Input';
import { uuid } from 'vue-uuid';

export default {
  name: 'MainGroupClient',
  components: {
    vInput,
  },
  props: {
    actionType: {
      type: String,
    },
  },
  data() {
    return {
      uuid: '',
    };
  },
  mounted() {
    this.uuid = uuid.v4();
  },
};
</script>
