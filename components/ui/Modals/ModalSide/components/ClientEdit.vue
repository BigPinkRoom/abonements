<template>
  <div>
    <v-input type="password"></v-input>
    <v-input type="password"></v-input>
    <v-input type="password"></v-input>
    <v-input type="password"></v-input>
    <v-input type="password"></v-input>
  </div>
</template>

<script>
import vInput from '@/components/ui/Fields/Input';

export default {
  name: 'ClientEdit',
  components: {
    vInput,
  },
};
</script>

<style lang="scss" scoped></style>
