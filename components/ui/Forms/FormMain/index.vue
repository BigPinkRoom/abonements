<template>
  <div class="form">
    <form class="form__content" @submit.prevent="emitSubmit">
      <fieldset class="form-content">
        <legend class="form__legend">
          <slot name="title"></slot>
        </legend>

        <ul class="form-content__group">
          <li v-for="select in selects" :key="`${select.idName}_${uuid}`">
            <label :for="select.name" class="form-content__label">
              {{ $t(select.title) }}
            </label>
            <v-select
              :id="`${select.idName}_${uuid}`"
              :name="select.name"
              :optionsList="select.optionsList"
              :placeholder="select.placeholder"
            />
          </li>
          <li v-for="field in fields" :key="`${field.idName}_${uuid}`" class="form-content__item">
            <label :for="field.name" class="form-content__label">
              {{ $t(field.title) }}
            </label>
            <v-input
              :id="`${field.idName}_${uuid}`"
              :name="field.name"
              :placeholder="$t(field.placeholder)"
              :type="field.type"
            />
          </li>
          <v-input type="submit" :value="$t(submitText)" />
        </ul>
      </fieldset>
    </form>
  </div>
</template>
<script>
import { uuid } from 'vue-uuid';
import vSelect from '@/components/ui/Selects/Select';
import vInput from '../../Fields/Input';

export default {
  name: 'Form',
  components: {
    vInput,
    vSelect,
  },
  props: {
    selects: {
      type: Array,
      default: () => [],
    },
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
    return {
      uuid: '',
    };
  },
  methods: {
    emitSubmit(event) {
      this.$emit('formSubmit', event);
    },
  },
  mounted() {
    this.uuid = uuid.v4();
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
