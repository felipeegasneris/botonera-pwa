<template>
  <section class="container">
    <v-app>
      <v-content>
        <v-container>
          Hello world
          <v-btn color="success">Success</v-btn>
          <v-btn color="error">Error</v-btn>
          <v-btn color="warning">Warning</v-btn>
          <v-btn color="info">Info</v-btn>
        </v-container>
      </v-content>
    </v-app>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>

</style>

