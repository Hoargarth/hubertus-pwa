<template>
  <nuxt-img
    :src="`/images/${src}`"
    :alt="alt"
    :title="alt"
    :loading="loading"
    :decoding="decoding"
    :class="classes"
    :width="width"
    :height="height"
    format="webp"
  />
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
    loading: {
      type: String,
      default: 'lazy',
    },
    decoding: {
      type: String,
      default: 'async',
    },
    classes: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      defaut: '',
    },
  },
};
</script>