<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo-container">
        <NuxtLink to="/" title="Startseite">
          <BaseImage src="logo-large.webp"
            alt="Wappen Hubertus Pfraundorf"
            loading="eager" width="44" height="54"/>
          <span>Startseite</span>
        </NuxtLink>
      </div>
      <nav class="main-navigation"
          :class="isMenuOpen ? 'open' : ''"
          @click="toggleMenu"
          @keypress="menuKey">
        <a href="/#termine">Aktuelles</a>
        <!--- <a href="/#verein">Verein</a> -->
        <a href="/#dorfkoenig">Dorfkönig</a>
        <a href="/#standort">Standort</a>
        <NuxtLink to="/vorstandschaft">Vorstandschaft</NuxtLink>
        <NuxtLink to="/ergebnisse">Ergebnisse</NuxtLink>
      </nav>
      <div class="burger-menu"
          :class="isMenuOpen ? 'open' : ''"
          @click="toggleMenu"
          @keypress="menuKey">
        <div class="icon-left"></div>
        <div class="icon-right"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    menuKey(event) {
      if (event.keyCode === 13) {
        this.toggleMenu();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $burger-color: $color-white;
  $burger-thickness: 5px;
  $burger-size: 20px;

  header {
    @include fuzzy-background;
    background-color: $color-green;
    color: $color-white;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.85);

    @media all and (min-width: $tablet) {
      bottom: unset;
      top: 0;
    }

    .header-inner {
      max-width: $max-page-width;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 0 auto;
      height: 100%;
      padding: 8px 15px;

      @media all and (min-width: $tablet) {
        padding: 8px $padding-sides;
      }
    }

    .logo-container {
      height: 100%;

      img {
        height: 100%;
        width: auto;
      }

      span {
        display: none;
      }
    }

    .main-navigation {
      font-size: 2.4rem;
      display: flex;
      gap: 25px;
      height: 100%;
      align-items: center;
      flex-grow: 1;
      margin-left: 50px;
      transition: all .3s ease-in-out;

      @media all and (max-width: $mobile) {
        @include fuzzy-background;
        background-color: $color-green;
        color: $color-white;
        height: 100vh;
        position: fixed;
        right: -100%;
        top: 0;
        flex-direction: column;
        width: 100%;
        padding: 70px 25px;
        margin: 0;
      }

      &.open {
        @media all and (max-width: $mobile) {
          right: 0;
        }
      }

      a {
        text-decoration: none;
        color: $color-white;

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
    }

    .burger-menu {
      width: $burger-size;
      height: $burger-size;
      transition-duration: 0.5s;
      position: relative;
      top: 4px;
      transform: translateX(-100%);

      @media all and (min-width: $tablet) {
        display: none;
      }

      .icon-left {
        transition-duration: 0.5s;
        position: absolute;
        height: $burger-thickness;
        width: $burger-size;
        top: $burger-size;
        background-color: $burger-color;
        left: 0px;

        &:before{
          transition-duration: 0.5s;
          position: absolute;
          width: $burger-size;
          height: $burger-thickness;
          background-color: $burger-color;
          content: "";
          top: -15px;
        }

        &:after{
          transition-duration: 0.5s;
          position: absolute;
          width: $burger-size;
          height: $burger-thickness;
          background-color: $burger-color;
          content: "";
          top: 15px;
        }

        &:hover{
          cursor: pointer;
        }
      }

      .icon-right {
        transition-duration: 0.5s;
        position: absolute;
        height: $burger-thickness;
        width: $burger-size;
        top: $burger-size;
        background-color: $burger-color;
        left: $burger-size;

        &:before{
          transition-duration: 0.5s;
          position: absolute;
          width: $burger-size;
          height: $burger-thickness;
          background-color: $burger-color;
          content: "";
          top: -15px;
        }

        &:after{
          transition-duration: 0.5s;
          position: absolute;
          width: $burger-size;
          height: $burger-thickness;
          background-color: $burger-color;
          content: "";
          top: 15px;
        }
      }

      &.open {
        .icon-left {
          transition-duration: 0.5s;
          background: transparent;

          &:before{
            transform: rotateZ(45deg) scaleX(1.4) translate(4px, 4px);
          }

          &:after{
            transform: rotateZ(-45deg) scaleX(1.4) translate(4px, -4px);
          }
        }

        .icon-right {
          transition-duration: 0.5s;
          background: transparent;

          &:before{
            transform: rotateZ(-45deg) scaleX(1.4) translate(-4px, 4px);
          }

          &:after{
            transform: rotateZ(45deg) scaleX(1.4) translate(-4px, -4px);
          }
        }
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
