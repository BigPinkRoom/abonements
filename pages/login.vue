<template>
  <div class="container">
    <MainForm :fields="loginFields" submitText="forms.login.submit">
      <template #title>{{ $t('forms.login.title') }}</template>
    </MainForm>
  </div>
</template>

<script>
import MainForm from '@/components/Forms/MainForm';

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
          placeholder: 'forms.login.fields.email.placeholder',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

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
