<template>
  <div id="app">
    <h1>{{ title}}</h1>
    <ul v-if="!$queries.posts.loading">
      <li v-for="post in $queries.posts.data" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import getPosts from "./queries/getPosts";

export default {
  queries: {
    posts: getPosts
  },
  data() {
    return {
      title: "My Posts"
    };
  }
};
</script>
