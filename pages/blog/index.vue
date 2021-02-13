<template>
  <div class="container mt-5">
    <div class="card mt-4" v-for="(item, index) in articulos" :key="index">
      <div class="card-body ">
        <nuxt-link :to="`/blog/${item.id}`">
         <h4> {{ item.title }}</h4>
        </nuxt-link>
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articulos: []
    };
  },
  created() {
    this.prepare();
  },
  methods: {
    async prepare() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.articulos = data;
    }
  }
};
</script>

<style></style>
