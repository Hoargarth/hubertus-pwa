<template>
  <div class="component-events" :id="anchor">
    <h2>Anstehende Termine</h2>
    <div class="event-cards">
      <BaseContentCard v-for="(event, index) in getCurrentThreeEvents" :key="index">
        <p class="event-title h3">{{ event.title }}</p>
        <p class="event-date">{{ dateConverted(event.date) }}</p>
        <p class="event-details">{{ event.details }}</p>
      </BaseContentCard>
    </div>
    <div class="event-action">
      <button @click="togglePopup()">Alle Termine</button>
    </div>
    <div class="events-popup" :class="isPopupOpen ? 'open' : ''">
      <div class="popup-content">
        <div class="popup-close"><button @click="togglePopup()">x</button></div>
        <p class="popup-title">Alle Termine</p>
        <BaseContentCard v-for="(event, index) in getCurrentEvents()" :key="index">
        <p class="event-title h3">{{ event.title }}</p>
        <p class="event-date">{{ dateConverted(event.date) }}</p>
        <p class="event-details">{{ event.details }}</p>
      </BaseContentCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopupOpen: false,
      events: [
        {
          title: '29.04.2023 – Preisverteilung Dorfkönigschießen',
          date: '04 29 2023',
          details: 'Am Samstag den 29. April findet um 18:00 Uhr die Siegerehrung des Dorfkönigschießens statt, in der Fahrzeughalle der Freiwilligen Feuerwehr Pfraundorf.',
        },
        {
          title: '08.06.2023 – Fronleichnam',
          date: '06 08 2023',
          details: 'Wie jedes Jahr beteiligen wir uns an Fronleichnam, alle Mitglieder sind herzlich eingeladen an Kirche und Umzug teilzunehmen.',
        },
        {
          title: '18.06.2023 – Vereinsjahrtag',
          date: '06 18 2023',
          details: 'Auch am Vereinsjahrtag nimmt der Schützenverein an Umzug und Kirche teil, Treffpunkt ist um 8:10 Uhr am Schützenhaus. Abmarsch beim Alten Wirt um 8:30 Uhr.',
        },
        {
          title: '08.07.2023 – Bierfest',
          date: '07 08 2023',
          details: 'Dieses Jahr findet am Samstag den 8. Juli, ab 19 Uhr,  wieder unser Bierfest auf dem Parkplatz der St. Nikolaus Kirche in Pfraundorf statt.',
        },
      ],
    };
  },
  props: {
    anchor: {
      type: String,
      default: '',
    },
  },
  computed: {
    getCurrentThreeEvents() {
      return this.getCurrentEvents().slice(0, 3);
    },
  },
  methods: {
    getCurrentEvents() {
      const currentTime = Date.now();
      const upcomingEvents = this.events.filter((event) => {
        let eventDate = Date.parse(event.date);
        eventDate += 86_400_000; // add + 24 hours so the event disappers after the actual day
        return eventDate >= currentTime;
      });

      return upcomingEvents;
    },
    dateConverted(dateString) {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return date.toLocaleDateString('de-DE', options);
    },
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .component-events {
    padding: $padding-topbottom $padding-sides;
    position: relative;
  }

  .event-cards {
    margin: 25px 0 35px;

    .content-card {
      margin-bottom: 35px;
    }
  }

  .event-title {
    font-weight: 700;
    letter-spacing: 0;
  }

  .event-date {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  .event-action {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      @include fuzzy-background;
      display: block;
      background-color: $color-green;
      color: $color-white;
      padding: 5px 20px;
      font-size: 2.2rem;
      text-decoration: none;
      transition: $base-transition;
      border: none;

      &:hover {
        background-color: $color-green-light;
      }
    }
  }

  .events-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .2);
    backdrop-filter: blur(3px);
    z-index: -10;
    opacity: 0;
    transition: $base-transition;

    &.open {
      z-index: 10;
      opacity: 1;
    }

    .popup-close {
      position: relative;

      button {
        position: absolute;
        top: -50px;
        right: 5px;
        font-size: 4rem;
        border: none;
        background: transparent;
      }
    }

    .popup-title {
      font-size: 3.2rem;
    }

    .popup-content {
      width: 95%;
      max-height: 80%;
      overflow-y: auto;
      background-color: $color-white;
      padding: 50px 15px;
      display: flex;
      flex-direction: column;
      gap: 25px;

      @media all and (min-width: $tablet) {
        width: 80%;
        max-height: 70%;
        padding: 50px;
      }

      .content-card {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 15px 20px;

        @media all and (min-width: $tablet) {
          flex-direction: row;
        }

        .event-title {
          flex-grow: 1;
        }

        .event-date {
          display: inline-block;
        }
      }
    }
  }
</style>
