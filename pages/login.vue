<template>
  <div class="container">
    <form-main
      :fields="loginFields"
      :selects="loginSelects"
      submit-text="forms.login.submit"
      @formSubmit="formSubmitHandler"
    >
      <template #title>{{ $t('forms.login.title') }}</template>
    </form-main>
  </div>
</template>

<script>
import FormMain from '@/components/ui/Forms/FormMain';

export default {
  name: 'Login',
  components: {
    FormMain,
  },
  data() {
    return {
      loginSelects: [
        {
          idName: 'branch-select',
          name: 'branch',
          title: 'forms.login.fields.branch.title',
          placeholder: 'forms.login.fields.branch.placeholder',
          optionsList: [
            {
              idName: 'branch-options',
              value: 'test text option 1',
              text: 'test text option 1',
              disabled: false,
              selected: false,
            },
          ],
        },
      ],
      loginFields: [
        {
          idName: 'login-value',
          name: 'email',
          type: 'email',
          title: 'forms.login.fields.email.title',
          placeholder: 'forms.login.fields.email.placeholder',
        },
        {
          idName: 'login-password',
          name: 'password',
          type: 'password',
          title: 'forms.login.fields.password.title',
          placeholder: 'forms.login.fields.password.placeholder',
        },
      ],
    };
  },
  async fetch() {},
  methods: {
    async formSubmitHandler(eventForm) {
      const user = this.createModelLogin(eventForm.target.elements);

      await this.$services.auth.login(user);

      if (this.$auth.loggedIn) {
        this.$nuxt.$router.replace({ path: '/' });
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
