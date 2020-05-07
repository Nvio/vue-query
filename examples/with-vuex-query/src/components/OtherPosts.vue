<template>
  <ul v-if="$queries.loaded && !$queries.posts.loading">
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
