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