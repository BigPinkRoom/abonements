<template>
  <div class="field field_input">
    <input
      class="field__input"
      :ref="id"
      :value="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'FieldInput',
  props: {
    id: {
      type: [String, Number],
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
    },
  },
  methods: {
    updateValue(value) {},
  },
};
</script>
<style lang="scss" scoped>
.field {
  &__input {
    width: 100%;
  }
}
</style>
