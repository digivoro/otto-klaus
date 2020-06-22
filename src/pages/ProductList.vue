<template>
  <q-page>
    <q-table
      title="Productos"
      :data="productos.juguetes"
      :columns="columns"
      row-key="codigo"
      selection="multiple"
      :selected-rows-label="getSelectedString"
      :selected.sync="selected"
      :pagination="paginationConfig"
      :dense="config.dense"
    />
    <q-drawer
      v-model="rightDrawerOpen"
      show-if-above
      side="right"
      dark
      content-class="q-pt-lg"
    >
      <q-list>
        <q-item-label header>Configuración de tabla</q-item-label>
        <q-item>
          <q-item-section>
            <q-toggle
              v-model="config.showOutOfStock"
              label="Mostrar items sin stock"
              right-label
            ></q-toggle>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-toggle
              v-model="config.dense"
              label="Tabla densa"
              right-label
            ></q-toggle>
          </q-item-section>
        </q-item>
        <q-separator dark />
        <q-item-label header>Acciones</q-item-label>
        <q-item v-for="(action, index) in actions" :key="index">
          <q-item-section>
            <q-btn
              :color="action.color"
              :active="action.active"
              :icon="action.icon"
              :label="action.title"
              stack
            >
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
import { functions } from "firebase";

export default {
  data: function() {
    return {
      selected: [],
      config: {
        showOutOfStock: true,
        dense: true
      },
      actions: [
        {
          title: "Modificar",
          icon: "edit",
          caption: "Modificar elemento seleccionado",
          active: false,
          color: "secondary"
        },
        {
          title: "Eliminar",
          icon: "delete",
          caption: "Eliminar elementos seleccionados",
          active: false,
          color: "primary"
        }
      ],
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
      ],
      paginationConfig: {
        rowsPerPage: 10
      }
    };
  },
  computed: mapState(["productos"]),
  methods: {
    getSelectedString() {
      return this.selected.length === 0
        ? ""
        : `${this.selected.length} record${
            this.selected.length > 1 ? "s" : ""
          } selected of ${this.productos.juguetes.length}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
