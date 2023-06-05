<template>
  <div class="component-location" :id="anchor">
    <h2>Standort</h2>
    <div class="standort-address">
      <h3>Adresse</h3>
      <p>Hoppenbichlstraße3<br>83064 Pfraundorf</p>
      <p>Eingang befindet sich rechts vom Haus der Vereine<br>
        Parkmöglichkeiten gibt es direkt vor dem Gebäude oder am Kirchenparkplatz</p>
    </div>
    <div class="open-map">
      <!-- Todo: add openstreetmap to cookie banner -->
      <iframe
        v-if="acceptOpenStreetMap"
        title="SG Hubertus Pfraundorf e.V"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=12.115444242954254%2C47.802911663819685%2C12.118984758853912%2C47.80450785161765&amp;layer=mapnik&amp;marker=47.80370976384961%2C12.117214500904083"
      >
      </iframe>
      <div v-else class="map-fallback">
        <div class="fallback-note">
          <p>Aus Datenschutzgründen siehst Du nur ein Vorschaubild der Karte.
            Bitte drücke auf "Karte Anzeigen" wenn Du damit einverstanden bist,
            dass die Karte von openstreetmap.org
            geladen wird und Du deren
            <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy">Datenschutzerklärung</a>
            (englisch) akzeptierst.
          </p>
          <button @click="acceptOpenStreetMap = !acceptOpenStreetMap">Karte Anzeigen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acceptOpenStreetMap: false,
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
  .component-location {
    margin-top: 75px;
    padding: 0 $padding-sides;
  }

  .standort-address {
    h3 {
      margin-bottom: 25px;
    }

    p {
      margin-bottom: 10px;
    }
  }

  .open-map {
    margin: 35px 0 75px;

    iframe,
    .map-fallback {
      border: 1px solid rgba(0,0,0,.2);
      width: 100%;
      height: 450px;
    }

    .map-fallback {
      background-image: url('/images/map-fallback.webp');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      backdrop-filter: brightness(80%);
      position: relative;

      .fallback-note {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        background-color: $color-white;
        padding: 10px;
        font-size: 1.2rem;

        @media all and (min-width: $tablet) {
          width: 350px;
        }

        button {
          @include fuzzy-background;
          display: block;
          background-color: $color-green;
          color: $color-white;
          padding: 5px 20px;
          font-size: 1.6rem;
          text-decoration: none;
          transition: $base-transition;
          border: none;
          margin: 15px auto;

          &:hover {
            background-color: $color-green-light;
          }
        }
      }
    }
  }
</style>
