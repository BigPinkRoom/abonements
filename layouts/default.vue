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
import NavBar from '@/components/Navbar';
import InfoBar from '@/components/Infobar';
import { routesConstants } from '@/constants/routes';
import { rolesConstants } from '@/constants/roles';

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
          name: 'Test API',
          forRoles: [rolesConstants.EMPLOYEE_ROLE_NAME],
          action: this.testApi,
          disabledRouteEvent: true,
        },
        {
          name: routesConstants.MAIN_PAGE_ROUTE_NAME,
          forRoles: [rolesConstants.EMPLOYEE_ROLE_NAME, rolesConstants.GUEST_ROLE_NAME],
        },
        {
          name: routesConstants.SIGNUP_ROUTE_NAME,
          forRoles: [rolesConstants.GUEST_ROLE_NAME],
        },
        {
          name: routesConstants.LOGIN_ROUTE_NAME,
          forRoles: [rolesConstants.GUEST_ROLE_NAME],
        },
        {
          name: routesConstants.PROFILE_ROUTE_NAME,
          forRoles: [rolesConstants.EMPLOYEE_ROLE_NAME],
        },
        {
          name: routesConstants.LOGOUT_ROUTE_NAME,
          forRoles: [rolesConstants.EMPLOYEE_ROLE_NAME],
          action: this.logout,
          disabledRouteEvent: true,
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
        const answer = await this.$api.user.logout();
        // this.$nuxt.$router.replace({ path: '/' });
        this.$showMessage(answer);
      } catch (error) {
        this.$showError(error);
      }
    },

    async testApi() {
      try {
        const answer = await this.$api.client.getClients({
          params: {
            sortings: [
              { name: 'name', type: 'ASC' },
              // { name: 'surname', type: 'ASC' },
            ],
          },
        });
        // this.$nuxt.$router.replace({ path: '/' });
        this.$showMessage(answer);
      } catch (error) {
        this.$showError(error);
      }
    },

    // TODO
    testChangeTheme() {
      document.documentElement.dataset.theme === 'dark'
        ? (document.documentElement.dataset.theme = 'light')
        : (document.documentElement.dataset.theme = 'dark');
    },
  },
};
</script>
<style lang="scss">
.layout {
  height: 100vh;

  &__infobar {
    position: fixed;
    top: 2.5rem;

    width: 100%;
  }

  &__navbar {
  }

  &__main {
  }
}
</style>
