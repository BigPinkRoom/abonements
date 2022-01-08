<template>
  <div class="container">
    <form-main :fields="signupFields" submit-text="forms.signup.submit" @formSubmit="showFormSubmit">
      <template #title>{{ $t('forms.signup.title') }}</template>
    </form-main>
  </div>
</template>

<script>
import FormMain from '@/components/ui/Forms/FormMain';

export default {
  name: 'Signup',
  components: {
    FormMain,
  },
  data() {
    return {
      signupFields: [
        {
          idName: 'branch-select',
          name: 'branch',
          type: 'select',
          title: 'forms.login.fields.branch.title',
          placeholder: 'forms.login.fields.branch.placeholder',
          optionsList: [],
        },
        {
          idName: 'signup-email',
          name: 'email',
          type: 'email',
          title: 'forms.signup.fields.email.title',
          placeholder: 'forms.signup.fields.email.placeholder',
        },
        {
          idName: 'signup-password',
          name: 'password',
          type: 'password',
          title: 'forms.signup.fields.password.title',
          placeholder: 'forms.signup.fields.password.placeholder',
        },
        {
          idName: 'signup-password-confirm',
          name: 'passwordConfirm',
          type: 'password',
          title: 'forms.signup.fields.passwordConfirm.title',
          placeholder: 'forms.signup.fields.passwordConfirm.placeholder',
        },
        {
          idName: 'signup-surname',
          name: 'surname',
          type: 'text',
          title: 'forms.signup.fields.surname.title',
          placeholder: 'forms.signup.fields.surname.placeholder',
        },
        {
          idName: 'signup-name',
          name: 'name',
          type: 'text',
          title: 'forms.signup.fields.name.title',
          placeholder: 'forms.signup.fields.name.placeholder',
        },
        {
          idName: 'signup-patronymic',
          name: 'patronymic',
          type: 'text',
          title: 'forms.signup.fields.patronymic.title',
          placeholder: 'forms.signup.fields.patronymic.placeholder',
        },
      ],
    };
  },
  async created() {
    const branchFieldIndex = this.signupFields.findIndex((field) => field.idName === 'branch-select');
    const branchSelectOptions = await this.$services.branches.getSelect();

    this.signupFields[branchFieldIndex].optionsList = branchSelectOptions;
  },
  methods: {
    async showFormSubmit(eventForm) {
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
