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
        await this.$store.dispatch('botonera/playSound', { type });
      } catch (e) {
        console.log(e);
      }

    },
    async getPlaylist() {
      await store.dispatch('botonera/getPlaylist');
    },
  },
  async mounted() {
    this.$store.dispatch('botonera/getPlaylist');
  },
}
</script>

<style>

</style>

