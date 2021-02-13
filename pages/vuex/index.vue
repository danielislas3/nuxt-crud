<template>
  <div class="container-fluid">
    <h2>Vuex</h2>

    <form @submit.prevent="agregarTarea(tarea)">
      <input type="text" class="form-control mb-2" v-model="tarea" />
      <b-button type="submit">Agregar</b-button>
    </form>
    <ul>
      <li v-for="(item, index) in tareas" :key="index">
        {{ item.id }} - {{ item.nombre }}

        <b-button class="btn btn-warning" :to="`/vuex/${item.id}`">Editar</b-button>
        <b-button class="btn btn-danger" @click="eliminarTarea(item)"
          >Eliminar</b-button
        >
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      tarea: ""
    };
  },
  // fetch({ store }) {
  //   return db
  //     .collection("tareas")
  //     .get()
  //     .then(query => {
  //       const tareas = [];
  //       query.forEach(element => {
  //         console.log(element.data());
  //         tareas.push(element.data());
  //       });
  //       return store.commit("setTareas", tareas);
  //     })
  //     .catch(err => {
  //       console.log("err: ", err);
  //     });
  // }
  computed: {
    ...mapState(["tareas"])
  },
  methods: {
    ...mapActions(["agregarTarea", "eliminarTarea", "updateTarea"])
  }
};
</script>

<style></style>
