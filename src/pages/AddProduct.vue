<template>
  <q-page>
    <h2>Agregar producto</h2>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md column">
      <q-input
        dense
        class="col-4"
        filled
        v-model="codigo"
        label="Código"
        mask="S####"
        hint="1 letra y 4 números. Ejemplo: Z9999"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Necesitas ingresar un nombre'
        ]"
      />

      <q-input
        dense
        class="col-4"
        filled
        v-model="nombre"
        label="Nombre"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Necesitas ingresar un nombre'
        ]"
      />

      <q-input
        dense
        class="col-4"
        filled
        type="number"
        v-model="stock"
        label="Stock"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Necesitas ingresar el stock'
        ]"
      />

      <q-input
        dense
        class="col-4"
        filled
        type="number"
        v-model="precio"
        label="Precio"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Necesitas ingresar el precio'
        ]"
      />
      <div class="row">
        <q-btn label="Enviar" type="submit" color="primary" />
        <q-btn
          label="Limpiar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      codigo: null,
      nombre: null,
      stock: null,
      precio: null
    };
  },

  methods: {
    onSubmit: function() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
    },

    onReset: function() {
      this.nombre = null;
      this.codigo = null;
      this.stock = null;
      this.precio = null;
    }
  }
};
</script>

<style lang="scss" scoped></style>
