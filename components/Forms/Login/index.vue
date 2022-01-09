<template>
  <form class="form" @submit.prevent="emitSubmit">
    <h1 class="form__title">{{ $t('forms.login.title') }}</h1>

    <div class="form__item">
      <label :for="`login-branch-select_${uuid}`" class="form__label">
        {{ $t('forms.login.fields.branch.title') }}
      </label>
      <v-select
        :id="`login-branch-select_${uuid}`"
        :options-list="branchOptionsList"
        :placeholder="$t('forms.login.fields.branch.placeholder')"
        name="branch"
      />
    </div>

    <div class="form__item">
      <label :for="`login-email_${uuid}`" class="form__label">
        {{ $t('forms.login.fields.email.title') }}
      </label>
      <v-input
        :id="`login-email_${uuid}`"
        :placeholder="$t('forms.login.fields.email.placeholder')"
        name="email"
        type="email"
      />
    </div>

    <div class="form__item">
      <label :for="`login-password_${uuid}`" class="form__label">
        {{ $t('forms.login.fields.password.title') }}
      </label>
      <v-input
        :id="`login-password_${uuid}`"
        :placeholder="$t('forms.login.fields.password.placeholder')"
        name="password"
        type="password"
      />
    </div>

    <v-input type="submit" :value="$t('forms.login.submit')" />
  </form>
</template>
<script>
import { uuid } from 'vue-uuid';
import vSelect from '@/components/ui/Selects/Select';
import vInput from '@/components/ui/Fields/Input';

export default {
  name: 'Form',
  components: {
    vInput,
    vSelect,
  },
  props: {
    branchOptionsList: {
      type: Array,
      default() {
        return [];
      },
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

  &__item {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__label {
    margin-bottom: 0.25rem;
  }
}
</style>
