<template>
  <div class="container">
    <form-main :fields="signupFields" submit-text="forms.signup.submit" @formSubmit="showFormSubmit">
      <template #title>{{ $t('forms.signup.title') }}</template>
    </form-main>
  </div>
</template>

<script>
import FormMain from '@/components/ui/Forms/FormMain';
// import api from '~/utils/api';

export default {
  name: 'Signup',
  components: {
    FormMain,
  },
  data() {
    return {
      signupFields: [
        {
          id: 1,
          name: 'email',
          type: 'email',
          title: 'forms.signup.fields.email.title',
          placeholder: 'forms.signup.fields.email.placeholder',
        },
        {
          id: 2,
          name: 'password',
          type: 'password',
          title: 'forms.signup.fields.password.title',
          placeholder: 'forms.signup.fields.password.placeholder',
        },
        {
          id: 3,
          name: 'passwordConfirm',
          type: 'password',
          title: 'forms.signup.fields.passwordConfirm.title',
          placeholder: 'forms.signup.fields.passwordConfirm.placeholder',
        },
        {
          id: 4,
          name: 'surname',
          type: 'text',
          title: 'forms.signup.fields.surname.title',
          placeholder: 'forms.signup.fields.surname.placeholder',
        },
        {
          id: 5,
          name: 'name',
          type: 'text',
          title: 'forms.signup.fields.name.title',
          placeholder: 'forms.signup.fields.name.placeholder',
        },
        {
          id: 6,
          name: 'patronymic',
          type: 'text',
          title: 'forms.signup.fields.patronymic.title',
          placeholder: 'forms.signup.fields.patronymic.placeholder',
        },
      ],
    };
  },
  methods: {
    async showFormSubmit(eventForm) {
      const newUser = this.createModelSignup(eventForm.target.elements);

      try {
        const answer = await this.$api.user.signup(newUser);

        console.log('sing up answer', answer);

        this.$showMessage(answer);
      } catch (error) {
        this.$showError(error);
      }
    },

    createModelSignup(fields) {
      const model = {};

      fields.forEach((item) => {
        if (item.name) {
          model[item.name] = item.value;
        }
      });

      return model;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 2.5rem);

  background-color: #ccc;
}

.title {
  color: #eee;
  font-size: 2rem;
  font-family: Arial, sans-serif;

  text-transform: uppercase;
  text-decoration: none;
}
</style>
