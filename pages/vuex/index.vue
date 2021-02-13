<template>
  <div>
    <h2>Vuex</h2>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
export default {
  fetch({ store }) {
    return db
      .collection("tareas")
      .get()
      .then(query => {
        const tareas = [];
        query.forEach(element => {
          console.log(element.data());
          tareas.push(element.data());
        });
        return store.commit("setTareas", tareas);
      })
      .catch(err => {
        console.log("err: ", err);
      });
  }
};
</script>

<style></style>
