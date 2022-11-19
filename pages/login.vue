<template>
  <div class="container">
    <v-login-form :branch-options-list="branchesSelectList" @formSubmit="formSubmitHandler" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '@/components/Forms/Login';

export default {
  name: 'Login',
  middleware: 'auth-guest-access',
  components: {
    vLoginForm: Login,
  },
  computed: {
    ...mapGetters('branches', ['branchesSelectList']),
  },
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
  height: calc(100vh - 4rem);

  background-color: #ccc;
}

.title {
  color: #eee;
  font-size: 3.2rem;
  font-family: Arial, sans-serif;

  text-transform: uppercase;
  text-decoration: none;
}
</style>
