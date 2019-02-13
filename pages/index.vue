<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container grid-list-xs fluid>
          <v-layout row wrap>
            <v-flex align-self-center
              :key="index"
              v-for="(item, index) in $store.state.botonera.playlist"
              @click="SoundTrigger(index)"
            >
              <v-card flat tile>
                <v-btn>{{item.icon}}</v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
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

