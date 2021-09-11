<template>
  <fieldset class="client-main__fieldset client-main-abonement">
    <legend>{{ $t(`forms.client.${actionType}.fieldsets.abonement.label`) }}</legend>

    <div class="client-main-abonement__row">
      <div class="client-main-abonement__column">
        <label for="abonementId">{{ $t(`forms.client.${actionType}.fieldsets.abonement.fields.id.label`) }}</label>
        <v-input id="abonementId" type="number"></v-input>
      </div>
      <div class="client-main-abonement__column">
        <label for="abonementQuantity">{{
          $t(`forms.client.${actionType}.fieldsets.abonement.fields.quantity.label`)
        }}</label>
        <v-input id="abonementQuantity" type="number"></v-input>
      </div>
    </div>

    <div class="client-main-abonement__row">
      <div class="client-main-abonement__column">
        <label for="abonementStart">
          {{ $t(`forms.client.${actionType}.fieldsets.abonement.fields.startDate.label`) }}
        </label>
        <v-input id="abonementStart" type="number"></v-input>
      </div>
      <div class="client-main-abonement__column">
        <label for="abonementEnd">
          {{ $t(`forms.client.${actionType}.fieldsets.abonement.fields.endDate.label`) }}
        </label>
        <v-input id="abonementEnd" type="number"></v-input>
      </div>
    </div>
  </fieldset>
</template>

<script>
import vInput from '@/components/ui/Fields/Input';

export default {
  name: 'MainGroupAbonements',
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
