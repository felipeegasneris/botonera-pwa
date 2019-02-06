<template>
  <section class="container">
    <v-app>
      <v-content>
        <v-container>
          <v-btn v-bind:key="index" v-for="(item, index) in $store.state.botonera.playlist" @click="SoundTrigger(index)">{{item[index]}}</v-btn>
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

    },
    async getPlaylist() {
      await store.dispatch('botonera/GET_PLAYLIST');
    },
  },
  async fetch ({ store, params }) {
      await store.dispatch('botonera/GET_PLAYLIST');
    }
}
</script>

<style>

</style>

