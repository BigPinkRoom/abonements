<template>
  <div class="navbar">
    <div class="navbar__left"></div>
    <div class="navbar__right">
      <div v-for="route in routes" :key="route.code" class="navbar__item">
        <nuxt-link :to="localePath(route.code)" :event="route.disabled ? '' : 'click'" @click.native="startAction(route.action)">
          {{ $t(`pages.${route.code}.title`) }}
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
  methods: {
    startAction(action) {
      if (action) action();
    },
  },
};
</script>
