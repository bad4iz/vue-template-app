<template>
  <v-app id="sandbox"  :dark="getDark">
    <NavigationDrawer />
    <v-toolbar :clipped-left="getPrimaryDrawer.clipped" dark  app absolute color="red darken-4">
      <v-toolbar-side-icon
        v-if="getPrimaryDrawer.type !== 'permanent'"
        @click.stop="setPrimaryDrawerAction({ model: !getPrimaryDrawer.model })"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Какая твоя Fiesta ?</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer :inset="getFooter.inset" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'App',
    components: {
      NavigationDrawer: () => import('./components/NavigationDrawer'),
    },
    data: () => ({}),
    methods: {
      ...mapActions([
        'toggleDarkAction',
        'setPrimaryDrawerAction',
        'setFooterAction',
      ]),
    },
    computed: {
      ...mapGetters(['getDark', 'getDrawers', 'getPrimaryDrawer', 'getFooter']),
    },
  };
</script>
