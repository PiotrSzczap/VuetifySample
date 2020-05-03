<template>
  <v-app>
    <v-app-bar app color="indigo" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/logo.png" />
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account-multiple", text: "Team", route: "/team" },
        {
          icon: "mdi-calendar-arrow-right",
          text: "Scheduler",
          route: "/scheduler"
        },
        {
          icon: "mdi-chart-scatter-plot-hexbin",
          text: "Charts",
          route: "/charts"
        }
      ]
    };
  }
};
</script>
