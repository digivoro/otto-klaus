<template>
  <q-page>
    <q-table
      title="Productos"
      :data="productos.juguetes"
      :columns="columns"
      row-key="codigo"
      selection="single"
      :selected.sync="selected"
    />
  </q-page>
</template>

<script>
import { mapState } from "vuex";
import { functions } from "firebase";

export default {
  data: function() {
    return {
      selected: [],
      columns: [
        {
          name: "codigo",
          required: true,
          label: "Código",
          align: "left",
          field: row => row.codigo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "nombre",
          required: true,
          label: "Nombre",
          align: "left",
          field: row => row.nombre,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "stock",
          required: true,
          label: "Stock",
          align: "center",
          field: row => row.stock,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "precio",
          required: true,
          label: "Precio [CLP]",
          align: "right",
          field: row => row.precio,
          format: val => `${val}`,
          sortable: true
        }
      ]
    };
  },
  computed: mapState(["productos"])
};
</script>

<style lang="scss" scoped></style>
