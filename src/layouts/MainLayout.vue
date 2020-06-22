<template>
  <q-layout view="hhh LpR lFr">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Otto Klaus
        </q-toolbar-title>
        <div v-if="this.$store.state.currentUser">
          <span class="q-mr-sm text-bold">{{
            this.$store.state.currentUser
          }}</span>
          <q-avatar class="q-mr-lg">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <q-btn
            @click="onLogoutClick"
            text-color="dark"
            color="white"
            label="Cerrar Sesión"
            icon="meeting_room"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="this.$store.state.currentUser"
      v-model="leftDrawerOpen"
      :mini="mini"
      mini-to-overlay
      show-if-above
      bordered
      elevated
      dark
      content-class="bg-dark q-pt-lg"
      @mouseenter="mini = false"
      @mouseleave="mini = true"
    >
      <q-list>
        <!-- <q-item-label header>Navegación</q-item-label> -->
        <EssentialLink v-for="link in links" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="q-pa-xl" />
    </q-page-container>

    <q-footer class="bg-white text-dark text-bold" reveal>
      <q-toolbar>
        Felipe Castro Richter &copy; {{ new Date().getFullYear() }}
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { mapActions } from "vuex";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      mini: true,
      links: [
        {
          title: "Productos",
          icon: "list_alt",
          link: "/productos"
        },
        {
          title: "Agregar producto",
          icon: "add_box",
          link: "/agregar"
        }
      ]
    };
  },

  methods: {
    ...mapActions(["logOut"]),
    onLogoutClick: async function() {
      await this.logOut();
      this.$router.push("/");
    }
  }
};
</script>
