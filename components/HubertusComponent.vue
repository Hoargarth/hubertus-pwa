<template>
  <div class="component-hubertus" :id="anchor">
    <h2>Schützengilde "Hubertus" Pfraundorf</h2>
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

    <div class="content-tiles" ref="contenttiles">
      <div class="tile-actions">
        <div class="tile-action" :class="checkIndexActive(0) ? 'active' : ''">Mitgliedschaft</div>
        <div class="tile-action" :class="checkIndexActive(1) ? 'active' : ''">Ausstattung</div>
        <div class="tile-action" :class="checkIndexActive(2) ? 'active' : ''">Vorstandschaft</div>
      </div>
      <div class="tile-contents">
        <div class="tile-content" :class="checkIndexActive(0) ? 'active' : ''">
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
        </div>
        <div class="tile-content" :class="checkIndexActive(1) ? 'active' : ''">
          <BaseTextblock>
            bbbbbLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
          </BaseTextblock>
        </div>
        <div class="tile-content" :class="checkIndexActive(2) ? 'active' : ''">
          <BaseTextblock>
            aaaaaLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
          </BaseTextblock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTileIndex: 0,
    };
  },
  props: {
    anchor: {
      type: String,
      default: '',
    },
  },
  methods: {
    checkIndexActive(index) {
      const thisIndex = index;
      return thisIndex === this.activeTileIndex;
    },
  },
  mounted() {
    const tileComponent = this.$refs.contenttiles;
    const tileActions = tileComponent.querySelectorAll('.tile-action');

    tileActions.forEach((tile, index) => {
      tile.addEventListener('click', () => {
        this.activeTileIndex = index;
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .component-hubertus {
    padding: $padding-topbottom $padding-sides;
  }

  .content-tiles {
    .tile-actions {
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      @media all and (min-width: $tablet) {
        flex-direction: row;
        gap: 25px;
      }
    }

    .tile-action {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $color-white;
      background-color: $color-green;
      cursor: pointer;
      transition: $base-transition;
      font-size: 2rem;
      padding: 8px 0;
      @include fuzzy-background();

      @media all and (min-width: $tablet) {
        width: 200px;
        height: 200px;
        padding: 0;
      }

      &.active,
      &:hover {
        background-color: $color-green-light;
        text-decoration: underline;
      }
    }

    .tile-content {
      display: none;

      &.active {
        display: block;
      }
    }
  }
</style>
