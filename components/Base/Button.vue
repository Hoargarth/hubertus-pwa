<template>
  <a class="action" :href="href" :target="target">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '/',
    },
    target: {
      type: String,
      default: '_self',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .action {
    @include fuzzy-background;
    display: block;
    background-color: $color-green;
    color: $color-white;
    padding: 5px 20px;
    font-size: 2.2rem;
    text-decoration: none;
    transition: $base-transition;

    &:hover {
      background-color: $color-green-light;
    }
  }
</style>
