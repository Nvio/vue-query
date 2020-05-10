<template>
  <p v-if="$queries.posts.loading">Loading...</p>
  <ul v-else :key="$queries.posts.length">
    <li v-for="post in $queries.posts.data" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<script>
import getPosts from "../queries/getPosts";

export default {
  queries: {
    posts: getPosts
  }
};
</script>
