<template>
  <div class="container">
    <form-main :fields="loginFields" submit-text="forms.login.submit" @formSubmit="formSubmitHandler">
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
