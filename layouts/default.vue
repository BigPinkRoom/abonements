<template>
  <div class="layout">
    <div class="checkLogin first">{{ $auth.user }}</div>
    <div class="checkLogin green" v-if="$auth.loggedIn">Login!</div>
    <div class="checkLogin red" v-if="!$auth.loggedIn">Not login.</div>
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
import NavBar from '@/components/Navbar';
import InfoBar from '@/components/Infobar';
import api from '~/utils/api';

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
<style>
.checkLogin {
  position: absolute;
  top: 50%;
  z-index: 1000;

  display: block;
  margin-left: 50px;

  font-weight: 700;
  font-size: 30px;
}

.green {
  color: green;
}

.red {
  color: red;
}

.first {
  margin-bottom: 100px;
}
</style>
