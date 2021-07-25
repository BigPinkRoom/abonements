<template>
  <div class="container">
    <MainForm :fields="loginFields" submit-text="forms.login.submit" @formSubmit="formSubmitHandler">
      <template #title>{{ $t('forms.login.title') }}</template>
    </MainForm>
  </div>
</template>

<script>
import MainForm from '@/components/ui/Forms/MainForm';

export default {
  name: 'Login',
  components: {
    MainForm,
  },
  data() {
    return {
      loginFields: [
        {
          id: 1,
          name: 'email',
          type: 'email',
          title: 'forms.login.fields.email.title',
          placeholder: 'forms.login.fields.email.placeholder',
        },
        {
          id: 2,
          name: 'password',
          type: 'password',
          title: 'forms.login.fields.password.title',
          placeholder: 'forms.login.fields.password.placeholder',
        },
      ],
    };
  },
  methods: {
    async formSubmitHandler(eventForm) {
      const loginUser = this.createModelLogin(eventForm.target.elements);

      try {
        // const answer = await this.$api.user.signup(newUser);

        const answer = await this.$auth.loginWith('cookie', {
          data: loginUser,
        });

        this.$showMessage(answer);
      } catch (error) {
        this.$showError(error.response.data.error.message);
      }
    },

    createModelLogin(fields) {
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
