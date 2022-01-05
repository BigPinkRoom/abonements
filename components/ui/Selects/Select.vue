<template>
  <div class="select">
    <select :id="id" :name="name" class="select__field" @input="updateValue($event.target.value)">
      <option v-if="placeholder" disabled selected>
        {{ $t(placeholder) }}
      </option>
      <option
        v-for="option in optionsList"
        :key="option.id"
        :disabled="option.disabled"
        :selected="option.selected"
        :value="option.value"
        class="select__option"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    id: {
      type: [String, Number],
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
      default: () => '',
    },
    optionsList: {
      type: Array,
    },
  },
  methods: {
    updateValue(value) {},
  },
};
</script>
<style lang="scss" scoped>
.select {
  &__field {
    width: 100%;
  }
  &__option {
  }
}
</style>
