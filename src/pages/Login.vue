<template>
  <q-page class="flex flex-center">
    <h1 v-if="this.$store.state.currentUser">
      Bienvenidx {{ this.$store.state.currentUser }}
    </h1>
    <q-form v-else @submit.prevent="onSubmit" class="q-gutter-md column">
      <q-input
        filled
        v-model="user"
        label="Usuario"
        hint="Tu correo corporativo"
        lazy-rules
        type="email"
        :rules="[
          val =>
            (val && val.length > 0) || 'Debes ingresar tu nombre de usuario'
        ]"
      >
      </q-input>

      <q-input
        filled
        type="password"
        v-model="pass"
        label="Contraseña"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Debes ingresar tu contraseña',
          val =>
            (val.length >= 8 && val.length <= 12) ||
            'La contraseña debe tener entre 8 y 12 caracteres'
        ]"
      />

      <q-btn label="Enviar" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      user: "asd@ottoklaus.com",
      pass: "asdf1234"
    };
  },
  methods: {
    ...mapActions(["logIn"]),
    onSubmit: function() {
      this.logIn({ user: this.user, pass: this.pass });
    }
  }
};
</script>

<style lang="scss" scoped></style>
