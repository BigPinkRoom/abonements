<template>
  <div class="form">
    <form class="form__content">
      <fieldset class="form-content">
        <legend class="form__legend">
          <slot name="title"></slot>
        </legend>

        <ul class="form-content__group">
          <li v-for="field in fields" :key="field.id" class="form-content__item">
            <label :for="field.name" class="form-content__label">
              {{ $t(field.title) }}
            </label>
            <input :id="field.id" :name="field.name" :placeholder="$t(field.placeholder)" :type="field.type" class="form-content__input" />
          </li>
          <input type="submit" :value="$t(submitText)" />
        </ul>
      </fieldset>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Form',
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
};
</script>
