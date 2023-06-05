<template>
  <div class="base-textblock">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .base-textblock {
    padding: 25px 0;
  }
</style>
