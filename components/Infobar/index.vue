<template>
  <transition name="transition-infobar" appear>
    <div class="infobar" :class="classes">
      <slot name="message"></slot>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'BarInfo',
  props: {
    id: Number,
    type: String,
    duration: {
      type: Number,
      default: 60000,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    classes() {
      const classes = [];

      if (typeof this.type === 'string' && this.type !== '') {
        classes.push(`infobar__message_${this.type}`);
      }

      return classes;
    },
  },
  created() {
    this.show();
  },
  methods: {
    ...mapMutations('messages', ['remove']),

    show() {
      if (this.duration > 0) {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },

    close() {
      clearTimeout(this.timeout);
      this.remove(this.id);
    },
  },
};
</script>
