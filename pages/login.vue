<template>
  <div class="container">
    <MainForm :fields="loginFields" submit-text="forms.login.submit">
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
