<template>
  <div class="container">
    <MainForm :fields="signupFields" submit-text="forms.signup.submit" @formSubmit="showFormSubmit">
      <template #title>{{ $t('forms.signup.title') }}</template>
    </MainForm>
  </div>
</template>

<script>
import MainForm from '@/components/ui/Forms/MainForm';
import api from '@/assets/js/api';

export default {
  name: 'Signup',
  components: {
    MainForm,
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
      ],
    };
  },
  methods: {
    async showFormSubmit(eventForm) {
      const newUser = this.createModelSignup(eventForm.target.elements);

      try {
        const answer = await api.user.signup(newUser);
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
