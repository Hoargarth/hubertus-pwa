<template>
  <div
    class="component-header"
    :style="backgroundStyles">
    <BaseImage src="logo-large.webp"
      alt="Wappen Hubertus Pfraundorf"
      loading="eager" width="200" height="245"/>
    <h1>SG "Hubertus" Pfraundorf e.V.</h1>
    <div v-if="showScrollDown" class="scroll-down">
      <a href="#termine"><span></span>Scroll</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#226700',
    },
    showScrollDown: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    backgroundStyles() {
      return `background-color:${this.backgroundColor};`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1,h2,h3,h4 {
    color: $color-white;
    filter: drop-shadow(4px 6px 6px #000000dd);
  }

  img {
    margin-bottom: 25px;
    width: 200px;
    filter: drop-shadow(0 10px 6px #00000066);
    object-fit: contain;
  }

  .component-header {
    @include fuzzy-background;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 $padding-sides;
    text-align: center;
    position: relative;

    @media all and (max-width: $mobile) {
      img {
        margin-top: -250px;
      }
    }

    @media all and (min-width: $tablet) {
      height: 100vh;
    }
  }

  .scroll-down {
    position: absolute;
    bottom: 150px;
    z-index: 2;

    @media all and (min-width: $tablet) {
      bottom: 20px;
    }

    a {
      padding-top: 70px;
      display: inline-block;
      transform: translate(0, -50%);
      color: transparent;
      transition: opacity .3s;

      span {
        position: absolute;
        top: 0;
        left: 50%;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotate(-45deg);
        animation: sdb05 1.5s infinite;
        box-sizing: border-box;
      }
    }
  }

  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
</style>
