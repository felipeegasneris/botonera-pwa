<template>
  <v-layout column>
        <v-flex xs12>
          <v-card-title xs12 class="blue white--text">
            <span class="headline">Botonera </span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <v-btn slot="activator" dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile
                  @click="stopSongs"
                >
                  <v-list-tile-title>Detener</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-title>
        </v-flex>
        <v-flex>
          <v-layout row wrap>
            <v-flex class="btn-container" xs12 sm6 md4 align-self-center
              :key="index"
              v-for="(item, index) in $store.state.botonera.playlist"
              @click="SoundTrigger(item.songCode)"
            >
              <v-card flat tile>
                <v-btn class="btn-container__play" block large>{{item.description}}</v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
          
  </v-layout>
</template>

<script>

export default {
  methods:{
    async SoundTrigger(type) {
      try {
        await this.$store.dispatch('botonera/playSong', { type });
      } catch (e) {
        console.log(e);
      }
    },
    async stopSongs() {
      try {
        await this.$store.dispatch('botonera/stopSongs');
      } catch (e) {
        console.log(e);
      }

    },
  },
  async fetch({ store, params}) {
    await store.dispatch('botonera/getPlaylist');
  },
}
</script>

<style >
  .btn-container__play {
    overflow: hidden;
    
  }
</style>

