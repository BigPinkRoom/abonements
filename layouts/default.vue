<template>
  <div class="layout">
    <div class="layout__infobar">
      <InfoBar v-for="message in allMessages" :id="message.id" :key="message.id" :type="message.type">
        <template #message>
          {{ message.message }}
        </template>
      </InfoBar>
    </div>

    <div class="layout__navbar">
      <NavBar :routes="routes" />
    </div>

    <div class="layout__main">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import api from '@/assets/js/api';
import NavBar from '@/components/Navbar';
import InfoBar from '@/components/Infobar';

export default {
  name: 'LayoutDefault',
  components: {
    InfoBar,
    NavBar,
  },
  data() {
    return {
      routes: [
        {
          code: 'main',
          onlyAdmin: false,
          forRoles: ['employee', 'guest'],
        },
        {
          code: 'signup',
          onlyAdmin: false,
          forRoles: ['guest'],
        },
        {
          code: 'login',
          onlyAdmin: false,
          forRoles: ['employee', 'guest'],
        },
        {
          code: 'logout',
          onlyAdmin: false,
          forRoles: ['employee', 'guest'],
          action: this.logout,
          disabled: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters('messages', ['allMessages']),
  },
  methods: {
    async logout() {
      try {
        const answer = await api.user.logout();
        this.$nuxt.$router.replace({ path: '/' });
        this.$showMessage(answer);
      } catch (error) {
        this.$showError(error);
      }
    },
  },
};
</script>
<style></style>
