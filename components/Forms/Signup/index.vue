<template>
  <form class="form" @submit.prevent="emitSubmit">
    <h1 class="form__title">{{ $t('forms.signup.title') }}</h1>

    <p class="form__item">
      <label :for="`signup-branch-select_${uuid}`" class="form__label">
        {{ $t('forms.signup.fields.branch.title') }}
      </label>
      <v-select
        :id="`signup-branch-select_${uuid}`"
        :options-list="branchOptionsList"
        :placeholder="$t('forms.signup.fields.branch.placeholder')"
        name="branch"
      />
    </p>

    <p class="form__item">
      <label :for="`signup-email_${uuid}`" class="form__label">
        {{ $t('forms.signup.fields.email.title') }}
      </label>
      <v-input
        :id="`signup-email_${uuid}`"
        :placeholder="$t('forms.signup.fields.email.placeholder')"
        name="email"
        type="email"
      />
    </p>

    <p class="form__item">
      <label :for="`signup-password_${uuid}`" class="form__label">
        {{ $t('forms.signup.fields.password.title') }}
      </label>
      <v-input
        :id="`signup-password_${uuid}`"
        :placeholder="$t('forms.signup.fields.password.placeholder')"
        name="password"
        type="password"
      />
    </p>

    <p class="form__item">
      <label :for="`signup-password-confirm_${uuid}`" class="form__label">
        {{ $t('forms.signup.fields.passwordConfirm.title') }}
      </label>
      <v-input
        :id="`signup-password-confirm_${uuid}`"
        :placeholder="$t('forms.signup.fields.passwordConfirm.placeholder')"
        name="password-confirm"
        type="password"
      />
    </p>

    <p class="form__item">
      <label :for="`signup-surname_${uuid}`" class="form__label">
        {{ $t('forms.signup.fields.surname.title') }}
      </label>
      <v-input
        :id="`signup-surname_${uuid}`"
        :placeholder="$t('forms.signup.fields.surname.placeholder')"
        name="surname"
        type="text"
      />
    </p>

    <p class="form__item">
      <label :for="`signup-name_${uuid}`" class="form__label">
        {{ $t('forms.signup.fields.name.title') }}
      </label>
      <v-input
        :id="`signup-name_${uuid}`"
        :placeholder="$t('forms.signup.fields.name.placeholder')"
        name="name"
        type="text"
      />
    </p>
    <p class="form__item">
      <label :for="`signup-patronymic_${uuid}`" class="form__label">
        {{ $t('forms.signup.fields.patronymic.title') }}
      </label>
      <v-input
        :id="`signup-patronymic_${uuid}`"
        :placeholder="$t('forms.signup.fields.patronymic.placeholder')"
        name="patronymic"
        type="text"
      />
    </p>

    <v-input type="submit" :value="$t('forms.signup.submit')" />
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
