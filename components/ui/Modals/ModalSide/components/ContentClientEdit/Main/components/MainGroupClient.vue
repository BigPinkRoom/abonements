<template>
  <fieldset class="client-main__fieldset">
    <legend>{{ $t(`forms.client.${actionType}.fieldsets.client.label`) }}</legend>

    <label :for="`clientSurname_${_uid}`">{{
      $t(`forms.client.${actionType}.fieldsets.client.fields.surname.label`)
    }}</label>
    <v-input
      :id="`clientSurname_${_uid}`"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.surname.placeholder`)"
    ></v-input>

    <label :for="`clientName_${_uid}`">{{ $t(`forms.client.${actionType}.fieldsets.client.fields.name.label`) }}</label>
    <v-input
      :id="`clientName_${_uid}`"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.name.placeholder`)"
    ></v-input>

    <label :for="`clientPatronymic_${_uid}`">{{
      $t(`forms.client.${actionType}.fieldsets.client.fields.patronymic.label`)
    }}</label>
    <v-input
      :id="`clientPatronymic_${_uid}`"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.patronymic.placeholder`)"
    ></v-input>

    <label :for="`clientBirthday_${_uid}`">{{
      $t(`forms.client.${actionType}.fieldsets.client.fields.birthday.label`)
    }}</label>
    <v-input
      :id="`clientBirthday_${_uid}`"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.birthday.placeholder`)"
    ></v-input>
  </fieldset>
</template>

<script>
import vInput from '@/components/ui/Fields/Input';

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
    return {};
  },
};
</script>
