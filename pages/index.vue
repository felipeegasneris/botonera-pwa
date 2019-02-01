<template>
  <section class="container">
    <v-app>
      <v-content>
        <v-container>
          Hello world
          <v-btn color="success" @click="SoundTrigger(1)">💥</v-btn>
          <v-btn color="error" @click="SoundTrigger(2)">💥💥</v-btn>
          <v-btn color="warning">Warning</v-btn>
          <v-btn color="info">Info</v-btn>
        </v-container>
      </v-content>
    </v-app>
  </section>
</template>

<script>

export default {
  methods:{
    async SoundTrigger(type) {
      try {
        await this.$axios.$get(`http://172.22.0.144:8080/play/${type}`)
      } catch (e) {
        console.log(e);
      }

    }
  }
}
</script>

<style>

</style>

