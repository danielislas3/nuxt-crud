<template>
  <div class="container-fluid mb-5">
    <h2>Editar tarea</h2>
    <span>{{ $route.params.id }}</span>
    <form @submit.prevent="editarTarea(tarea)">
      <input
        type="text"
        placeholder="Nombre de la tarea"
        class="form-control mb-2"
        v-model="tarea.nombre"
      />
      <b-button class="btn-warning btn" type="submit">Editar</b-button>
    </form>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
import { mapActions } from "vuex";

export default {
  async fetch({ store, params }) {
    const doc = await db
      .collection("tareas")
      .doc(params.id)
      .get();

    if (doc.exists) {
      let tarea = doc.data();
      tarea.id = doc.id;

      return store.commit("setTareaIndividual", tarea);
    }
    return doc;
  },
  computed: {
    tarea: {
      get() {
        return {
          nombre: this.$store.state.tarea.nombre,
          id: this.$store.state.tarea.id
        };
      }

    }
  },
  methods: {
    ...mapActions(["editarTarea"])
  }
};
</script>

<style></style>
