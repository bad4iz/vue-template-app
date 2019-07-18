<template lang="pug">
  v-navigation-drawer(
    v-model="getPrimaryDrawer.model"
    :permanent="getPrimaryDrawer.type == 'permanent'"
    :temporary="getPrimaryDrawer.type == 'temporary'"
    :clipped="getPrimaryDrawer.clipped"
    :floating="getPrimaryDrawer.floating"
    :mini-variant="getPrimaryDrawer.mini"
    absolute
    overflow
    touchless
    app
  )

    v-toolbar( flat class="transparent")
      v-list( class="pa-0")
        v-list-tile( avatar)
          v-list-tile-avatar
            img( src="@/assets/static/bubble.png")
    v-toolbar( flat class="transparent")
      h2 Какая твоя Fiesta ?

    v-list.mb-5( dense )
      v-divider
      v-list-tile(
        v-for="route in routeNavigationDrawer"
        :to="route.to"
        :key="route.to"
      )
        v-list-tile-action
          v-icon {{route.icon}}
        v-list-tile-content
          v-list-tile-title {{route.title}}

    v-list( dense)
      v-divider
      v-subheader settings
      v-list-tile(
        v-for="route in routeNavigationDrawerFooter"
        :to="route.to"
        :key="route.to"
      )
        v-list-tile-action
          v-icon {{route.icon}}
        v-list-tile-content
          v-list-tile-title {{route.title}}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import {
    routeNavigationDrawer,
    routeNavigationDrawerFooter,
  } from '../router';

  export default {
    name: 'NavigationDrawer',
    data: () => ({
      routeNavigationDrawer,

      routeNavigationDrawerFooter,
    }),
    methods: {
      ...mapActions([
        'toggleDarkAction',
        'setPrimaryDrawerAction',

        'setFooterAction',
      ]),
      goRoute(route) {
        this.$route.push(route);
      },
    },

    computed: {
      ...mapGetters(['getDark', 'getDrawers', 'getPrimaryDrawer', 'getFooter']),
    },
  };
</script>

<style scoped></style>
<!--:src="require('../assets/logo.svg')"-->
