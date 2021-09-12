<template>
  <div class="radio-button" :class="classObject">
    <div class="radio-button__item" v-for="buttonData in inputData" :key="buttonData.id">
      <label :for="buttonData.id">
        <input
          :id="buttonData.id"
          :name="name"
          :value="buttonData.value"
          class="radio-button__input"
          type="radio"
          @input="updateValue($event.target.value)"
        />

        {{ buttonData.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    inputData: {
      type: Array,
      require: true,
    },
    name: {
      type: String,
    },
    direction: {
      type: String,
      default() {
        return 'row';
      },
    },
  },
  computed: {
    classObject() {
      const obj = {
        'radio-button_row': this.direction === 'row',
        'radio-button_column': this.direction === 'column',
      };

      return obj;
    },
  },
  methods: {
    updateValue(value) {},
  },
};
</script>
<style lang="scss" scoped>
.radio-button {
  display: flex;

  &_row {
    flex-direction: row;
  }

  &_column {
    flex-direction: column;
  }

  &__item {
    margin-right: 0.75rem;
  }

  &__item:last-child {
    margin-right: 0;
  }
}
</style>
