<template>
  <div class="container">
    <v-signup-form :branch-options-list="branchesSelectList" @formSubmit="formSubmitHandler" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Signup from '@/components/Forms/Signup';

export default {
  name: 'Signup',
  middleware: 'auth-guest-access',
  components: {
    vSignupForm: Signup,
  },
  computed: {
    ...mapGetters('branches', ['branchesSelectList']),
  },
  methods: {
    async formSubmitHandler(eventForm) {
      const newUser = this.createModelSignup(eventForm.target.elements);

      const answer = await this.$services.auth.signup(newUser);

      if (answer) {
        this.$nuxt.$router.replace({ path: '/login' });
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
