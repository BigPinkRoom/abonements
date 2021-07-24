<template>
  <div class="container">
    <table>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
