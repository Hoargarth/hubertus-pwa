<template>
  <div class="ergebnisse">
    <div class="page-content">
      <h1>Downloads</h1>
      <DownloadGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Ergebnisse Dorfkönig und Saison | SG Hubertus Pfraundorf e.V.',
    ogTitle: 'Ergebnisse Dorfkönig und Saison | SG Hubertus Pfraundorf e.V.',
    description: 'Hier können die Ergebnisse der vergangenen Raublinger Dorfkönigschießen sowie die Endergebnisse der Saison als PDF heruntergeladen werden.',
    ogDescription: 'Hier können die Ergebnisse der vergangenen Raublinger Dorfkönigschießen sowie die Endergebnisse der Saison als PDF heruntergeladen werden.',
    ogImage: '/images/loo-large.webp',
    twitterCard: 'summary_large_image',
  })
</script>

<style scoped>
  .page-content {
    padding: 100px 0;
  }
</style>
