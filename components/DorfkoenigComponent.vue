<template>
  <div class="component-dorfkoenig" :id="anchor">
    <h2>Raublinger Dorfkönigschießen</h2>
    <!-- <BaseTextblock>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
      dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet.
    </BaseTextblock>
    <ImageWithText src="logo-large.webp"
      alt="Dorfkönig 1" type="left" height="200" width="200">
      <h3>Überschrift</h3>
      <BaseTextblock>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
      dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet.
    </BaseTextblock>
    </ImageWithText>
    <ImageWithText src="logo-large.webp"
      alt="Dorfkönig 1" type="right" height="200" width="200">
      <h3>Überschrift</h3>
      <BaseTextblock>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
      dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet.
    </BaseTextblock>
    </ImageWithText> -->
    <div class="image-grid">
      <BaseImage src="dorfkoenig/flyer-1.jpg" alt="Dorfkönig Flyer 1" />
      <BaseImage src="dorfkoenig/flyer-2.jpg" alt="Dorfkönig Flyer 2" />
      <BaseImage src="dorfkoenig/flyer-3.jpg" alt="Dorfkönig Flyer 3" />
      <BaseImage src="dorfkoenig/flyer-4.jpg" alt="Dorfkönig Flyer 4" />
    </div>
    <div class="dk-ergebnisse">
      <router-link to="/ergebnisse">Ergebnisse</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    anchor: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .component-dorfkoenig {
    padding: $padding-topbottom $padding-sides;
  }

  .image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    img {
      width: 100%;

      @media all and (min-width: $tablet) {
        width: calc((100% - 16px) / 2);
      }
    }
  }

  .dk-ergebnisse {
    a {
      @include fuzzy-background;
      display: block;
      background-color: $color-green;
      color: $color-white;
      padding: 5px 20px;
      font-size: 2.2rem;
      text-decoration: none;
      transition: $base-transition;
      width: fit-content;
      margin: 25px auto 0;

      &:hover {
        background-color: $color-green-light;
      }
    }
  }
</style>
