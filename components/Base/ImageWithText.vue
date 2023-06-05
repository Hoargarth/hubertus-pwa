<template>
  <div class="image-with-text">
    <div class="image-container" v-if="type === 'left'">
      <BaseImage :src="src" :alt="alt" :width="width" :height="height"/>
    </div>
    <div class="text-container">
      <slot />
    </div>
    <div class="image-container" v-if="type === 'right'">
      <BaseImage :src="src" :alt="alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'left',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .image-with-text {
    display: flex;
    gap: 50px;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 50px;

    @media screen and (min-width: $tablet) {
        flex-direction: row;
    }

    .image-container {
      width: 100vw;
      height: 150px;

      @media screen and (max-width: $mobile) {
        order: 1;
        margin: 0 -25px;
      }

      @media screen and (min-width: $tablet) {
        flex: 0 0 200px;
        width: 200px;
        height: 200px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 1px solid rgba(0,0,0,.1);
      }
    }

    .text-container {
      flex-grow: 1;

      @media screen and (max-width: $mobile) {
        order: 2;
      }
    }
  }
</style>
