<template>
  <div class="home">
    <HeaderComponent :showScrollDown="true"/>
    <div class="page-content">
      <EventComponent anchor="termine"/>
      <!-- <HubertusComponent anchor="verein"/> -->
      <DorfkoenigComponent anchor="dorfkoenig"/>
      <LocationComponent anchor="standort"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'SG Hubertus Pfraundorf e.V.',
    ogTitle: 'SG Hubertus Pfraundorf e.V.',
    description: 'Die Schützengilde Hubertus Pfraundorf e.V. ist ein gemeinnütziger Verein im Ortsteil Pfraundorf am Inn, der Gemeinde Raubling. Bei uns wird in geselliger Runde mit Luftgewehr oder Luftpistole an einem zehn Meter Stand geschossen.',
    ogDescription: 'Die Schützengilde Hubertus Pfraundorf e.V. ist ein gemeinnütziger Verein im Ortsteil Pfraundorf am Inn, der Gemeinde Raubling. Bei uns wird in geselliger Runde mit Luftgewehr oder Luftpistole an einem zehn Meter Stand geschossen.',
    ogImage: '/images/loo-large.webp',
    twitterCard: 'summary_large_image',
  })
</script>