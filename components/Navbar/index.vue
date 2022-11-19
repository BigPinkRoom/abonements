<template>
  <div class="navbar">
    <div class="navbar__left"></div>
    <div class="navbar__right">
      <div v-for="route in checkedRoutes" :key="route.name" class="navbar__item">
        <nuxt-link
          :to="localePath(route.name)"
          :event="route.disabledRouteEvent ? '' : 'click'"
          @click.native="startAction(route.action)"
        >
          {{ $t(`pages.${route.name}.title`) }}
        </nuxt-link>
      </div>
      <select id="" v-model="$i18n.locale" class="test__dropdown" name="">
        <option v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code">
          {{ lang.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    checkedRoutes() {
      const checkedRoutes = [];

      this.routes.forEach((route) => {
        let check = false;

        if (this.$auth.loggedIn) {
          check = route.forRoles.find((role) => role === this.$auth.user.user_role);
        }

        if (!this.$auth.loggedIn) {
          check = route.forRoles.find((role) => role === 'guest');
        }

        if (check) {
          checkedRoutes.push(route);
        }
      });

      return checkedRoutes;
    },
  },
  methods: {
    startAction(action) {
      if (action) action();
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  width: 100%;
  padding: 1.2rem 1rem;

  background-color: var(--color-main);

  &__right {
    display: flex;
    flex-direction: row;
    margin-left: auto;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1.25rem;

    color: var(--color-main);
    text-transform: uppercase;

    &:last-child {
      margin-right: 0;
    }

    & a {
      color: var(--color-white);
      line-height: 1.35;
      text-decoration: none;
    }
  }
}
</style>
