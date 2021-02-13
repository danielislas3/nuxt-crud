<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="(item, index) in articulos" :key="index">
      <ul>
        <li>  <nuxt-link :to="`/blog/${item.id}`">{{ item.titulo }}</nuxt-link></li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articulos: [
        { id: 1, titulo: "Articulo #1" },
        { id: 2, titulo: "Articulo #2" },
        { id: 3, titulo: "Articulo #3" },
        { id: 4, titulo: "Articulo #4" },
        { id: 5, titulo: "Articulo #5" }
      ]
    };
  }
};
</script>

<style></style>
