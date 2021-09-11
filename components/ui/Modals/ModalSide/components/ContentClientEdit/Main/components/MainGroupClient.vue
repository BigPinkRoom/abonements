<template>
  <fieldset class="client-main__fieldset">
    <legend>{{ $t(`forms.client.${actionType}.fieldsets.client.label`) }}</legend>

    <label for="clientName">{{ $t(`forms.client.${actionType}.fieldsets.client.fields.name.label`) }}</label>
    <v-input
      id="clientName"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.name.placeholder`)"
    ></v-input>

    <label for="clientSurname">{{ $t(`forms.client.${actionType}.fieldsets.client.fields.surname.label`) }}</label>
    <v-input
      id="clientSurname"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.surname.placeholder`)"
    ></v-input>

    <label for="clientPatronymic">{{
      $t(`forms.client.${actionType}.fieldsets.client.fields.patronymic.label`)
    }}</label>
    <v-input
      id="clientPatronymic"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.patronymic.placeholder`)"
    ></v-input>

    <label for="clientGender">{{ $t(`forms.client.${actionType}.fieldsets.client.fields.gender.label`) }}</label>
    <v-input id="clientGender" type="text"></v-input>

    <label for="clientAddress">{{ $t(`forms.client.${actionType}.fieldsets.client.fields.address.label`) }}</label>
    <v-input
      id="clientAddress"
      type="text"
      :placeholder="$t(`forms.client.${actionType}.fieldsets.client.fields.address.placeholder`)"
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
};
</script>
