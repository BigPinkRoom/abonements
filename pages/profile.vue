<template>
  <div class="container">
    <div class="checkLogin first" v-if="$auth.user">{{ $auth.user.email }}</div>
    <div class="checkLogin green" v-if="$auth.loggedIn">
      Login!
      <button @click="testChangeTheme">dark theme</button>
    </div>
    <div class="checkLogin red" v-if="!$auth.loggedIn">Not login.</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  middleware: 'auth-employee-access',
  data() {
    return {};
  },
  async fetch() {},
  computed: {},
  methods: {},
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

  background-color: var(--color-white);
}

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
  top: 40%;
}
</style>
