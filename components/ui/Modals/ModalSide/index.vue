<template>
  <div class="side-modal" :class="classObject">
    <h2 class="side-modal__title">
      {{ title }}
    </h2>
    <div class="side-modal__content">
      <slot name="content"></slot>
    </div>
    <div class="side-modal__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideModal',
  props: {
    title: {
      type: String,
      require: true,
    },
    styleType: {
      type: String,
    },
    sticky: {
      type: Boolean,
    },
    position: {
      type: String,
      require: true,
      default() {
        return 'left';
      },
    },
  },
  computed: {
    classObject() {
      const obj = {
        'side-modal_sticky': this.sticky,
        [this.styleType]: this.styleType,
      };

      if (this.position === 'left') {
        obj['side-modal_left'] = true;
      } else if (this.position === 'right') {
        obj['side-modal_right'] = true;
      }

      return obj;
    },
  },
  mounted() {
    window.addEventListener('keydown', this.keyEscapeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyEscapeHandler);
  },
  methods: {
    keyEscapeHandler(event) {
      if (event.code === 'Escape') {
        this.$emit('close');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.side-modal {
  position: fixed;

  flex-shrink: 0;
  width: 300px;
  height: 100%;

  background-color: #fff;

  &_sticky {
    position: sticky;

    margin-right: 1rem;
  }

  &_left {
    left: 0;

    box-shadow: 9px 0px 15px -5px rgba(34, 60, 80, 0.2);
  }

  &_right {
    right: 0;
  }

  &_title {
  }
}
</style>
