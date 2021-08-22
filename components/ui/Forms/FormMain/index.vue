<template>
  <div class="form">
    <form class="form__content" @submit.prevent="emitSubmit">
      <fieldset class="form-content">
        <legend class="form__legend">
          <slot name="title"></slot>
        </legend>

        <ul class="form-content__group">
          <li v-for="field in fields" :key="field.id" class="form-content__item">
            <label :for="field.name" class="form-content__label">
              {{ $t(field.title) }}
            </label>
            <v-input :id="field.id" :name="field.name" :placeholder="$t(field.placeholder)" :type="field.type" />
          </li>
          <v-input type="submit" :value="$t(submitText)" />
        </ul>
      </fieldset>
    </form>
  </div>
</template>
<script>
import vInput from '../../Fields/Input';

export default {
  name: 'Form',
  components: {
    vInput,
  },
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    submitText: {
      type: String,
      default: 'forms.login.submit',
    },
  },
  data() {
    return {};
  },
  methods: {
    emitSubmit(event) {
      this.$emit('formSubmit', event);
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.form-content {
  display: flex;
  flex-direction: column;

  &__group {
    display: block;
    margin-left: 0;
    padding-left: 0;

    list-style-type: none;
  }

  &__item {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }

  &__label {
    margin-bottom: 0.25rem;
  }
}
</style>
