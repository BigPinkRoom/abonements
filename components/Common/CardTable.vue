<template>
  <div class="card-table__wrapper">
    <slot name="title"></slot>
    <slot name="table"></slot>
    <slot name="table-title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card-table {
  &__wrapper {
    border-radius: 0.5rem;
  }
  &__title {
    width: 100%;
    padding: 0.8rem 1.8rem;

    border-bottom: 0;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  &__title--green {
    color: var(--color-main);
    font-weight: 600;
    background-color: var(--color-main-lighter);
  }
  &__wrapper--green {
    border: 0.1rem solid var(--color-main-light);
  }

  &__title--pink {
    color: var(--color-main-secondary);
    background-color: var(--color-main-secondary-light-extra);
    border-bottom: 0.1rem solid var(--color-main-secondary-light);
  }
  &__wrapper--pink {
    border: 0.1rem solid var(--color-main-secondary-light);
  }

  &__title--gray {
    color: var(--color-main-tertiary);
    background-color: var(--color-main-tertiary-lightest);
    border-bottom: 0.1rem solid var(--color-main-tertiary-light-extra);
  }
  &__wrapper--gray {
    border: 0.1rem solid var(--color-main-tertiary-light-extra);
  }

  &__table {
    &-title {
      width: 100%;

      text-align: center;
      color: var(--color-main);

      border-collapse: collapse;
      &-td {
        border-top: 0;

        &--green {
          border: 1px solid var(--color-main-light);
          &:last-child {
            border-right: 0;
          }
          &:first-child {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
