<template>
  <footer class="footer">
    <div class="footer-pre">
      <div class="footer-logo">
        <BaseImage src="logo-large.webp"
          alt="Wappen Hubertus Pfraundorf" width="110" height="134"/>
      </div>
      <div class="footer-nav-1">
        <p class="footer-title">Hubertus Pfraundorf</p>
        <nav class="footer-nav">
          <a href="/#dorfkoenig">Dorfkönigschießen</a>
          <NuxtLink to="/vorstandschaft">Vorstandschaft</NuxtLink>
          <NuxtLink to="/ergebnisse">Ergebnisse</NuxtLink>
        </nav>
      </div>
      <div class="footer-contact">
        <p class="footer-title">Kontakt</p>
        <span>1. Schützenmeister</span>
        <span>Thomas Berger</span>
        <span>Eschenweg 1a</span>
        <span>83064 Raubling</span>
        <br />
        <span>Telefon: <a href="tel:08035 6131">08035 6131</a></span>
        <span>Email: <a href="mailto:vorstand@hubertus-pfraundorf.de">
          vorstand@hubertus-pfraundorf.de</a></span>
      </div>
      <div class="footer-nav-2">
        <p class="footer-title">Weiterführend</p>
        <nav class="footer-nav">
          <a v-for="(link, index) in externalLinks"
            :key="index"
            :href="link.href"
            rel="noopener"
            target="_blank">
            {{ link.title }}
          </a>
        </nav>
      </div>
    </div>
    <div class="footer-separator"></div>
    <div class="footer-copyright">
      <div class="copyright">© 1952 - {{ getCurrentYear() }} SG "Hubertus" Pfraundorf e.V</div>
      <nav class="privacy-nav">
        <NuxtLink to="/datenschutzerklaerung">Datenschutzerklärung</NuxtLink>
        <NuxtLink to="/impressum">Impressum</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      externalLinks: [
        {
          title: 'Schützengau Rosenheim',
          href: 'https://gau-rosenheim.de/',
        },
        {
          title: 'Schützenbezirk Oberbayern',
          href: 'https://www.bezobb.de/',
        },
        {
          title: 'Bayerische Sportschützenbund',
          href: 'https://www.bssb.de/',
        },
        {
          title: 'Deutscher Schützenbund',
          href: 'https://www.dsb.de/',
        },
      ],
    };
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer {
    @include fuzzy-background;
    background-color: $color-green;
    color: $color-white;

    @media all and (max-width: $mobile) {
      padding-bottom: 70px;
    }

    > div {
      max-width: $max-page-width;
      margin: 0 auto;
    }

    a {
      color: $color-white;
      text-decoration: none;

      &:hover,
      &:focus,
      &:active {
        color: $color-white;
        text-decoration: underline;
      }

      &:visited {
        color: $color-white;
        text-decoration: none;
      }
    }

    .footer-pre {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding: $padding-topbottom $padding-sides 0;
      text-align: center;

      @media screen and (min-width: $tablet) {
        flex-direction: row;
        text-align: left;
        align-items: flex-start;
        padding-bottom: $padding-topbottom;
      }

      > div {
        margin-bottom: 50px;

        @media screen and (min-width: $tablet) {
          margin: 0;
        }
      }
    }

    .footer-logo {
      align-self: center;
      order: 10;

      @media screen and (min-width: $tablet) {
        order: unset;
      }

      img {
        max-width: 110px;
        height: auto;
      }
    }

    .footer-title {
      font-size: 2.4rem;
      margin-bottom: 15px;
    }

    .footer-contact {
      span {
        display: block;
      }
    }

    .footer-nav {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .footer-separator {
      width: 100%;
      height: 2px;
      background-color: rgba(0,0,0,.2);
      max-width: initial;
      padding: 0;
    }

    .footer-copyright {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-between;
      font-size: 1.2rem;
      padding: $padding-sides;

      @media all and (min-width: $tablet) {
        flex-direction: row;
      }
    }

    .privacy-nav {
        display: flex;
        gap: 25px;
      }

      .copyright {
        @media all and (max-width: $mobile) {
          margin: 15px 0;
        }
      }
  }
</style>
