<template>
  <q-layout view="hhh Lpr fFf">
    <q-header class="bg-white text-dark" elevated>
      <q-toolbar>
        <q-toolbar-title>
          Otto Klaus
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :mini="mini"
      mini-to-overlay
      show-if-above
      bordered
      dark
      content-class="bg-dark q-pt-lg"
      @mouseenter="mini = false"
      @mouseleave="mini = true"
    >
      <q-list>
        <EssentialLink v-for="link in links" :key="link.title" v-bind="link" />
        <EssentialLink v-bind="logoutLink" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="q-pa-xl" />
    </q-page-container>

    <q-footer class="bg-white text-dark" reveal elevated>
      <q-toolbar>
        Felipe Castro Richter &copy; {{ new Date().getFullYear() }}
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

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
      ],
      logoutLink: {
        title: "Cerrar sesión",
        icon: "close"
      }
    };
  }
};
</script>
