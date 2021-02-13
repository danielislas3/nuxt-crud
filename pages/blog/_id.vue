<template>
  <div>
    <nuxt-link to="/blog">Atras</nuxt-link>
    <div class="container-fluid mt-4">
      <h3>Detalle Articulo {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <span>{{ author.name }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  created() {
    this.prepare();
  },
  async asyncData({ params }) {
    try {
      const { data: post } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const { data: author } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      );
      return { post, author };
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },
  methods: {
    async prepare() {}
  }
};
</script>

<style></style>
